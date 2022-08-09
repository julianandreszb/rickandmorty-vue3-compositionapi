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
    <transition name="slide" mode="out-in">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :class="backdropClass" :is="Component"></component>
        </transition>
      </router-view>
    </transition>
    <!-- END MAIN SECTION -->

    <!-- SECTION FOOTER -->
    <!-- END SECTION FOOTER -->
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
