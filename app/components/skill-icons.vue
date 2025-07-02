<script setup lang="ts">
import type { TechLogoProps } from "./tech-logo.vue";

const links: TechLogoProps[] = [
  {
    label: "JavaScript",
    yoe: 14,
    name: "logos:javascript",
  },
  {
    label: "TypeScript",
    yoe: 4,
    name: "logos:typescript-icon",
  },
  {
    label: "Node",
    yoe: 6,
    name: "logos:nodejs-icon",
  },
  {
    label: "Vue",
    yoe: 8,
    name: "logos:vue",
  },
  {
    label: "React",
    yoe: 4,
    name: "logos:react",
  },
  {
    label: "Nuxt",
    yoe: 3,
    name: "logos:nuxt-icon",
  },
  {
    label: "Vite",
    yoe: 3,
    name: "logos:vitejs",
  },
  {
    label: "Go",
    yoe: 3,
    name: "logos:go",
  },
  {
    label: "Java",
    yoe: 7,
    name: "logos:java",
  },
  {
    label: "Spring",
    yoe: 7,
    name: "logos:spring-icon",
  },
];
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 rounded-lg border-[#ccc] px-1 py-4 print:border">
    <TechLogo
      v-for="link in links"
      v-bind="link"
      :key="link.label"
    />
  </div>
</template>
