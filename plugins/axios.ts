import { Plugin } from '@nuxt/types'

const axiosPlugin: Plugin = ({ app: { $axios } }) => {
  // Request interceptor
  $axios.onRequest((config: any) => {
    // Not used for anything yet - maybe later!
    return config
  })

  // Response interceptor
  $axios.onResponse((response: any) => {
    // nothing yet
    return response
  })

  // Error interceptor
  $axios.onError((err: any) => {
    return Promise.reject(err)
  })
}

export default axiosPlugin
