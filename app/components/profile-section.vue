<script setup lang="ts">
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

    <NuxtImg
      src="/avatar.jpeg"
      class="inline size-36 rounded-full shadow-lg print:size-24"
      alt="Profile Image"
      format="webp"
      height="144"
      width="144"
      preload
    />

    <div class="mb-2 text-3xl">
      Shaunn Barron
    </div>

    <div class="mb-1 text-xl">
      <span class="hidden print:block">Full-stack developer with over 13 years of experience</span>
      <span class="print:hidden">Full-stack developer</span>
    </div>

    <div class="mb-4 text-lg print:hidden">
      Favorite Tools
    </div>

    <div class="mb-4 flex items-center justify-center gap-8 align-middle print:hidden">
      <TechLogoLink
        class="w-20"
        src="/go_logo.png"
        name="Go"
        href="https://go.dev/"
        height="938px"
        width="1061px"
      />

      <TechLogoLink
        class="size-7"
        src="/ts_logo.png"
        name="Typescript"
        href="https://www.typescriptlang.org/"
        height="128px"
        width="128px"
      />
    </div>

    <div>{{ education.studyType }} - {{ education.area }}</div>

    <div class="mb-6">
      {{ education.institution }}
    </div>
  </section>
</template>
