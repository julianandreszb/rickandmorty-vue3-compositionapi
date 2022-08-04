<script setup>
import MenuBase from "@/components/menus/MenuBase.vue";
import { menuOptions } from "@/components/menus/menu.config";
import { computed } from "vue";

const props = defineProps({
  openSlideMenu: {
    type: Boolean,
    default: false,
  },
});
const slideMenuClass = computed(() => {
  return { active: props.openSlideMenu, inactive: !props.openSlideMenu };
});
</script>

<template>
  <div data-testid="slide-menu" :class="slideMenuClass" class="slideMenu">
    <menu-base data-testid="slide-menu-base" :options="menuOptions" />
  </div>
</template>

<style scoped>
.slideMenu {
  position: fixed;
  background-color: #ffffff;
  top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -0.3rem 0.4rem 0.6rem rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 50%;
  min-width: 120px;
  z-index: 8;
}

.slideMenu.active {
  transform: translatex(100%);
  transition: transform 0.5s ease-in-out;
}

.slideMenu.inactive {
  transform: translatex(200%);
  box-shadow: 0 0;
  transition: transform 0.5s ease-in-out 0.2s, box-shadow 1s;
}

@media (min-width: 768px) {
  .slideMenu {
    display: none;
  }
}
</style>
