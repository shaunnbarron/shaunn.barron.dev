<script setup lang="ts">
import resume from "../assets/resume.json";

const education = resume.education[0] as Education;
</script>

<template>
  <div class="flex flex-wrap">
    <ClientOnly>
      <ThemeToggle class="fixed right-8 top-4 size-5 print:hidden" />
    </ClientOnly>

    <ProfileSection :education />

    <ExperienceSection :work="resume.work" />
  </div>
</template>
