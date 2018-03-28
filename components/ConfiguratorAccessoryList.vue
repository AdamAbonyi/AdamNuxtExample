<template>
  <div class="container">
    <div>
      <Category v-for="category in data.categorizedQuestions" :key="category.categoryId" :data="category" />
    </div>
    <div style="text-align: center">
      <b-btn @click="base.popAnswerOrMultiselect()">One step back</b-btn>&nbsp;
      <b-btn variant="primary" @click="base.selectSummary()">Continue</b-btn>
    </div>
  </div>
</template>

<script>
import Category from "~/components/ConfiguratorAccessoryListCategory.vue";

import ConfiguratorMixin from "~/mixins/configurator";

export default {
  mixins: [ConfiguratorMixin],
  props: {
    data: undefined
  },
  components: {
    Category
  },
};
</script>

<style>

</style>
