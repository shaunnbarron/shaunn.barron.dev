<script setup lang="ts">
import SkillIcons from "./skill-icons.vue";

defineProps<{ education: Education }>();
</script>

<template>
  <section
    class="w-full px-5 text-center lg:w-1/3"
    aria-labelledby="profile-heading"
  >
    <h1
      id="profile-heading"
      class="sr-only"
    >
      Profile
    </h1>

    <div class="flex flex-col items-center gap-8 print:flex-row print:items-end print:justify-between print:text-left print:align-text-bottom">
      <div>
        <NuxtImg
          src="/avatar.jpeg"
          class="inline size-36 rounded-full shadow-lg print:size-24"
          alt="Profile Image"
          format="webp"
          height="144"
          width="144"
          preload
        />

        <div class="text-3xl print:hidden">
          Shaunn Barron
        </div>

        <div>
          <span class="hidden print:block">Hands-on leader building web applications for over 13 years.</span>
          <span class="text-xl print:hidden">Full-stack developer</span>
        </div>
      </div>

      <div class="print:text-right">
        <div class="hidden text-3xl print:block">
          Shaunn Barron
        </div>

        <div class="hidden print:block">
          https://shaunn.barron.dev
        </div>

        <div class="text-nowrap">
          {{ education.studyType }} - {{ education.area }}
        </div>

        <div>
          {{ education.institution }}
        </div>
      </div>

      <SkillIcons class="print:hidden" />
    </div>

    <SkillIcons class="hidden print:mt-6 print:flex" />
  </section>
</template>
