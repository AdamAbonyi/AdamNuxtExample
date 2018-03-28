<template>
  <div>
    <div style="text-align: center; margin-bottom: 40px">
      <h1 :class="[{ 'card-title': true }, data.classes.title]">{{data.title}}</h1>
      <h4 :class="[{ 'card-subtitle': true }, data.classes.text]">{{data.text}}</h4>
    </div>
    <div class="row">
      <Answer v-for="answer in answers" :key="answer.answer.id" :data="answer" :sel="false" />
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
      return this.data.answerIds.map(a => {
        return {
          answer: this.base.findAnswer(a) || {},
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
