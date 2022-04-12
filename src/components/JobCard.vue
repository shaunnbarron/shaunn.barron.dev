<script setup>
import { computed } from "vue";
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
  }
})

const start = computed(() => formatDate(props.startDate))
const end = computed(() => !!props.endDate ? formatDate(props.endDate) : "Present")

function formatDate(iso) {
  const d = parseISO(iso)
  return format(d, "MMM yyyy")
}

const dark = useDark()
</script>

<template>
  <li class="card-container" :class="{'shadow-md': !cv, 'border': cv && !dark}">
    <div class="heading-container">
      <h2 class="heading">{{ company }}</h2>
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

.card-container {
  @apply dark:bg-gray-700 rounded-lg
}

.heading-container {
  @apply h-12 bg-gradient-to-r from-emerald-600 to-emerald-400 flex items-center p-8 text-2xl rounded-t-lg
}

.heading {
  @apply w-full text-left text-white
}
</style>
