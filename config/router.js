const routerConfig = {
  base: '/',
  middleware: [
    'auth',
    'reset-login-form',
  ],
}

export default routerConfig
