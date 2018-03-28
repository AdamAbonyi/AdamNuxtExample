<template>
  <div>
    <div v-if="!!category" style="text-align: center; margin-bottom: 40px">
      <h1 :class="[{ 'card-title': true }, category.classes.title]">{{category.title}}</h1>
      <h4 v-if="!!category.text" :class="[{ 'card-subtitle': true }, category.classes.text]">{{category.text}}</h4>
    </div>
    <Question v-for="question in questions" :key="question.id" :data="question" />
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
    category() {
      return this.base.findAccessoryCategory(this.data.categoryId);
    },
    questions() {
      return this.data.questionIds.map(q => this.base.findQuestion(q) || {});
    }
  }
};
</script>

<style>

</style>
