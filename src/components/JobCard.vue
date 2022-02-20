<script setup>
import { computed } from "vue";
import {format, parseISO} from "date-fns"

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
})

const start = computed(() => formatDate(props.startDate))
const end = computed(() => !!props.endDate ? formatDate(props.endDate) : "Present")

function formatDate(iso) {
  const d = parseISO(iso)
  return format(d, "MMM yyyy")
}
</script>

<template>
  <li class="shadow-md dark:bg-gray-700 rounded-lg">
    <div class="h-12 bg-gradient-to-r from-emerald-600 to-emerald-400 flex items-center p-8 text-2xl rounded-t-lg">
      <h2 class="w-full text-left text-white">{{ company }}</h2>
    </div>

    <div class="p-6">
      <div class="flex flex-wrap mb-3 text-xl">
        <div class="w-1/2 text-left">{{ position }}</div>
        <div class="w-1/2 text-right text-grey-dark">
          {{ start }} - {{ end }}
        </div>
      </div>

      <hr class="divider my-4" />

      <ul class="mt-3 text-left pis-20 list-disc">
        <li v-for="highlight in highlights" class="text-md mb-4">
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
</style>
