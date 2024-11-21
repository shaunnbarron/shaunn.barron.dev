<script setup lang="ts">
const colorMode = useColorMode();

function toggle() {
  if (colorMode.value === "dark") {
    colorMode.preference = "light";
  }
  else {
    colorMode.preference = "dark";
  }
}
</script>

<template>
  <button
    title="Toggle theme"
    @click="toggle"
  >
    <Icon
      v-show="colorMode.value === 'dark'"
      name="heroicons:moon"
    />
    <Icon
      v-show="colorMode.value === 'light'"
      name="heroicons:sun"
    />
    <span class="sr-only">{{ colorMode.value }} mode</span>
  </button>
</template>
