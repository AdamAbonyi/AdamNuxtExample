<template>
  <div class="container">
    <Question v-for="question in questions" :key="question.id" :data="question" />
    <div style="text-align: center">
      <b-btn @click="base.popAnswer()">One step back</b-btn>&nbsp;
      <b-btn variant="primary" @click="selectAccessoryList()">Continue</b-btn>
    </div>
  </div>
</template>

<script>
import Question from "~/components/ConfiguratorQuestion.vue";

import ConfiguratorMixin from "~/mixins/configurator";

export default {
  mixins: [ConfiguratorMixin],
  props: {
    data: undefined
  },
  components: {
    Question
  },
  computed: {
    questions() {
      return this.data.questionIds.map(q => this.base.findQuestion(q) || {});
    }
  },
  methods: {
    selectAccessoryList() {
      this.base.selectAccessoryList(this.data.accessoryListId);
    }
  }
};
</script>

<style>

</style>
