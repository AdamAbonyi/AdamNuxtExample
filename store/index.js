import Vue from 'vue'
import Vuex from 'vuex'

import ConfiguratorData from '~/data/configurator'

Vue.use(Vuex)

const createStore = () => new Vuex.Store({
  state: {
    navExpand: false,
    customer: {
      environment: "eur"
    },
    configuratorData: ConfiguratorData,
    configurator: {
      __started: false
    }
  },
  mutations: {
    toggleNavExpand(state) {
      state.navExpand = !state.navExpand;
    },
    setNavExpand(state, value) {
      state.navExpand = value;
    },
    resetConfigurator(state, env) {
      state.customer.environment = env;
      configurator.__started = true;
    }
  }
});


export default createStore
