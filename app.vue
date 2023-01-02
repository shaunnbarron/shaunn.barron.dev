<script setup lang="ts">
import { useDark } from "./composables/dark";

const dark = useDark();

useHead({
  bodyAttrs: {
    class: {dark}
  }
})
</script>

<template>
  <main>
    <NuxtPage />
  </main>
</template>

<style scoped>
main {
  @apply flex flex-wrap justify-center p-4 text-gray-600 dark:bg-gray-800 dark:text-gray-200;
}
</style>
