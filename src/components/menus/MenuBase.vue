<script setup>
const props = defineProps({
  options: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <ul :class="props.options.class">
    <li
      v-for="item in props.options.items"
      :class="item.class"
      :key="item.to.name"
    >
      <router-link :data-testid="`menu-option-${item.to.name}`" :to="item.to"
        >{{ item.label }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.menu-option {
  margin: 4rem;
  font-size: 2rem;
  font-weight: 800;
}

li > a:visited {
  color: #19a0fb;
}

li > a:hover {
  color: #0062a2;
}
</style>
