<template>
  <div>
    <div v-if="!!category" style="text-align: center; margin-bottom: 40px">
      <h1 class="card-title">{{category.title}}</h1>
      <h4 v-if="!!category.text" class="card-subtitle">{{category.text}}</h4>
    </div>
    <Question v-for="question in questions" :key="question.id" :data="question" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
      findAccessoryCategory: "configurator/findAccessoryCategory",
      findQuestion: "configurator/findQuestion"
    }),

    category() {
      return this.findAccessoryCategory(this.data.categoryId);
    },
    questions() {
      return this.data.questionIds.map(q => this.findQuestion(q) || {});
    }
  },
  methods: {}
};
</script>

<style>

</style>
