<template>
  <div>
    <main role="main">

        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Tree Traverser Sample</h1>
                <p class="lead text-muted">
                    Try it yourself: the tree traversing sample is here to demonstrate the architecture and capabilities of the future
                    configurator.
                </p>
                <p>
                    <b-btn variant="primary" @click="resetConfigurator();">Start the Configurator</b-btn>&nbsp;
                    <b-btn class="my-2" @click="reloadPage();">Reload the Page</b-btn>
                </p>
            </div>
        </section>

        <div class="album py-5 bg-light" :class="{ 'display-none': !configuratorStarted }">
          <div style="text-align: center">
            <b-btn :variant="usdVariant" @click="selectEnvironment('usd');">USA (USD)</b-btn>&nbsp;
            <b-btn :variant="eurVariant" @click="selectEnvironment('eur');">World (EUR)</b-btn>
            <br />
            <br />
          </div>
          <component :is="getComponentName" :data="getComponentData" />
        </div>

    </main>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import Selection from "~/components/ConfiguratorSelection.vue";
import MultiSelection from "~/components/ConfiguratorMultiSelection.vue";
import AccList from "~/components/ConfiguratorAccessoryList.vue";
import Summary from "~/components/ConfiguratorSummary.vue";

export default {
  components: {
    Selection,
    MultiSelection,
    AccList,
    Summary
  },
  computed: {
    ...mapGetters(["configuratorStarted"]),

    usdVariant() {
      return ((this.$store.state.customer.environment === "usd") ? "secondary" : "primary");
    },
    eurVariant() {
      return ((this.$store.state.customer.environment === "eur") ? "secondary" : "primary");
    },
    getComponentName() {
      switch (this.$store.getters.configuratorState) {
        case "single-sel": return "Selection";
        case "multi-sel": return "MultiSelection";
        case "acc-list": return "AccList";
        case "summary": return "Summary";
        default: return undefined;
      }
    },
    getComponentData() {
      switch (this.$store.getters.configuratorState) {
        case "single-sel": return this.$store.state.configurator.curSelection;
        case "multi-sel": return this.$store.state.configurator.multiSelection;
        case "acc-list": return this.$store.state.configurator.accessoryList;
        default: return undefined;
      }
    }
  },
  methods: {
    ...mapMutations(["selectEnvironment", "resetConfigurator"]),

    reloadPage() {
      window.location.reload();
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
