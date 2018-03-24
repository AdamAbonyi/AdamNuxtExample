<template>
  <div class="container">
    <Question v-for="question in questions" :key="question.id" :data="question" />
    <div style="text-align: center">
      <b-btn @click="configuratorPopAnswer()">One step back</b-btn>&nbsp;
      <b-btn variant="primary" @click="selectAccessoryList()">Continue</b-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import Question from "~/components/ConfiguratorQuestion.vue";

export default {
  props: {
    data: undefined
  },
  components: {
    Question
  },
  computed: {
    ...mapGetters(["configuratorBackStepAvailable"]),

    questions() {
      return this.data.questionIds.map(
        q => this.$store.getters.configuratorFindQuestion(q) || {}
      );
    }
  },
  methods: {
    ...mapMutations(["configuratorPopAnswer", "configuratorSelectAccessoryList"]),

    selectAccessoryList() {
      this.configuratorSelectAccessoryList(this.data.accessoryListId);
    }
  }
};
</script>

<style>

</style>
