// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-02",

  colorMode: {
    classSuffix: "",
  },

  devtools: {enabled: true},

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxt/devtools",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],

  vue: {
    propsDestructure: true,
  },
});