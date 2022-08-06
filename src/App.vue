<script setup>
import { RouterView } from "vue-router";
import { computed, ref } from "vue";
import NavBar from "@/components/menus/NavBar.vue";
import SlideMenu from "@/components/menus/SlideMenu.vue";

const isMenuOpen = ref(false);
const toggleMenu = (value) => {
  isMenuOpen.value = value;
};
const backdropClass = computed(() => {
  return isMenuOpen.value ? { backdrop: true } : { "backdrop-inactive": true };
});
</script>

<template>
  <div class="container">
    <!-- NAVBAR -->
    <nav-bar :is-menu-open="isMenuOpen" @onToggleMenu="toggleMenu" />
    <!-- END NAVBAR -->

    <!-- SLIDE MENU -->
    <slide-menu
      @onSlideMenuOptionSelected="toggleMenu"
      :is-slide-menu-open="isMenuOpen"
    />
    <!-- END SLIDE MENU -->

    <!-- MAIN SECTION -->
    <RouterView :class="backdropClass" />
    <!-- END MAIN SECTION -->

    <!-- SECTION FOOTER -->
    <!-- END SECTION FOOTER -->
  </div>
</template>

<style></style>
