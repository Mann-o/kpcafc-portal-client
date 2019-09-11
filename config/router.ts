import { Configuration } from '@nuxt/types'

const routerConfig: Configuration = {
  base: '/',
  middleware: [
    'auth',
    'reset-login-form',
  ],
}

export default routerConfig
