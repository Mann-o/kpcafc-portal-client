const resetLoginForm = ({ store }) => {
  store.dispatch('login/updateLoginId', null)
  store.dispatch('login/updatePassword', null)
}

export default resetLoginForm
