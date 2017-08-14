const state = {
  show: false
}

const mutations = {
  toggle: state => {
    state.show = !state.show
  },
  close: state => {
    if (state.show) {
      state.show = false
    }
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
