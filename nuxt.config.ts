// https://nuxt.com/docs/api/configuration/nuxt-config
import pugPlugin from "vite-plugin-pug"

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: [400, 500, 700]
      }
    }]
  ],
  vite: {
    plugins: [pugPlugin()]
  }
})
