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

    <div class="flex flex-col items-center print:flex-row print:items-end print:justify-between print:text-left print:align-text-bottom">
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
          <span class="hidden print:block">Building web applications for over 13 years.</span>
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

        <div class="text-lg print:hidden">
          <div>
            Favorite Tools
          </div>

          <div class="flex items-center justify-center gap-8 align-middle print:hidden">
            <TechLogoLink
              class="w-16"
              src="/go_logo.png"
              name="Go"
              href="https://go.dev/"
              height="938px"
              width="1061px"
            />

            <TechLogoLink
              class="w-7"
              src="/ts_logo.png"
              name="Typescript"
              href="https://www.typescriptlang.org/"
              height="128px"
              width="128px"
            />
          </div>
        </div>

        <div class="text-nowrap">
          {{ education.studyType }} - {{ education.area }}
        </div>

        <div>
          {{ education.institution }}
        </div>
      </div>
    </div>
  </section>
</template>
