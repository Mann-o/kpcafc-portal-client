import { Configuration} from '@nuxt/types'

const axiosConfig: Configuration = {
  debug: (process.env.NODE_ENV !== 'production'),
  progress: true,
  proxy: true,
  proxyHeadersIgnore: [
    'host',
    'accept',
  ],
}

export default axiosConfig
