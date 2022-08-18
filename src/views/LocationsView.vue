<script setup>
import { getLocations } from "@/utils/Locations";
import { onMounted, reactive, ref } from "vue";
import LocationCard from "@/components/locations/LocationCard.vue";
import Paginator from "@/components/Paginator.vue";
import LoadingDialog from "@/components/LoadingDialog.vue";

const state = reactive({
  locations: {
    info: { pages: 0 },
    results: [],
  },
});

const totalPages = ref(0);
const currentPage = ref(1);
const isLoading = ref(true);

onMounted(async () => {
  state.locations = await getLocations();
  console.dir(state.locations);
  isLoading.value = false;
  totalPages.value = state.locations.info.pages;
});

const pageChangeHandler = async (page) => {
  isLoading.value = true;
  currentPage.value = page;
  state.locations = await getLocations(page);
  isLoading.value = false;
};
</script>

<template>
  <div class="characters-container">
    <h1 class="title">Locations</h1>
    <div v-if="isLoading" class="loading-dialog-wrapper">
      <LoadingDialog :is-open="isLoading" />
    </div>
    <article v-if="!isLoading" class="characters-list">
      <LocationCard
        v-for="location in state.locations.results"
        :key="location.id"
        :location="location"
      />
    </article>
    <Paginator
      v-if="!isLoading"
      :start-page="currentPage"
      :pages="totalPages"
      @on-prev-button-click="pageChangeHandler"
      @on-next-button-click="pageChangeHandler"
      @on-page-selected="pageChangeHandler"
    />
  </div>
</template>

<style scoped>
.characters-container {
  position: relative;
}

.title {
  margin-left: 3rem;
}

.characters-list {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  padding: 3rem;
  gap: 2rem;
}

.loading-dialog-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
