<script setup lang="ts">
import {MoonIcon, SunIcon} from "@heroicons/vue/24/outline";

const toggledValue: Record<string, string> = {
  dark: "light",
  light: "dark"
}

const colorMode = useColorMode()
function toggle() {
  colorMode.preference = toggledValue[colorMode.value]
}
</script>

<template>
  <button @click="toggle">
    <MoonIcon v-show="colorMode.value === 'dark'"/>
    <SunIcon v-show="colorMode.value === 'light'"/>
    <span class="sr-only">{{colorMode.value}} mode</span>
  </button>
</template>
