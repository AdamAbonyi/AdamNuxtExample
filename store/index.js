import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      navExpand: false
    },
    mutations: {
      toggleNavExpand (state) {
        state.navExpand = !state.navExpand;
      },
      setNavExpand (state, value) {
        state.navExpand = value;
      }
    }
  })
}

export default createStore
