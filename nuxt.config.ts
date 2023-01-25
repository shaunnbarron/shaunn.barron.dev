// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
  colorMode: {
    classSuffix: "",
  },
});
