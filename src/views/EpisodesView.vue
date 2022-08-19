<script setup>
import { getEpisodes } from "@/utils/Episodes";
import { computed, onMounted, reactive, ref } from "vue";
import EpisodeCard from "@/components/episodes/EpisodeCard.vue";
import Paginator from "@/components/Paginator.vue";
import LoadingDialog from "@/components/LoadingDialog.vue";

const state = reactive({
  episodes: {
    info: { pages: 0 },
    results: [],
  },
});

const totalPages = ref(0);
const currentPage = ref(1);
const isLoading = ref(true);

onMounted(async () => {
  state.episodes = await getEpisodes();
  isLoading.value = false;
  totalPages.value = state.episodes.info.pages;
});

const pageChangeHandler = async (page) => {
  isLoading.value = true;
  currentPage.value = page;
  state.episodes = await getEpisodes(page);
  isLoading.value = false;
};
</script>

<template>
  <div class="episodes-container">
    <h1 class="title">Episodes</h1>
    <div v-if="isLoading" class="loading-dialog-wrapper">
      <LoadingDialog :is-open="isLoading" />
    </div>
    <article v-if="!isLoading" class="characters-list">
      <EpisodeCard
        v-for="episode in state.episodes.results"
        :key="episode.id"
        :episode="episode"
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
.episodes-container {
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
