export default {
  LOGIN: ({commit}, user) => {
    commit('login', user)
  },
  LOGOUT: ({commit}) => {
    commit('logout')
  }
}
