<template>
  <div>
    <div style="text-align: center; margin-bottom: 40px">
      <h1 class="card-title">{{data.title}}</h1>
      <h4 class="card-subtitle">{{data.text}}</h4>
    </div>
    <div class="row">
      <Answer v-for="answer in answers" :key="answer.answer.id" :data="answer" />
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
    answers() {
      return this.data.answerIds.map(
        a => {
          return {
            answer: this.$store.getters.configuratorFindAnswer(a) || {},
            question: this.data
          };
        }
      );
    }
  },
  methods: {
  }
};
</script>

<style>

</style>
