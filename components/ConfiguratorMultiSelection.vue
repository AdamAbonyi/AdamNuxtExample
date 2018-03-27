<template>
  <div class="container">
    <Question v-for="question in questions" :key="question.id" :data="question" />
    <div style="text-align: center">
      <b-btn @click="popAnswer()">One step back</b-btn>&nbsp;
      <b-btn variant="primary" @click="selectAccessoryList()">Continue</b-btn>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

import Question from "~/components/ConfiguratorQuestion.vue";

export default {
  props: {
    data: undefined
  },
  components: {
    Question
  },
  computed: {
    ...mapGetters({
      findQuestion: "configurator/findQuestion"
    }),

    questions() {
      return this.data.questionIds.map(q => this.findQuestion(q) || {});
    }
  },
  methods: {
    ...mapMutations({
      popAnswer: "configurator/popAnswer"
    }),
    ...mapActions({
      configuratorSelectAccessoryList: "configurator/selectAccessoryList"
    }),

    selectAccessoryList() {
      this.configuratorSelectAccessoryList(this.data.accessoryListId);
    }
  }
};
</script>

<style>

</style>
