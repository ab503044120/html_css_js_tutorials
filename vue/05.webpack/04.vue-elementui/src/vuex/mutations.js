const state = {
  login_user: {
    name: null
  }
}

const mutations = {
  login: (state, user) => {
    state.login_user = user
  },
  logout: state => {
    state.login_user = null
  }
}

const getters = {
  getCurrentUser: state =>
    state.login_user

}

export default {
  state,
  mutations,
  getters
}
