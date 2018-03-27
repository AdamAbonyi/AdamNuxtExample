export const state = () => ({
  navExpand: false
})

export const actions = {
  startConfigurator({ state, commit }, env) {
    commit("customer/selectEnvironment", env);
    commit("configurator/reset");
  }
}

export const mutations = {
  toggleNavExpand(state) {
    state.navExpand = !state.navExpand;
  },
  setNavExpand(state, value) {
    state.navExpand = value;
  }
}
