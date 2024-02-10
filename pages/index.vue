<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent("/resume").findOne());

const education = data?.value?.education[0];
const route = useRoute();
const cv = computed(() => route.query.cv === "true");
</script>

<template>
  <ClientOnly>
    <ThemeToggle class="fixed top-4 right-8 h-5 w-5 print:hidden" />
  </ClientOnly>

  <Profile :cv :education />

  <Experience v-if="data" :cv :work="data.work" />
</template>
