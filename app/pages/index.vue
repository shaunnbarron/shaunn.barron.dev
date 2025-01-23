<script setup lang="ts">
import resume from "../assets/resume.json";

const education = resume.education[0] as Education;
</script>

<template>
  <div class="flex flex-wrap print:gap-4">
    <ClientOnly>
      <ThemeToggle class="fixed right-8 top-4 size-5 print:hidden" />
    </ClientOnly>

    <ProfileSection :education />

    <div class="w-full px-4 lg:w-2/3">
      <ExperienceSection :work="resume.work" />

      <EducationSection :education />
    </div>
  </div>
</template>
