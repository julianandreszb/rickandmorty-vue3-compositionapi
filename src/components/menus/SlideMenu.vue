<script setup>
import MenuBase from "@/components/menus/MenuBase.vue";
import { menuOptions } from "@/components/menus/menu.config";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const emit = defineEmits(["onSlideMenuOptionSelected"]);
const props = defineProps({
  isSlideMenuOpen: {
    type: Boolean,
    default: false,
  },
});
const route = useRoute();

const isSlideMenuOpenRef = ref(props.isSlideMenuOpen);

watch(
  () => props.isSlideMenuOpen,
  (newOpenSlideMenuValue) => {
    isSlideMenuOpenRef.value = newOpenSlideMenuValue;
  }
);

watch(
  () => route.path,
  (newRoutePath, oldRoutePath) => {
    if (newRoutePath !== oldRoutePath) {
      isSlideMenuOpenRef.value = false;
      emit("onSlideMenuOptionSelected", isSlideMenuOpenRef.value);
    }
  }
);
</script>

<template>
  <div
    data-testid="slide-menu"
    :class="{ open: isSlideMenuOpen, close: !isSlideMenuOpen }"
    class="slideMenu"
  >
    <menu-base data-testid="slide-menu-base" :options="menuOptions" />
  </div>
</template>

<style scoped>
.slideMenu {
  position: fixed;
  background-color: #ffffff;
  top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -0.3rem 0.4rem 0.6rem rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 50%;
  min-width: 120px;
  z-index: 8;
}

.slideMenu.open {
  transform: translatex(100%);
  transition: transform 0.5s ease-in-out;
}

.slideMenu.close {
  transform: translatex(200%);
  box-shadow: 0 0;
  transition: transform 0.5s ease-in-out 0.2s, box-shadow 1s;
}

@media (min-width: 768px) {
  .slideMenu {
    display: none;
  }
}
</style>
