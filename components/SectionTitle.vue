<script setup lang="ts">
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

<template>
  <div class="section-title">
    <h1 :id="id" class="mb-2 text-left text-3xl">{{ title }}</h1>
    <hr class="mb-4" />
  </div>
</template>

<style scoped>
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}
</style>
