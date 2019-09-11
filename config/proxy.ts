import { Configuration } from '@nuxt/types'

require('dotenv').config()

const proxyConfig: Configuration = {
  '/api': {
    pathRewrite: {
      '^/api': '/api/v1',
    },

    target: (process.env.NODE_ENV === 'production')
      ? 'https://api.someproductionlink.co.uk'
      : 'http://localhost:3333',

    headers: {
      'kpcafc-api-key': process.env.API_KEY,
    },
  },
}

export default proxyConfig
