import { Configuration } from '@nuxt/types'

const modulesConfig: Configuration = [
  ['@nuxtjs/dotenv'],
  ['@nuxtjs/axios'],
  ['@nuxtjs/auth'],
  ['@nuxtjs/pwa', {
    icon: false,
  }],
  ['bootstrap-vue/nuxt'],
]

export default modulesConfig
