import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  alias:{
    'images':fileURLToPath(new URL('./assets/images', import.meta.url))
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Crystal Cafe',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/images/crystal.webp' }
      ]
    }
  }
})
