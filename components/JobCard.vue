<script setup lang="ts">
import { format, parseISO } from "date-fns";
import { useDark } from "../composables/dark";

const props = defineProps({
  company: {
    required: true,
    type: String,
  },
  position: {
    required: true,
    type: String,
  },
  startDate: {
    required: true,
    type: String,
  },
  endDate: {
    required: false,
    type: String,
  },
  highlights: {
    required: true,
    type: Array,
  },
  cv: {
    type: Boolean,
    default: false,
  },
});

const start = computed(() => formatDate(props.startDate));
const end = computed(() =>
  props.endDate ? formatDate(props.endDate) : "Present"
);

function formatDate(iso) {
  const d = parseISO(iso);
  return format(d, "MMM yyyy");
}

const dark = useDark();
</script>

<template>
  <li class="card-container" :class="{ 'shadow-md': !cv, border: cv && !dark }">
    <div class="heading-container">
      <h2 class="heading">{{ company }}</h2>
    </div>

    <div class="p-6">
      <div class="mb-3 flex flex-wrap text-xl">
        <div class="w-1/2 text-left">{{ position }}</div>
        <div class="text-grey-dark w-1/2 text-right">
          {{ start }} - {{ end }}
        </div>
      </div>

      <hr class="divider my-4" />

      <ul class="pis-20 mt-3 list-disc text-left">
        <li v-for="(highlight, i) in highlights" class="text-md mb-4" :key="i">
          {{ highlight }}
        </li>
      </ul>
    </div>
  </li>
</template>

<style scoped>
.pis-20 {
  padding-inline-start: 20px;
}

.card-container {
  @apply rounded-lg dark:bg-gray-700;
}

.heading-container {
  @apply flex h-12 items-center rounded-t-lg bg-gradient-to-r from-emerald-600 to-emerald-400 p-8 text-2xl;
}

.heading {
  @apply w-full text-left text-white;
}
</style>
