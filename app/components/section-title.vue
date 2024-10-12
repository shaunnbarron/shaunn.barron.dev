<script setup lang="ts">
defineProps<{ id: string; title: string }>();
</script>

<template>
  <div>
    <h2
      :id
      class="mb-2 text-left text-3xl"
    >
      {{ title }}
    </h2>
    <hr
      class="mx-0 my-[1em] mb-4 block h-px border-0 border-t border-t-[#ccc] p-0"
    >
  </div>
</template>
