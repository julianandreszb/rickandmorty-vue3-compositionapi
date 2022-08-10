<script setup>
import CharacterCard from "@/components/CharacterCard.vue";
const characters = [
  {
    id: 21,
    name: "Aqua Morty",
    status: "unknown",
    species: "Humanoid",
    type: "Fish-Person",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/22",
    ],
    url: "https://rickandmortyapi.com/api/character/21",
    created: "2017-11-04T22:39:48.055Z",
  },
  {
    id: 22,
    name: "Aqua Rick",
    status: "unknown",
    species: "Humanoid",
    type: "Fish-Person",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/28",
    ],
    url: "https://rickandmortyapi.com/api/character/22",
    created: "2017-11-04T22:41:07.171Z",
  },
];
</script>

<template>
  <div>
    <h1>Characters</h1>
    <article class="characters-list">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </article>
  </div>
</template>

<style scoped>
.characters-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 3rem;
  gap: 2rem;
}
</style>
