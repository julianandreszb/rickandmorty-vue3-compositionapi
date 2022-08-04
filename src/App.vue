<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/menus/NavBar.vue";
import SlideMenu from "@/components/menus/SlideMenu.vue";
import { ref } from "vue";

const openSlideMenu = ref(false);
const onMenuOpen = (isMenuOpen) => {
  openSlideMenu.value = isMenuOpen;
};
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
    <div>
      <RouterView />
    </div>
    <!-- END MAIN SECTION -->

    <!-- SECTION FOOTER -->
    <!-- END SECTION FOOTER -->
  </div>
</template>

<style scoped></style>
