<template>
  <div class="row columns">
    <TestimonialBox v-for="(t, index) in data"
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
  methods: {
  },
  props: ["data"]
};
</script>

<style lang="scss">

</style>
