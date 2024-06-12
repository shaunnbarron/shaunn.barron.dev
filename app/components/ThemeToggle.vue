<script setup lang="ts">
const colorMode = useColorMode();
function toggle() {
    colorMode.value === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark';
}
</script>

<template>
    <button @click="toggle" title="Toggle theme">
        <MoonIcon v-show="colorMode.value === 'dark'" />
        <SunIcon v-show="colorMode.value === 'light'" />
        <span class="sr-only">{{ colorMode.value }} mode</span>
    </button>
</template>
