<script setup>
const props = defineProps({
  character: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <article class="character-card-item">
    <div>
      <img
        class="character-image"
        :src="props.character.image"
        :alt="props.character.name"
      />
    </div>
    <div class="character-info">
      <div>
        <h2 data-testid="name">{{ props.character.name }}</h2>
        <h3>
          <span data-testid="status-icon"></span>
          <span data-testid="status">{{ props.character.status }}</span> -
          <span data-testid="species">{{ props.character.species }}</span>
        </h3>
      </div>
      <div>
        <h3 class="character-description">Last known location:</h3>
        <a data-testid="location-name">{{ props.character.location.name }}</a>
      </div>
      <div>
        <h3 class="character-description">First seen in:</h3>
        <a data-testid="origin-name">{{ props.character.origin.name }}</a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.character-card-item {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 1rem;
  width: 100%;
  box-shadow: 1px 2px 6px -2px #000000;
}

.character-card-item h2 {
  font-size: 2rem;
  font-weight: 800;
}

.character-card-item h3 {
  font-size: 1.5rem;
  font-weight: 600;
}
.character-description {
  color: #9b9b9b;
}

.character-card-item h3:first-letter {
  text-transform: capitalize;
}

.character-image {
  border-radius: 1rem 1rem 0 0;
  object-fit: contain;
  width: 100%;
}

.character-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}

.character-info a {
  font-size: 1.8rem;
  text-transform: capitalize;
}

@media (min-width: 480px) {
  .character-card-item {
    flex-direction: row;
    max-height: 22rem;
    max-width: 55rem;
  }

  .character-image {
    border-radius: 1rem 0 0 1rem;
    object-fit: cover;
    height: 100%;
  }
}
</style>
