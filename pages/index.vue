<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent("/resume").findOne());

const education = data?.value?.education[0];
const route = useRoute();
const cv = computed(() => route.query.cv === "true");
</script>

<template>
  <ClientOnly>
    <ThemeToggle class="fixed top-4 right-8 h-5 w-5 print:hidden"/>
  </ClientOnly>

  <section
    class="w-full px-5 text-center lg:w-1/3"
    aria-labelledby="profile-heading"
  >
    <h1 id="profile-heading" class="sr-only">Profile</h1>
    <NuxtImg
      src="/avatar.jpeg"
      class="inline h-36 w-36 rounded-full"
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

  <section
    class="w-full px-4 text-center lg:w-2/3"
    aria-labelledby="experience-heading"
  >
    <SectionTitle id="experience-heading" title="Experience" />

    <ol>
      <template v-for="(job, i) in data.work" :key="i">
        <JobCard
          class="avoid-page-break mb-5"
          :company="job.company"
          :position="job.position"
          :start-date="job.startDatePretty"
          :end-date="job.endDatePretty"
          :highlights="job.highlights"
          :cv="cv"
        />
      </template>
    </ol>
  </section>
</template>
