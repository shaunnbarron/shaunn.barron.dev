<script setup lang="ts">
defineProps<{ work: Job[] }>();
</script>

<template>
  <section
    class="w-full px-4 text-center lg:w-2/3"
    aria-labelledby="experience-heading"
  >
    <SectionTitle
      id="experience-heading"
      title="Experience"
    />

    <ol>
      <template
        v-for="({ company, position, startDatePretty, endDatePretty, highlights }) in work"
        :key="`${company}-${position}`"
      >
        <JobCard
          class="mb-5 print:mb-0 print:break-inside-avoid-page"
          :company="company"
          :position="position"
          :start-date="startDatePretty"
          :end-date="endDatePretty"
          :highlights="highlights"
        />
      </template>
    </ol>
  </section>
</template>
