const state = {
  show: false
}

const mutations = {
  toggle (state) {
    state.show = !state.show
  }
}

const getters = {
  slideShow (state) {
    return state.show
  }
}

export default {
  state,
  mutations,
  getters
}
