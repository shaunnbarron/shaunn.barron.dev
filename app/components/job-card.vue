<script setup lang="ts">
interface JobCardProps {
  company: string;
  positions: Position[];
  highlights?: string[];
  as?: "li" | "div";
}

interface Position {
  title: string;
  startDate?: string;
  startDatePretty?: string;
  endDate?: string;
  endDatePretty?: string;
}

const { as = "li" } = defineProps<JobCardProps>();
</script>

<template>
  <Component
    :is="as"
    class="rounded-lg shadow-md dark:bg-gray-700 print:shadow-none dark:print:bg-transparent"
  >
    <div class="flex h-12 items-center rounded-t-lg bg-gradient-to-r from-emerald-600 to-emerald-400 p-8 text-2xl print:break-inside-avoid-page print:rounded-lg print:px-3 print:py-1">
      <h2 class="w-full text-left text-white">
        {{ company }}
      </h2>
    </div>

    <div class="p-6 print:px-6 print:py-3">
      <div
        v-for="position in positions"
        :key="position.title"
        class="mb-3 flex justify-between text-xl"
      >
        <div class="text-left">
          <div>{{ position.title }}</div>

          <div
            v-if="position.role"
            class="text-sm text-zinc-500"
          >
            {{ position.role }}
          </div>
        </div>

        <div
          v-if="position.startDatePretty"
          class="text-right"
        >
          {{ position.startDatePretty }} - {{ position.endDatePretty ?? "Present" }}
        </div>
      </div>

      <hr
        v-if="highlights"
        class="my-4"
      >

      <ul
        v-if="highlights"
        class="mt-3 list-disc pl-[20px] text-left"
      >
        <li
          v-for="(highlight, i) in highlights"
          :key="`${highlight}-${i}`"
          class="mb-4"
        >
          {{ highlight }}
        </li>
      </ul>
    </div>
  </component>
</template>
