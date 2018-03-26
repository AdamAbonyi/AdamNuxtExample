<template>
  <div class="container">
    <div>
      <Category v-for="category in data.categorizedQuestions" :key="category.categoryId" :data="category" />
    </div>
    <div style="text-align: center">
      <b-btn @click="configuratorPopAnswerOrMultiselect()">One step back</b-btn>&nbsp;
      <b-btn variant="primary" @click="configuratorSelectSummary()">Continue</b-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import Category from "~/components/ConfiguratorAccessoryListCategory.vue";

export default {
  props: {
    data: undefined
  },
  components: {
    Category
  },
  computed: {
  },
  methods: {
    ...mapMutations(["configuratorPopAnswerOrMultiselect", "configuratorSelectSummary"])
  }
};
</script>

<style>

</style>
