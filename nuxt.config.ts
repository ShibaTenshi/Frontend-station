// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  modules: ['@pinia/nuxt'],
  app:{
    head: {
      link:[{rel: 'icon', type: 'image/png', href: '@/assets/RestaurantLogo.png'}],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      STORAGE_URL: "https://content-shibaqueue.doksakura.com/",
      API_URL: "https://api-shibaqueue.doksakura.com/"
    },
  },
})