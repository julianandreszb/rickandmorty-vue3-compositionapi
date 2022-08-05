<script setup></script>

<template>
  <main class="main">
    <img class="mainLogo" src="../../public/mainLogo.png" alt="" />
    <h1>Rick and morty</h1>
    <h2>Vue 3 + Composition API</h2>
  </main>
</template>

<style>
.main {
  margin-top: 6rem;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mainLogo {
  height: 50%;
}

h1 {
  font-size: 3rem;
  font-weight: 300;
}

h2 {
  font-size: 1.5rem;
  font-weight: 300;
}

@media (min-width: 480px) {
  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 2.5rem;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 7rem;
  }

  h2 {
    font-size: 3.5rem;
  }
}
</style>
