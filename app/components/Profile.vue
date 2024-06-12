<script setup lang="ts">
defineProps<{
  cv: boolean;
  education: Education;
}>();
</script>

<template>
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
      height="144"
      width="144"
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
</template>
