import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
// 告诉 vue “使用” vuex
Vue.use(Vuex)
console.log(mutations)
export default new Vuex.Store({
  actions,
  getters: mutations.getters,
  mutations: mutations.mutations,
  state: mutations.state
})
