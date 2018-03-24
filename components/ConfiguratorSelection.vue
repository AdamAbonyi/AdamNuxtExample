<template>
  <div class="container">
    <div class="row">
      <Answer v-for="answer in answers" :key="answer.answer.id" :data="answer" />
    </div>
    <div style="text-align: center">
      <b-btn :disabled="!configuratorBackStepAvailable" @click="configuratorPopAnswer()">One step back</b-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import Answer from "~/components/ConfiguratorAnswer.vue";

export default {
  props: {
    data: undefined
  },
  components: {
    Answer
  },
  computed: {
    ...mapGetters(["configuratorBackStepAvailable"]),

    answers() {
      return this.data.answers.map(
        a => {
          return {
            answer: this.$store.getters.configuratorFindAnswer(a.id) || {},
            selection: this.data
          };
        }
      );
    }
  },
  methods: {
    ...mapMutations(["configuratorPopAnswer"])
  }
};
</script>

<style>

</style>
