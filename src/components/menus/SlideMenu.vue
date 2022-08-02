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
  width: 10rem;
  height: 100vh;
}
.active {
  display: flex;
  flex-direction: column;
}
.inactive {
  display: none;
}
</style>
