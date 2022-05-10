<script setup>
  defineProps({
    src: {type: String, required: true},
    name: {type: String, required: true},
    href: {type: String, required: true},
    height: {type: String, default: "100%"}
  })
</script>

<template>
  <a :href="href" target="_blank" rel="noreferrer" :title="name">
    <img :src="src" :alt="`${name} Logo`" :style="{ height }" />
  </a>
</template>
