import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: ''
  },
  getters: {
  },
  mutations: {
    editName (state, name) {
      this.state.name = name
    }
  }
})
