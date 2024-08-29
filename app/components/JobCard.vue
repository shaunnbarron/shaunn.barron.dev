<script setup lang="ts">
interface JobCardProps {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  cv?: boolean;
}

const { cv = false, endDate = "Present" } = defineProps<JobCardProps>();
const dark = false;
</script>

<template>
  <li
    class="rounded-lg dark:bg-gray-700"
    :class="{ 'shadow-md': !cv, 'border': cv && !dark }"
  >
    <div
      class="flex h-12 items-center rounded-t-lg bg-gradient-to-r from-emerald-600 to-emerald-400 p-8 text-2xl"
    >
      <h2 class="w-full text-left text-white">
        {{ company }}
      </h2>
    </div>

    <div class="p-6">
      <div class="mb-3 flex flex-wrap text-xl">
        <div class="w-1/2 text-left">
          {{ position }}
        </div>
        <div class="text-grey-dark w-1/2 text-right">
          {{ startDate }} - {{ endDate }}
        </div>
      </div>

      <hr class="divider my-4">

      <ul class="mt-3 list-disc pl-[20px] text-left">
        <li
          v-for="(highlight, i) in highlights"
          :key="i"
          class="text-md mb-4"
        >
          {{ highlight }}
        </li>
      </ul>
    </div>
  </li>
</template>
