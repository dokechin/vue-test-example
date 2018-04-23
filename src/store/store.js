import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: '',
    items: []
  },
  getters: {
  },
  mutations: {
    editName (state, name) {
      this.state.name = name
    },
    addShop (state, shop) {
      this.state.items.push(shop)
    }
  }
})
