// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  tailwindcss: {
    config: {
      darkMode: "class",
    },
  },
  image: {
    provider: "ipx",
  },
});
