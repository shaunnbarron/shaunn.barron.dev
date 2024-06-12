<script setup lang="ts">
defineProps<{ id: string; title: string }>();
</script>

<template>
  <div class="section-title">
    <h1 :id class="mb-2 text-left text-3xl">{{ title }}</h1>
    <hr
      class="my-[1em] mx-0 mb-4 block h-[1px] border-0 border-t border-t-[#ccc] p-0"
    />
  </div>
</template>
