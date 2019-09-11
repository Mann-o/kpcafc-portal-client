import { Configuration } from '@nuxt/types'

const serverMiddlewareConfig: Configuration = [
  '@/middleware/server/disable-external-iframes',
]

export default serverMiddlewareConfig
