<template>
  <Configurator>
    <h1 class="jumbotron-heading">Tree Traverser Sample</h1>
    <p class="lead text-muted">
      Try it yourself: the tree traversing sample is here to demonstrate the architecture and capabilities of the future
      configurator for the CCR Liberty website.
    </p>
  </Configurator>
</template>

<script>
import configuratorData from "~/data/configurator-liberty";
import {
  answerClasses,
  questionClasses,
  accessoryCategoryClasses
} from "~/data/configurator-liberty-classes";

import Configurator from "~/components/Configurator.vue";

import configuratorBaseMixinFactory from "~/mixins/configurator-base";

export default {
  mixins: [
    configuratorBaseMixinFactory("customer", "configurator", configuratorData, {
      answerClasses,
      questionClasses,
      accessoryCategoryClasses
    })
  ],
  components: {
    Configurator
  }
};
</script>
