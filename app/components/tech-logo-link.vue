<script setup lang="ts">
interface TechLogoLinkProps {
  src: string;
  name: string;
  href: string;
  height?: string;
  width?: string;
}

const { height = "28px", width = "28px" } = defineProps<TechLogoLinkProps>();
</script>

<template>
  <a
    :href
    target="_blank"
    rel="noreferrer"
    :title="name"
  >
    <NuxtImg
      format="webp"
      :src
      :height
      :width
      :alt="`${name} Logo`"
    />
  </a>
</template>
