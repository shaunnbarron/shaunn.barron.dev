<script setup lang="ts">
defineProps<{
  cv: boolean;
  work: Job[];
}>();
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
        v-for="(
          { company, position, startDatePretty, endDatePretty, highlights }, i
        ) in work"
        :key="i"
      >
        <JobCard
          class="avoid-page-break mb-5"
          :company="company"
          :position="position"
          :start-date="startDatePretty"
          :end-date="endDatePretty"
          :highlights="highlights"
          :cv
        />
      </template>
    </ol>
  </section>
</template>
