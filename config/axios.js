const axiosConfig = {
  debug: (process.env.NODE_ENV !== 'production'),
  progress: true,
  proxy: true,
  proxyHeadersIgnore: [
    'host',
    'accept',
  ],
}

export default axiosConfig
