<script setup>
import { getCharacters } from "@/utils/Characters";
import { onMounted, reactive, ref } from "vue";
import CharacterCard from "@/components/characters/CharacterCard.vue";
import Paginator from "@/components/Paginator.vue";
import LoadingDialog from "@/components/LoadingDialog.vue";

const state = reactive({
  characters: {
    info: { pages: 0 },
    results: [],
  },
});

const totalPages = ref(0);
const currentPage = ref(1);
const isLoading = ref(false);

onMounted(async () => {
  state.characters = await getCharacters();
  totalPages.value = state.characters.info.pages;
});

const pageChangeHandler = async (page) => {
  isLoading.value = true;
  currentPage.value = page;
  state.characters = await getCharacters(page);
  isLoading.value = false;
};
</script>

<template>
  <div class="characters-container">
    <h1 class="title">Characters</h1>
    <div v-if="isLoading" class="loading-dialog-wrapper">
      <LoadingDialog :is-open="isLoading" />
    </div>
    <article v-if="!isLoading" class="characters-list">
      <CharacterCard
        v-for="character in state.characters.results"
        :key="character.id"
        :character="character"
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
  background-color: chartreuse;
  justify-content: center;
  align-items: center;
}
</style>
