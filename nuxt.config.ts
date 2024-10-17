// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/devtools",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
  ],

  devtools: { enabled: true },

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
