<template>
  <Configurator>
    <h1 class="jumbotron-heading">DSV/BOV Tree Traverser</h1>
    <p class="lead text-muted">
      Try it yourself: the tree traversing sample is here to demonstrate the architecture and capabilities of the future
      configurator for the new DSV/BOV tree.
    </p>
  </Configurator>
</template>

<script>
import Configurator from "~/components/Configurator.vue";

import configuratorBaseMixinFactory from "~/mixins/configurator-base";

export default {
  mixins: [configuratorBaseMixinFactory("customer", "configurator-dsvbov")],
  components: {
    Configurator
  }
};
</script>
