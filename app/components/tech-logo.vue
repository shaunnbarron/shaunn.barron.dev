<script lang="ts">
export interface TechLogoProps {
  label: string;
  name: string;
  yoe?: number;
}
</script>

<script setup lang="ts">
defineProps<TechLogoProps>();
</script>

<template>
  <div class="flex flex-col items-center">
    <Icon :name />

    <div class="flex gap-0.5">
      <span>{{ label }}</span>

      <template v-if="yoe">
        <span class="hidden print:block">-</span>
        <span class="hidden print:block">{{ yoe }} yrs</span>
      </template>
    </div>
  </div>
</template>
