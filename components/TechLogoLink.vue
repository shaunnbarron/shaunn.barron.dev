<script setup lang="ts">
interface TechLogoLinkProps {
  src: string;
  name: string;
  href: string;
  height?: string;
  width?: string;
}

const { height = "100%", width = "100%" } = defineProps<TechLogoLinkProps>();
</script>

<template>
  <a :href="href" target="_blank" rel="noreferrer" :title="name">
    <NuxtImg
      :src="src"
      :alt="`${name} Logo`"
      :height="height"
      :width="width"
      :style="{ height: height, width: width }"
    />
  </a>
</template>
