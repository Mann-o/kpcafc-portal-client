import { MutationTree, ActionTree } from 'vuex'

interface RootState {
  credentials: {
    loginId: string | null
    password: string | null
  }
  isLoggingIn: boolean
}

export const state = (): RootState => ({
  credentials: {
    loginId: null,
    password: null,
  },
  isLoggingIn: false,
})

export const actions: ActionTree<RootState, RootState> = {
  updateLoginId ({ commit }, newLoginId) {
    commit('UPDATE_LOGIN_ID', newLoginId)
  },
  updatePassword ({ commit }, newPassword) {
    commit('UPDATE_PASSWORD', newPassword)
  },
  startLoading ({ commit }) {
    commit('START_LOGGING_IN')
  },
  stopLoading ({ commit }) {
    commit('STOP_LOGGING_IN')
  },
}

export const mutations: MutationTree<RootState> = {
  START_LOGGING_IN (state) {
    state.isLoggingIn = true
  },
  STOP_LOGGING_IN (state) {
    state.isLoggingIn = false
  },
  UPDATE_LOGIN_ID (state, loginId) {
    state.credentials.loginId = loginId
  },
  UPDATE_PASSWORD (state, newPassword) {
    state.credentials.password = newPassword
  },
}
