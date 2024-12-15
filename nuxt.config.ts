// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-svgo"],
  ssr: false,

  svgo: {
    autoImportPath: "./assets/svg/",
    defaultImport: "component",
    global: true,
    componentPrefix: "svg",
  },

})
