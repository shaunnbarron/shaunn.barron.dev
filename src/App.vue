<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TechLogoLink from "./components/TechLogoLink.vue";
import resume from "./assets/resume.json";
import avatarUrl from "./assets/avatar.jpeg";
import vueLogoUrl from "./assets/vue_logo.png";
import goLogoUrl from "./assets/gopher.png";
import SectionTitle from "./components/SectionTitle.vue";
import JobCard from "./components/JobCard.vue";

const education = resume.education[0]
</script>

<template>
    <main class="flex justify-center flex-wrap p-4 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
      <section class="w-full lg:w-1/3 text-center px-5" aria-labelledby="profile-heading">
        <h1 id="profile-heading" class="sr-only">Profile</h1>
        <img :src="avatarUrl" class="rounded-full shadow-lg inline h-36 w-36" alt="Profile Image"/>
        <div class="text-3xl mb-2">Shaunn Barron</div>
        <div class="text-lg mb-1">Full Stack Developer</div>
        <div class="text-lg mb-4">Favorite Tools</div>

        <div class="flex justify-center mb-4">
          <TechLogoLink class="mx-8" :src="goLogoUrl" name="Go" href="https://golang.org/"/>
          <TechLogoLink class="mx-8" :src="vueLogoUrl" name="Vue" href="https://vuejs.org/"/>
        </div>
        <div>{{education.studyType}} - {{education.area}}</div>
        <div class="mb-6">{{education.institution}}</div>
      </section>

      <section class="w-full lg:w-2/3 text-center px-4" aria-labelledby="experience-heading">
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
          />
        </template>
        </ol>
      </section>
    </main>
</template>
