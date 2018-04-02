<template>
  <section :class="type" :style="{ 'background-color': bgColor, 'background-image': src }">
    <div :class="{ container: !fullWidth }">
      <h1 v-if="topTitle && title" class="topTitle">{{title}}</h1>
      <h2 v-if="!topTitle && title">{{title}}</h2>
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
    },
    topTitle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    src: function() {
      return this.bgImage ? `url(${this.bgImage})` : "unset";
    }
  }
};
</script>

<style scoped lang="scss">
@import "assets/_variables.scss";

section {
  background-position: bottom center;
  background-repeat: repeat-x;

  .topTitle {
    padding-top: 100px;
  }

  &.dark {
    color: $light-color;
    background-color: $dark-bg;
  }

  &.light {
    color: $dark-color;
    background-color: $light-bg;
  }

  h1 {
    text-align: center;
    line-height: 100px;
    margin-bottom: 50px;
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
