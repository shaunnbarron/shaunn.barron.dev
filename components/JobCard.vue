<template>
  <div class="shadow-md dark:bg-gray-700 rounded-lg">
    <div class="h-12 bg-green-400 flex items-center p-8 text-white text-2xl rounded-t-lg">
      <div class="w-full text-left">{{ company }}</div>
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
  </div>
</template>

<script>
import { format, parse } from 'date-fns'

export default {
  name: 'JobCard',

  props: {
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
  },

  methods: {
    formatDate(date) {
      const parsed = parse(date, 'yyyy-mm-dd', new Date())
      return format(parsed, 'MMM yyyy')
    },
  },

  computed: {
    start() {
      return this.formatDate(this.startDate)
    },
    end() {
      if (!this.endDate) {
        return 'Present'
      }

      return this.formatDate(this.endDate)
    },
  },
}
</script>

<style scoped>
.pis-20 {
  padding-inline-start: 20px;
}

/*.divider {*/
/*  border: thin solid rgba(0, 0, 0, 0.12);*/
/*}*/
</style>
