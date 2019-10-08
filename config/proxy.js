require('dotenv').config()

const proxyConfig = {
  '/api': {
    pathRewrite: {
      '^/api': '/api/v1/admin',
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
