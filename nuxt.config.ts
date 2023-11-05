// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      STORAGE_URL: "https://content-shibaqueue.doksakura.com/",
      API_URL: "https://api-shibaqueue.doksakura.com/"
    },
  },
})