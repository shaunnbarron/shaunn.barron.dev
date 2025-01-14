<script lang="ts">
export interface TechLogoLinkProps {
  name: string;
  label: string;
  href: string;
}
</script>

<script setup lang="ts">
defineProps<TechLogoLinkProps>();
</script>

<template>
  <a
    :href
    target="_blank"
    rel="noreferrer"
    class="flex flex-col items-center"
  >
    <Icon :name />
    <span>{{ label }}</span>
  </a>
</template>
