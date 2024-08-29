<script setup lang="ts">
import resume from "../assets/resume.json";

const education = resume.education[0] as Education;
const route = useRoute();
const cv = computed(() => route.query.cv === "true");
</script>

<template>
  <div class="flex flex-wrap">
    <ClientOnly>
      <ThemeToggle class="fixed top-4 right-8 h-5 w-5 print:hidden" />
    </ClientOnly>

    <ProfileSection
      :cv
      :education
    />

    <ExperienceSection
      :cv
      :work="resume.work"
    />
  </div>
</template>
