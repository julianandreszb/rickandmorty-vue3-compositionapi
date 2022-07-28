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

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  emit("isMenuOpen", isMenuOpen.value);
};
</script>

<template>
  <nav class="navbar">
    <div data-testid="logo" class="logo">
      <img src="/imgLogo.png" alt="Rick and morty" />
    </div>
    <ul @click="toggleMenu" data-testid="toggle-menu" class="toggle-menu">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul data-testid="large-menu" class="large-menu">
      <li data-testid="large-menu-option-characters" class="large-menu-option">
        Characters
      </li>
      <li data-testid="large-menu-option-locations" class="large-menu-option">
        Locations
      </li>
      <li data-testid="large-menu-option-episodes" class="large-menu-option">
        Episodes
      </li>
    </ul>
  </nav>
</template>

<style>
.navbar {
  display: flex;
  height: 6rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
  font-size: 2rem;
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
  background-color: #2e8840;
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
  background-color: #49b4c9;
}
.large-menu {
  display: none;
}

@media (min-width: 768px) {
  .toggle-menu {
    display: none;
  }
  .large-menu {
    display: flex;
    gap: 0.5rem;
    margin-right: 1rem;
  }
  .large-menu > li {
    height: 3rem;
    color: #19a0fb;
    padding: 0 2rem;
    font-weight: 800;
    cursor: pointer;
  }
  .large-menu > li:hover {
    color: #5ec4ff;
  }
}
</style>
