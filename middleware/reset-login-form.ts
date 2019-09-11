import { Middleware } from '@nuxt/types'

const resetLoginForm: Middleware = ({ store }) => {
  store.dispatch('login/updateLoginId', null)
  store.dispatch('login/updatePassword', null)
}

export default resetLoginForm
