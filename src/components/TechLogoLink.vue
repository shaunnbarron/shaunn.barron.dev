<script setup>
  defineProps({
    src: {type: String, required: true},
    name: {type: String, required: true},
    href: {type: String, required: true},
  })
</script>

<template>
  <a :href="href" target="_blank" rel="noreferrer">
    <div class="flex justify-center">
      <img :src="src" :alt="`${name} Logo`" height="30px;" style="height: 30px" />
    </div>
    <div class="text-center">{{ name }}</div>
  </a>
</template>

<style scoped>

</style>
