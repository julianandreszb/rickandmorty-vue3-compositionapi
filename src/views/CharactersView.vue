<script setup>
import { getCharacters } from "@/utils/Characters";
import { onMounted, reactive } from "vue";
import CharacterCard from "@/components/CharacterCard.vue";

const state = reactive({ characters: [] });

onMounted(async () => {
  state.characters = await getCharacters();
});
</script>

<template>
  <div>
    <h1 class="title">Characters</h1>
    <article class="characters-list">
      <CharacterCard
        v-for="character in state.characters.results"
        :key="character.id"
        :character="character"
      />
    </article>
  </div>
</template>

<style scoped>
.title {
  margin-left: 3rem;
}

.characters-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 3rem;
  gap: 2rem;
}
</style>
