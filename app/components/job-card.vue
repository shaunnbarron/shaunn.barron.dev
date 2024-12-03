<script setup lang="ts">
interface JobCardProps {
  company: string;
  positions: Position[];
  highlights: string[];
}

interface Position {
  title: string;
  startDate: string;
  startDatePretty: string;
  endDate?: string;
  endDatePretty?: string;
}

defineProps<JobCardProps>();
</script>

<template>
  <li class="rounded-lg shadow-md dark:bg-gray-700 print:shadow-none dark:print:bg-transparent">
    <div class="flex h-12 items-center rounded-t-lg bg-gradient-to-r from-emerald-600 to-emerald-400 p-8 text-2xl print:break-inside-avoid-page print:rounded-lg print:px-3 print:py-1">
      <h2 class="w-full text-left text-white">
        {{ company }}
      </h2>
    </div>

    <div class="p-6 print:px-6 print:py-3">
      <div
        v-for="position in positions"
        :key="position.title"
        class="mb-3 flex flex-wrap text-xl"
      >
        <div class="w-1/2 text-left">
          {{ position.title }}
        </div>
        <div class="w-1/2 text-right">
          {{ position.startDatePretty }} - {{ position.endDatePretty ?? "Present" }}
        </div>
      </div>

      <hr class="my-4">

      <ul class="mt-3 list-disc pl-[20px] text-left">
        <li
          v-for="(highlight, i) in highlights"
          :key="`${highlight}-${i}`"
          class="mb-4"
        >
          {{ highlight }}
        </li>
      </ul>
    </div>
  </li>
</template>
