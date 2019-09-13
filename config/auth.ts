import { Configuration } from '@nuxt/types'

const authConfig: Configuration = {
  redirect: {
    login: '/login',
    logout: '/login',
    home: '/',
  },

  token: {
    prefix: 'token.',
  },

  localStorage: false,

  cookie: {
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
          url: '/api/auth/me',
          method: 'get',
          propertyName: 'user',
        },
        logout: false,
      },
    },
  },

  plugins: [
    { src: '@/plugins/access-control' },
    { src: '@/plugins/axios' },
  ],

  watchLoggedIn: true,
}

export default authConfig
