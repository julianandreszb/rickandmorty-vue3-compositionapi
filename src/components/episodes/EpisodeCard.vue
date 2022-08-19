<script setup>
const props = defineProps({
  episode: {
    required: true,
    type: Object,
  },
});

const getSeasonFromEpisodeName = (episodeName) => {
  return episodeName.match(/(?!x)[0-9]+/g)[0];
};
const getEpisodeFromEpisodeName = (episodeName) => {
  return episodeName.match(/(?!x)[0-9]+/g)[1];
};
</script>

<template>
  <article class="episode-card-item">
    <div class="episode-image-wrapper">
      <img
        class="episode-image"
        :src="`/${getSeasonFromEpisodeName(props.episode.episode)}.jpg`"
        :alt="props.episode.name"
      />
    </div>
    <div class="episode-info">
      <div>
        <h2 data-testid="name">{{ props.episode.name }}</h2>
      </div>
      <div>
        <h3 class="character-description">Air Date:</h3>
        <a data-testid="episode-name">{{ props.episode.air_date }}</a>
      </div>
      <div>
        <h3 class="character-description">Season:</h3>
        <a data-testid="episode-name">{{
          getSeasonFromEpisodeName(props.episode.episode)
        }}</a>
      </div>
      <div>
        <h3 class="character-description">Episode:</h3>
        <a data-testid="episode-name">{{
          getEpisodeFromEpisodeName(props.episode.episode)
        }}</a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.episode-card-item {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 1rem;
  width: 100%;
  box-shadow: 1px 2px 6px -2px #000000;
}

.episode-card-item h2 {
  font-size: 2rem;
  font-weight: 800;
}

.episode-card-item h3 {
  font-size: 1.5rem;
  font-weight: 600;
}
.character-description {
  color: #9b9b9b;
}

.episode-card-item h3:first-letter {
  text-transform: capitalize;
}

.episode-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.episode-image {
  /*background-image: url("/portal.png");*/
  background-repeat: no-repeat;
  border-radius: 1rem 1rem 0 0;
  object-fit: contain;
  width: 100%;
  max-width: 160px;
}

.episode-info {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  /*background: url("/portal.png") no-repeat;*/
}

.episode-info a {
  font-size: 1.8rem;
  text-transform: capitalize;
}

@media (min-width: 480px) {
  .episode-card-item {
    flex-direction: row;
    max-height: 22rem;
    max-width: 55rem;
  }

  .episode-image {
    border-radius: 1rem 0 0 1rem;
    object-fit: cover;
    height: 100%;
  }
}
</style>
