<script setup>
import { useDark } from "./composables/dark";

const dark = useDark();
</script>

<template>
  <div :class="{ dark }">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  @apply flex flex-wrap justify-center p-4 text-gray-600 dark:bg-gray-800 dark:text-gray-200;
}
</style>
