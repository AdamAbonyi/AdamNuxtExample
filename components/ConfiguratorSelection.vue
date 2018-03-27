<template>
  <div class="container">
    <div class="row">
      <Answer v-for="answer in answers" :key="answer.answer.id" :data="answer" :sel="true" />
    </div>
    <div style="text-align: center">
      <b-btn :disabled="!isBackStepAvailable" @click="popAnswer()">One step back</b-btn>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

import Answer from "~/components/ConfiguratorAnswer.vue";

export default {
  props: {
    data: undefined
  },
  components: {
    Answer
  },
  computed: {
    ...mapGetters({
      isBackStepAvailable: "configurator/isBackStepAvailable",
      findAnswer: "configurator/findAnswer"
    }),

    answers() {
      return this.data.answers.map(a => {
        return {
          answer: this.findAnswer(a.id) || {},
          selection: this.data
        };
      });
    }
  },
  methods: {
    ...mapMutations({ popAnswer: "configurator/popAnswer" })
  }
};
</script>

<style>

</style>
