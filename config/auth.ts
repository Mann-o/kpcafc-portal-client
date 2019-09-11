import { Configuration } from '@nuxt/types'

const authConfig: Configuration = {
  redirect: {
    login: '/login',
    logout: '/login',
    home: '/',
  },

  token: {
    prefix: '_kpcafc_token.',
  },

  localStorage: false,

  cookies: {
    name: '_kpcafc_auth.',
    prefix: '_kpcafc_auth.',
    options: {
      path: '/',
      secure: (process.env.NODE_ENV === 'production'),
    },
  },

  strategies: {
    local: {
      endpoints: {
        login: {
          url: '/api/auth/login',
          method: 'post',
          propertyName: 'payload.token',
        },
        user: {
          url: '/api/auth/user',
          method: 'get',
          propertyName: 'user',
        },
        logout: false,
      },
    },
  },

  plugins: [
    { src: '@/plugins/axios' },
  ],
}

export default authConfig
