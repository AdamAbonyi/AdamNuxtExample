<template>
  <main role="main">
    <section class="jumbotron text-center">
      <div class="container">
        <slot />
        <p>
          <b-btn variant="primary" @click="base.reset();">Start the Configurator</b-btn>&nbsp;
          <b-btn class="my-2" @click="base.reloadPage();">Reload the Page</b-btn>
        </p>
      </div>
    </section>

    <div class="album py-5 bg-light" :class="{ 'display-none': !base.isStarted }">
      <div style="text-align: center">
        <template v-for="env in base.supportedEnvs">
          <b-btn :key="env" :variant="envVariant(env)" @click="base.selectEnvironment(env);">{{env.toUpperCase()}}</b-btn>&nbsp;
        </template>
        <br />
        <br />
      </div>
      <component :is="getComponentName" :data="getComponentData" />
    </div>
  </main>
</template>

<script>
import Selection from "~/components/ConfiguratorSelection.vue";
import MultiSelection from "~/components/ConfiguratorMultiSelection.vue";
import AccList from "~/components/ConfiguratorAccessoryList.vue";
import Summary from "~/components/ConfiguratorSummary.vue";

import ConfiguratorMixin from "~/mixins/configurator";

export default {
  mixins: [ConfiguratorMixin],
  components: {
    Selection,
    MultiSelection,
    AccList,
    Summary
  },
  computed: {
    envVariant() {
      return function(env) {
        return this.base.environment === env ? "secondary" : "primary";
      }.bind(this);
    },
    getComponentName() {
      switch (this.base.currentState) {
        case "single-sel":
          return "Selection";
        case "multi-sel":
          return "MultiSelection";
        case "acc-list":
          return "AccList";
        case "summary":
          return "Summary";
        default:
          return undefined;
      }
    },
    getComponentData() {
      var c = this.base.state;
      switch (this.base.currentState) {
        case "single-sel":
          return c.curSelection;
        case "multi-sel":
          return c.multiSelection;
        case "acc-list":
          return c.accessoryList;
        default:
          return undefined;
      }
    }
  }
};
</script>

<style>
.display-none {
  display: none;
}

:root {
  --jumbotron-padding-y: 3rem;
}

.jumbotron {
  padding-top: var(--jumbotron-padding-y);
  padding-bottom: var(--jumbotron-padding-y);
  margin-bottom: 0;
  background-color: #fff;
}

@media (min-width: 768px) {
  .jumbotron {
    padding-top: calc(var(--jumbotron-padding-y) * 2);
    padding-bottom: calc(var(--jumbotron-padding-y) * 2);
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron-heading {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: 0.25rem;
}

.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

.card-title {
  text-transform: uppercase;
}

.card-subtitle {
  color: lightslategray;
}
</style>
