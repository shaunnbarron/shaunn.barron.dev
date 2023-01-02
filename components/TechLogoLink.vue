<script setup lang="ts">
defineProps({
  src: { type: String, required: true },
  name: { type: String, required: true },
  href: { type: String, required: true },
  height: { type: String, default: "100%" },
  width: {type: String, default: "100%"}
});
</script>

<template>
  <a :href="href" target="_blank" rel="noreferrer" :title="name">
    <NuxtImg :src="src" :alt="`${name} Logo`" :height="height" :width="width" :style="{height: height, width: width}" />
  </a>
</template>
