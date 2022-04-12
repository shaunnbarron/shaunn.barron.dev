<script setup>
import TechLogoLink from "../components/TechLogoLink.vue";
import resume from "../assets/resume.json";
import avatarUrl from "../assets/avatar.jpeg";
import vueLogoUrl from "../assets/vue_logo.png";
import goLogoUrl from "../assets/gopher.png";
import SectionTitle from "../components/SectionTitle.vue";
import JobCard from "../components/JobCard.vue";

const education = resume.education[0]
defineProps({cv: {type: Boolean, default: false}});
</script>

<template>
  <section class="summary-section" aria-labelledby="profile-heading">
    <h1 id="profile-heading" class="sr-only">Profile</h1>
    <img :src="avatarUrl" class="avatar" :class="{'shadow-lg': !cv}" alt="Profile Image"/>
    <div class="text-3xl mb-2">Shaunn Barron</div>
    <div class="text-lg mb-1">Full Stack Developer</div>
    <div class="text-lg mb-4">Favorite Tools</div>

    <div class="flex justify-center mb-4">
      <TechLogoLink class="mx-8" :src="goLogoUrl" name="Go" href="https://go.dev/"/>
      <TechLogoLink class="mx-8" :src="vueLogoUrl" name="Vue" href="https://vuejs.org/"/>
    </div>
    <div>{{education.studyType}} - {{education.area}}</div>
    <div class="mb-6">{{education.institution}}</div>
  </section>

  <section class="experience-section" aria-labelledby="experience-heading">
    <SectionTitle id="experience-heading" title="Experience"/>

    <ol>
      <template v-for="job in resume.work">
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
  @apply w-full lg:w-1/3 text-center px-5
}

.avatar {
  @apply rounded-full inline h-36 w-36
}

.experience-section {
  @apply w-full lg:w-2/3 text-center px-4
}
</style>
