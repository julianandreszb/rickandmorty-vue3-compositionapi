<script setup>
import { computed, nextTick, reactive, ref } from "vue";
const emit = defineEmits([
  "onPrevButtonClick",
  "onNextButtonClick",
  "onPageSelected",
]);
const props = defineProps({
  startPage: {
    type: Number,
    default: 1,
  },
  pages: {
    type: Number,
    required: true,
  },
});

const currentPage = ref(props.startPage);
let pos = { top: 0, left: 0, x: 0, y: 0 };
const isPrevButtonVisible = computed(() => {
  return currentPage.value > 1;
});
const isNextButtonVisible = computed(() => {
  return currentPage.value < props.pages;
});
const pageSelectorClass = reactive({ active: false });

const prevButtonCall = () => {
  currentPage.value--;
  emit("onPrevButtonClick", currentPage.value);
};
const nextButtonCall = () => {
  currentPage.value++;
  emit("onNextButtonClick", currentPage.value);
};
const goToPage = (page) => {
  currentPage.value = page;
  emit("onPageSelected", currentPage.value);
};
const hidePageSelector = () => {
  pageSelectorClass.active = false;
  // const pageList = document.getElementById("page-list");
  // pageList.scrollLeft = 100;
};
const onCurrentPageClick = async () => {
  pageSelectorClass.active = true;
  await nextTick();
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
};
const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x;
  //const dy = e.clientY - pos.y;

  // Scroll the element
  //e.target.scrollTop = pos.top - dy;
  e.target.scrollLeft = pos.left - dx;
};
const mouseUpHandler = function (e) {
  e.target.removeEventListener("mousemove", mouseMoveHandler);
  e.target.removeEventListener("mouseup", mouseUpHandler);

  e.target.style.cursor = "grab";
};
const mouseDownHandler = (e) => {
  e.target.style.cursor = "grabbing";

  pos = {
    // The current scroll
    left: e.target.scrollLeft,
    top: e.target.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
  };

  e.target.addEventListener("mousemove", mouseMoveHandler);
  e.target.addEventListener("mouseup", mouseUpHandler);
};
</script>

<template>
  <div class="paginator-container">
    <div class="paginator">
      <button
        class="btn-prev primary-button"
        :class="{ invisible: !isPrevButtonVisible }"
        @click="prevButtonCall"
        data-testid="prev-button"
      >
        Prev
      </button>
      <span
        @click="onCurrentPageClick"
        class="page-number"
        data-testid="current-page"
        >{{ currentPage }}</span
      >
      <button
        class="btn-next primary-button"
        :class="{ invisible: !isNextButtonVisible }"
        @click="nextButtonCall"
        data-testid="next-button"
      >
        Next
      </button>
    </div>
    <div class="page-selector" :class="pageSelectorClass">
      <div class="page-selector-options">
        <p>Select Page</p>
        <button class="cancel-button" @click="hidePageSelector">Cancel</button>
      </div>
      <div
        class="page-list-container"
        @mousedown="mouseDownHandler"
        @mouseleave="mouseUpHandler"
      >
        <div class="page-list-backdrop"></div>
        <div class="page-list-wrapper">
          <ul class="page-list">
            <li
              :class="{ 'highlight-page': currentPage === i + 1 }"
              class="not-selectable"
              v-for="i in [...Array(props.pages).keys()]"
              :key="i"
              @click="goToPage(i + 1)"
            >
              {{ i + 1 }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.paginator-container {
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.paginator {
  display: flex;
  width: 20rem;
  height: 4rem;
  justify-content: space-evenly;
  align-items: center;
}

.invisible {
  visibility: hidden;
}

.primary-button {
  border-radius: 0.5rem;
  border-style: none;
  background-color: #19a0fb;
  color: #ffffff;
  cursor: pointer;
  height: 3rem;
  padding: 0.1rem 1rem;
}

.cancel-button {
  border-radius: 0.5rem;
  border-style: none;
  background-color: #dc0606;
  color: #ffffff;
  cursor: pointer;
  height: 3rem;
  padding: 0.1rem 1rem;
}

.btn-prev:hover,
.btn-next:hover {
  background-color: #015594;
  color: #ffffff;
}

.page-number {
  text-align: center;
  width: 4rem;
  font-size: 1.5rem;
  cursor: pointer;
  border: dotted #9b9b9b 2px;
  border-radius: 1rem;
}

.page-selector {
  display: none;
  position: absolute;
  z-index: 10;
  width: 100%;
  /*height: 30rem;*/
  background-color: #ffffff;
}
.page-selector.active {
  display: flex;
  flex-direction: column;
}

.page-selector-options {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  height: 4rem;
  background-color: #5ec4ff;
}

.page-selector-options > p {
  font-size: 2rem;
}

/*.page-list-container {*/
/*  !*background-color: blueviolet;*!*/
/*  height: 10rem;*/
/*  !*display: flex;*!*/
/*  !*align-items: center;*!*/
/*  !*justify-content: center;*!*/
/*  !*overflow-x: scroll;*!*/
/*}*/

.page-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  overflow-x: auto;
  height: 10rem;
  /*cursor: grab;*/
  padding: 0 2rem;
}

.page-list > li {
  font-size: 3rem;
  cursor: pointer;
  min-width: 4rem;
  height: 4rem;
  text-align: center;
}

.not-selectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.highlight-page {
  color: #ffffff;
  font-weight: 800;
  background-color: #5ec4ff;
  border-radius: 50%;
}

.page-list-wrapper {
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 5rem;
}

.page-list-container {
  position: relative;
}

.page-list-backdrop {
  position: fixed;
  z-index: 5;
}

/*https://codepen.io/pouretrebelle/pen/kveRJX*/
</style>
