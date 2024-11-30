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
</script>

<template>
  <li
    class="rounded-lg dark:bg-gray-700"
    :class="{ 'shadow-md': !cv }"
  >
    <div
      :class="{ 'rounded-lg px-3 py-1': cv, 'flex h-12 items-center rounded-t-lg p-8': !cv }"
      class=" bg-gradient-to-r  from-emerald-600 to-emerald-400 text-2xl"
    >
      <h2 class="w-full text-left text-white">
        {{ company }}
      </h2>
    </div>

    <div :class="{ 'p-6': !cv, 'px-6 py-3': cv }">
      <div class="mb-3 flex flex-wrap text-xl">
        <div class="w-1/2 text-left">
          {{ position }}
        </div>
        <div class="w-1/2 text-right">
          {{ startDate }} - {{ endDate }}
        </div>
      </div>

      <hr class="my-4">

      <ul class="mt-3 list-disc pl-[20px] text-left">
        <li
          v-for="(highlight, i) in highlights"
          :key="i"
          class="mb-4"
        >
          {{ highlight }}
        </li>
      </ul>
    </div>
  </li>
</template>
