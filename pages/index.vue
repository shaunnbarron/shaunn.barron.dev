<script setup lang="ts">
import TechLogoLink from "../components/TechLogoLink.vue";
import resume from "../assets/resume.json";
import SectionTitle from "../components/SectionTitle.vue";
import JobCard from "../components/JobCard.vue";

const education = computed(() => resume.education[0]);
defineProps({ cv: { type: Boolean, default: false } });
</script>

<template>
  <section class="summary-section" aria-labelledby="profile-heading">
    <h1 id="profile-heading" class="sr-only">Profile</h1>
    <NuxtImg
        src="/avatar.jpeg"
        class="avatar"
        :class="{ 'shadow-lg': !cv }"
        alt="Profile Image"
        format="webp"
        preload
    />
    <div class="mb-2 text-3xl">Shaunn Barron</div>
    <div class="mb-1 text-lg">Full Stack Developer</div>
    <div class="mb-4 text-lg">Favorite Tools</div>

    <div class="mb-4 flex justify-center align-middle">
      <TechLogoLink
          class="mx-8"
          src="/go_logo.svg"
          name="Go"
          href="https://go.dev/"
          height="50px"
          width="56.55px"
      />
      <TechLogoLink
          class="mx-8"
          src="/vue_logo.svg"
          name="Vue"
          href="https://vuejs.org/"
          height="50px"
          width="30px"
      />
    </div>
    <div>{{ education.studyType }} - {{ education.area }}</div>
    <div class="mb-6">{{ education.institution }}</div>
  </section>

  <section class="experience-section" aria-labelledby="experience-heading">
    <SectionTitle id="experience-heading" title="Experience" />

    <ol>
      <template v-for="(job, i) in resume.work" :key="i">
        <JobCard
            class="avoid-page-break mb-5"
            :company="job.company"
            :position="job.position"
            :start-date="job.startDate"
            :end-date="job.endDate"
            :highlights="job.highlights"
            :cv="cv"
        />
      </template>
    </ol>
  </section>
</template>

<style scoped>
.summary-section {
  @apply w-full px-5 text-center lg:w-1/3;
}

.avatar {
  @apply inline h-36 w-36 rounded-full;
}

.experience-section {
  @apply w-full px-4 text-center lg:w-2/3;
}
</style>
