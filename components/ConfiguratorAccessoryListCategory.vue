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
import { mapState, mapMutations, mapGetters } from "vuex";

import Question from "~/components/ConfiguratorQuestion.vue";

export default {
  props: {
    data: undefined
  },
  components: {
    Question
  },
  computed: {
    ...mapGetters(["configuratorBackStepAvailable"]),

    category() {
      return this.$store.getters.configuratorFindAccessoryCategory(this.data.categoryId);
    },
    questions() {
      return this.data.questionIds.map(
        q => this.$store.getters.configuratorFindQuestion(q) || {}
      );
    }
  },
  methods: {
  }
};
</script>

<style>

</style>
