<script setup lang="ts">
defineProps<{ education: Education }>();
</script>

<template>
  <section
    class="text-center"
    aria-labelledby="education-heading"
  >
    <SectionTitle
      id="education-heading"
      title="Education"
    />

    <JobCard
      as="div"
      :company="education.institution"
      :positions="[{ title: `${education.studyType} - ${education.area}` } as Position]"
    />
  </section>
</template>
