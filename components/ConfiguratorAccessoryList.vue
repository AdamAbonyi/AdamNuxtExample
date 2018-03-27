<template>
  <div class="container">
    <div>
      <Category v-for="category in data.categorizedQuestions" :key="category.categoryId" :data="category" />
    </div>
    <div style="text-align: center">
      <b-btn @click="popAnswerOrMultiselect()">One step back</b-btn>&nbsp;
      <b-btn variant="primary" @click="selectSummary()">Continue</b-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

import Category from "~/components/ConfiguratorAccessoryListCategory.vue";

export default {
  props: {
    data: undefined
  },
  components: {
    Category
  },
  computed: {},
  methods: {
    ...mapActions({
      popAnswerOrMultiselect: "configurator/popAnswerOrMultiselect"
    }),
    ...mapMutations({ selectSummary: "configurator/selectSummary" })
  }
};
</script>

<style>

</style>
