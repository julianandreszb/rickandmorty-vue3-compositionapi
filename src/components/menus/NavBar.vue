<script setup>
import { ref } from "vue";

const emit = defineEmits(["isMenuOpen"]);
const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    default: false,
  },
});
const isMenuOpen = ref(props.isMenuOpen);
import MenuBase from "@/components/menus/MenuBase.vue";
import { menuOptions } from "@/components/menus/menu.config";

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  emit("isMenuOpen", isMenuOpen.value);
};
</script>

<template>
  <nav class="navbar">
    <div data-testid="logo" class="logo">
      <router-link data-testid="menu-option-home" :to="{ name: 'home' }">
        <img src="/imgLogo.png" alt="Rick and morty" />
      </router-link>
    </div>
    <ul @click="toggleMenu" data-testid="toggle-menu" class="toggle-menu">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <menu-base data-testid="menu-base" :options="menuOptions" />
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  display: flex;
  height: 6rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
  font-size: 2rem;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.logo {
  width: 16rem;
  padding: 0 1rem;
  cursor: pointer;
}

.logo img {
  width: 100%;
}

.toggle-menu {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: end;
  margin-right: 1rem;
  cursor: pointer;
}

.toggle-menu li {
  height: 0.5rem;
  background-color: #19a0fb;
  border-radius: 0.2rem;
}

.toggle-menu li:nth-child(1) {
  width: 3rem;
}

.toggle-menu li:nth-child(2) {
  width: 2.5rem;
}

.toggle-menu li:nth-child(3) {
  width: 2rem;
}

.toggle-menu:hover > li {
  background-color: #0062a2;
}

.menu-container {
  display: none;
}

@media (min-width: 768px) {
  .toggle-menu {
    display: none;
  }

  .menu-container {
    display: flex;
    gap: 0.5rem;
    margin-right: 1rem;
  }

  .menu-container > li {
    height: 3rem;
    color: #19a0fb;
    padding: 0 2rem;
    font-weight: 800;
    cursor: pointer;
  }

  .menu-container > li:hover {
    color: #5ec4ff;
  }
}
</style>
