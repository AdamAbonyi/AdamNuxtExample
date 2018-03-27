<template>
  <div>
    <div style="text-align: center; margin-bottom: 40px">
      <h1 class="card-title">{{data.title}}</h1>
      <h4 class="card-subtitle">{{data.text}}</h4>
    </div>
    <div class="row">
      <Answer v-for="answer in answers" :key="answer.answer.id" :data="answer" :sel="false" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
      findAnswer: "configurator/findAnswer"
    }),

    answers() {
      return this.data.answerIds.map(a => {
        return {
          answer: this.findAnswer(a) || {},
          question: this.data
        };
      });
    }
  },
  methods: {}
};
</script>

<style>

</style>
