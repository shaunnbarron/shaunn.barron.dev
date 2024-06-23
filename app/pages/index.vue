<script setup lang="ts">
import resume from "../assets/resume.json";

const education = resume.education[0] as Education;
const route = useRoute();
const cv = computed(() => route.query.cv === "true");
</script>

<template>
  <ClientOnly>
    <ThemeToggle class="fixed top-4 right-8 h-5 w-5 print:hidden" />
  </ClientOnly>

  <Profile :cv :education />

  <Experience :cv :work="resume.work" />
</template>
