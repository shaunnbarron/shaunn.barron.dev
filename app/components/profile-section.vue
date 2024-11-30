<script setup lang="ts">
const props = defineProps<{
  cv: boolean;
  education: Education;
}>();

const about = computed(() => props.cv ? "Full-stack developer with over 13 years of experience" : "Full-stack developer");
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
      class="inline rounded-full"
      :class="{ 'size-24': cv, 'size-36 shadow-lg': !cv }"
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
      {{ about }}
    </div>
    <div
      v-if="!cv"
      class="mb-4 text-lg"
    >
      Favorite Tools
    </div>

    <div
      v-if="!cv"
      class="mb-4 flex items-center justify-center gap-8 align-middle"
    >
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
