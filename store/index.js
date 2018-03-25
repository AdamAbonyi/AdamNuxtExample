import Vue from 'vue'
import Vuex from 'vuex'

import ConfiguratorData from '~/data/configurator'
import ConfiguratorHelpers from './configurator-helpers'

Vue.use(Vuex)

function updateReactiveField(hash, setter, key, value) {
  setter(null);
  hash[key] = value;
  setter(hash);
}

const createStore = () => new Vuex.Store({
  state: {
    navExpand: false,
    customer: {
      environment: null
    },
    configuratorData: ConfiguratorHelpers.initializeData(ConfiguratorData),
    configurator: {
      completed: false,
      curSelection: null,
      selStack: [],
      multiSelection: null,
      multiSelectionChoices: {},
      accessoryList: null,
      accessoryListChoices: {}
    }
  },
  getters: {
    configuratorStarted(state) {
      const conf = state.configurator;
      return (!!conf.curSelection || !!conf.multiSelection || !!conf.accessoryList)
    },
    configuratorState(state, getters) {
      const conf = state.configurator;
      if (!getters.configuratorStarted) return "not-started";
      else if (conf.completed) return "summary";
      else if (!!conf.accessoryList) return "acc-list";
      else if (!!conf.multiSelection) return "multi-sel";
      else return "single-sel";
    },
    configuratorBackStepAvailable(state) {
      return !!state.configurator.selStack.length;
    },
    configuratorFindAnswer(state) {
      return aId => ConfiguratorHelpers.findAnswer(state.configuratorData, aId);
    },
    configuratorFindQuestion(state) {
      return qId => ConfiguratorHelpers.findQuestion(state.configuratorData, qId);
    },
    configuratorFindAccessoryCategory(state) {
      return acId => ConfiguratorHelpers.findAccessoryCategory(state.configuratorData, acId);
    },
    configuratorGetPrice(state) {
      return price => ConfiguratorHelpers.getPrice(state.customer.environment, price);
    },
    configuratorFormatPrice(state) {
      return price => ConfiguratorHelpers.formatPrice(state.customer.environment, price);
    },
    configuratorIsAnswerSelected(state) {
      return ({ answerId, questionId }) => {
        if (!answerId) return false;

        if (!!state.configurator.accessoryList) {
          return (state.configurator.accessoryListChoices[questionId] === answerId);
        } else if (!!state.configurator.multiSelection) {
          return (state.configurator.multiSelectionChoices[questionId] === answerId);
        }

        return false;
      }
    }
  },
  mutations: {
    toggleNavExpand(state) {
      state.navExpand = !state.navExpand;
    },
    setNavExpand(state, value) {
      state.navExpand = value;
    },
    selectEnvironment(state, env) {
      state.customer.environment = env;
    },
    resetConfigurator(state, env) {
      state.customer.environment = env || (state.customer.environment || "usd");
      state.configurator.selStack = [];
      ConfiguratorHelpers.applySelection(state.configurator, state.configuratorData);
    },
    configuratorSelectAnswer(state, { answerId, questionId }) {
      var c = state.configurator, cd = state.configuratorData;
      if (!!c.accessoryList) {
        if (!c.accessoryListChoices[questionId] || (c.accessoryListChoices[questionId] === answerId)) return;
        // Otherwise we would not be able to update the UI, this needs to be done cause we access the properties in a hash-fashion way !!!
        updateReactiveField(c.accessoryListChoices, v => c.accessoryListChoices = v, questionId, answerId);
        return;
      } else if (!!c.multiSelection) {
        if (!c.multiSelectionChoices[questionId] || (c.multiSelectionChoices[questionId] === answerId)) return;
        // Otherwise we would not be able to update the UI, this needs to be done cause we access the properties in a hash-fashion way !!!
        updateReactiveField(c.multiSelectionChoices, v => c.multiSelectionChoices = v, questionId, answerId);
        return;
      }

      if (!c.curSelection || (c.curSelection.id !== questionId)) return;

      var answer = ConfiguratorHelpers.findAnswer(cd, answerId);
      if (!answer) return;

      var targetId;
      for (var i = 0; i < c.curSelection.answers.length; i++) {
        if (c.curSelection.answers[i].id === answer.id) {
          targetId = c.curSelection.answers[i].targetId;
          break;
        }
      }

      if (!!targetId) {
        var sel = ConfiguratorHelpers.findSelection(cd, targetId);
        if (!!sel) {
          ConfiguratorHelpers.saveSelection(c, answer);
          ConfiguratorHelpers.applySelection(c, cd, sel);
          return;
        }

        var msel = ConfiguratorHelpers.findMultiSelection(cd, targetId);
        if (!!msel) {
          ConfiguratorHelpers.saveSelection(c, answer);
          ConfiguratorHelpers.applyMultiSelection(c, cd, state.customer.environment, msel);
          return;
        }

        var accl = ConfiguratorHelpers.findAccessoryList(cd, targetId);
        if (!!accl) {
          ConfiguratorHelpers.saveSelection(c, answer);
          ConfiguratorHelpers.applyAccessoryList(c, cd, state.customer.environment, accl);
          return;
        }
      }
    },
    configuratorSelectAccessoryList(state, accListId) {
      var c = state.configurator, cd = state.configuratorData;

      var accl = ConfiguratorHelpers.findAccessoryList(cd, accListId);
      if (!accl) return;

      ConfiguratorHelpers.applyAccessoryList(c, cd, state.customer.environment, accl);
    },
    configuratorSelectSummary(state) {
      state.configurator.completed = true;
    },
    configuratorPopAnswer(state) {
      var c = state.configurator, cd = state.configuratorData;

      var selEx = c.selStack.pop();
      if (!selEx) return;

      ConfiguratorHelpers.applySelection(c, cd, selEx.selection);
    },
    configuratorPopAnswerOrMultiselect(state, mutations) {
      var c = state.configurator, cd = state.configuratorData;

      if (!!c.multiSelection) {
        ConfiguratorHelpers.applyMultiSelection(c, cd, state.customer.environment, c.multiSelection);
      } else {
        mutations.configuratorPopAnswer();
      }
    },
    configuratorPopAny(state, mutations) {
      var c = state.configurator, cd = state.configuratorData;

      if (!!c.accessoryList) {
        ConfiguratorHelpers.applyAccessoryList(c, cd, state.customer.environment, c.accessoryList);
      } else if (!!c.multiSelection) {
        ConfiguratorHelpers.applyMultiSelection(c, cd, state.customer.environment, c.multiSelection);
      } else {
        mutations.configuratorPopAnswer();
      }
    }
  }
});


export default createStore
