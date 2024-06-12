// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  colorMode: {
    classSuffix: "",
  },
  experimental: {
    componentIslands: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxt/content",
    "@nuxt/devtools",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
  vue: {
    propsDestructure: true,
  }
});
