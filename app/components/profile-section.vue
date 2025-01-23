<template>
  <section
    class="w-full px-5 text-center lg:w-1/3 print:grid print:grid-cols-2"
    aria-labelledby="profile-heading"
  >
    <h1
      id="profile-heading"
      class="sr-only"
    >
      Profile
    </h1>

    <div class="flex flex-col items-center gap-8 print:flex-row print:items-start print:justify-between print:text-left print:align-text-bottom">
      <div>
        <NuxtImg
          src="/avatar.jpeg"
          class="inline size-36 rounded-full shadow-lg print:hidden"
          alt="Profile Image"
          format="webp"
          height="144"
          width="144"
          preload
        />

        <div class="text-3xl">
          Shaunn Barron
        </div>

        <div>
          <span class="text-xl print:hidden">Full-stack developer</span>
          <span class="hidden text-sm text-gray-400 print:block">https://shaunn.barron.dev</span>
        </div>
      </div>

      <SkillIcons class="print:hidden" />
    </div>

    <div class="hidden text-left print:block">
      <span>Passionate full-stack developer building web applications for over 13 years.</span>
    </div>

    <SkillIcons class="col-span-2 hidden print:mt-6 print:flex" />
  </section>
</template>
