import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    "@nuxt/devtools",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/eslint",
    "@nuxt/icon",
  ],

  devtools: { enabled: true },

  app: {
    head: {
      title: "Shaunn Barron",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  css: ["~/assets/app.css"],

  vue: {
    propsDestructure: true,
  },

  colorMode: {
    classSuffix: "",
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-07-02",

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        skipLibCheck: true,
      },
    },
  },

  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
      },
    },
  },
});
