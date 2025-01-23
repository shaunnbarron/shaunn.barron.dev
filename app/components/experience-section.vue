<script setup lang="ts">
defineProps<{ work: Job[] }>();
</script>

<template>
  <section
    class="text-center"
    aria-labelledby="experience-heading"
  >
    <SectionTitle
      id="experience-heading"
      title="Experience"
    />

    <ol>
      <template
        v-for="({ company, positions, highlights }, i) in work"
        :key="`${company}-${i}`"
      >
        <JobCard
          class="mb-5 print:mb-0"
          :company
          :positions
          :highlights
        />
      </template>
    </ol>
  </section>
</template>
