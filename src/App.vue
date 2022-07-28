<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="container">
    <!-- NAVBAR -->
    <nav-bar />
    <!-- END NAVBAR -->

    <!-- MAIN SECTION -->
    <RouterView />
    <!-- END MAIN SECTION -->

    <!-- SECTION FOOTER -->
    <!-- END SECTION FOOTER -->
  </div>
</template>

<style scoped></style>
