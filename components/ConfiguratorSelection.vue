<template>
  <div class="container">
    <div class="row">
      <Answer v-for="answer in answers" :key="answer.answer.id" :data="answer" :sel="true" />
    </div>
    <div style="text-align: center">
      <b-btn :disabled="!base.isBackStepAvailable" @click="base.popAnswer()">One step back</b-btn>
    </div>
  </div>
</template>

<script>
import Answer from "~/components/ConfiguratorAnswer.vue";

import ConfiguratorMixin from "~/mixins/configurator";

export default {
  mixins: [ConfiguratorMixin],
  props: {
    data: undefined
  },
  components: {
    Answer
  },
  computed: {
    answers() {
      return this.data.answers.map(a => {
        return {
          answer: this.base.findAnswer(a.id) || {},
          selection: this.data
        };
      });
    }
  }
};
</script>

<style>

</style>
