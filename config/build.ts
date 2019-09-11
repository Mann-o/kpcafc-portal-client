import { Configuration } from '@nuxt/types'

const buildConfig: Configuration = {
  analyze:
    (process.env.NODE_ENV === 'development')
      ? {
          analyzerMode: 'static',
          generateStatsFile: true,
          statsFilename: 'webpack-stats.json',
        }
      : false,
}

export default buildConfig
