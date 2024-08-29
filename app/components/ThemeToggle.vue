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
    <MoonIcon v-show="colorMode.value === 'dark'" />
    <SunIcon v-show="colorMode.value === 'light'" />
    <span class="sr-only">{{ colorMode.value }} mode</span>
  </button>
</template>
