import stateFactory from "~/scripts/configurator-state"

const _ = stateFactory();

export const state = _.state;
export const getters = _.getters;
export const actions = _.actions;
export const mutations = _.mutations;
