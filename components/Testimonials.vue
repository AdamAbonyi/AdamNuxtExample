<template>
  <div class="row columns">
    <TestimonialBox v-for="(t, index) in getTestimonials"
        :key="index"
        :data="t">
    </TestimonialBox>
  </div>
</template>

<script>
import TestimonialBox from "~/components/TestimonialBox";

export default {
  components: {
    TestimonialBox
  },
  created() {
  },
  computed: {
    getTestimonials() {
      this.shuffleArray(this.data)
      return this.data.slice(0, 3);
    }
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  },
  props: ["data"]
};
</script>

<style lang="scss">

</style>
