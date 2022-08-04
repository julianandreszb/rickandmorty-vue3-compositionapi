<script setup>
import { RouterView } from "vue-router";
import { ref, computed } from "vue";
import NavBar from "@/components/menus/NavBar.vue";
import SlideMenu from "@/components/menus/SlideMenu.vue";

const openSlideMenu = ref(false);
const onMenuOpen = (isMenuOpen) => {
  openSlideMenu.value = isMenuOpen;
};
const backdropClass = computed(() => {
  return {
    backdrop: openSlideMenu.value,
    "backdrop-inactive": !openSlideMenu.value,
  };
});
</script>

<template>
  <div class="container">
    <!-- NAVBAR -->
    <nav-bar @isMenuOpen="onMenuOpen" />
    <!-- END NAVBAR -->

    <!-- SLIDE MENU -->
    <slide-menu :open-slide-menu="openSlideMenu" />
    <!-- END SLIDE MENU -->

    <!-- MAIN SECTION -->
    <RouterView :class="backdropClass" />
    <!-- END MAIN SECTION -->

    <!-- SECTION FOOTER -->
    <!-- END SECTION FOOTER -->
  </div>
</template>

<style></style>
