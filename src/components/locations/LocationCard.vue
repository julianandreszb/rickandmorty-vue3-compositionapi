<script setup>
const props = defineProps({
  location: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <article class="location-card-item">
    <div class="location-image-wrapper">
      <img
        class="location-image"
        src="/portal.png"
        :alt="props.location.name"
      />
    </div>
    <div class="location-info">
      <div>
        <h2 data-testid="name">{{ props.location.name }}</h2>
      </div>
      <div>
        <h3 class="character-description">Dimension:</h3>
        <a data-testid="location-name">{{ props.location.dimension }}</a>
      </div>
      <div>
        <h3 class="character-description">Type:</h3>
        <a data-testid="location-name">{{ props.location.type }}</a>
      </div>
      <div>
        <h3 class="character-description">Residents:</h3>
        <a data-testid="location-name">{{ props.location.residents.length }}</a>
      </div>
      <div>
        <!--        <h3 class="character-description">First seen in:</h3>-->
        <!--        <a data-testid="origin-name">{{ props.location.origin.name }}</a>-->
      </div>
    </div>
  </article>
</template>

<style scoped>
.location-card-item {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 1rem;
  width: 100%;
  box-shadow: 1px 2px 6px -2px #000000;
}

.location-card-item h2 {
  font-size: 2rem;
  font-weight: 800;
}

.location-card-item h3 {
  font-size: 1.5rem;
  font-weight: 600;
}
.character-description {
  color: #9b9b9b;
}

.location-card-item h3:first-letter {
  text-transform: capitalize;
}

.location-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.location-image {
  /*background-image: url("/portal.png");*/
  background-repeat: no-repeat;
  border-radius: 1rem 1rem 0 0;
  object-fit: contain;
  width: 100%;
  max-width: 160px;
}

.location-info {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  /*background: url("/portal.png") no-repeat;*/
}

.location-info a {
  font-size: 1.8rem;
  text-transform: capitalize;
}

@media (min-width: 480px) {
  .location-card-item {
    flex-direction: row;
    max-height: 22rem;
    max-width: 55rem;
  }

  .location-image {
    border-radius: 1rem 0 0 1rem;
    object-fit: cover;
    height: 100%;
  }
}
</style>
