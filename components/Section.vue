<template>
  <section :class="type" :style="{ 'background-color': bgColor}">
    <div :class="{ container: !fullWidth }">
      <h2 v-if="title">{{title}}</h2>
      <p v-if="subtitle" class="text-center subText">{{subtitle}}</p>
      <slot>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    bgImage: String,
    bgColor: String,
    type: String,
    fullHeight: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "assets/_variables.scss";

section {
  &.dark {
    color: $light-color;
    background-color: $dark-bg;
  }

  &.light {
    color: $dark-color;
    background-color: $light-bg;
  }

  h2 {
    text-align: center;
    line-height: 58px;
    margin-bottom: 35px;
  }

  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
