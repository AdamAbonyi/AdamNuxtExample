<template>
  <div class="col-sm-6 col-md-4 text-center">
    <div>
      <img :alt="fullName"
           :src="data.thumb" class="imgCenter img-responsive"/></div>
    <div class="columnTitle">
      <strong>{{fullName}}</strong>
      <br />
      {{data.title}}
    </div>
    <div class="columnText">
      {{data.desc}}
    </div>

  </div>
</template>

<script lang="ts">
export default {
  props: {
    data: undefined
  },
  components: {},
  computed: {
    fullName(): string {
      return `${this.data.firstName} ${this.data.lastName}`
    },
  },
  methods: {}
};
</script>

<style lang="scss">
.columnTitle {
  margin-top: 20px;
  margin-bottom: 20px;
  color: White;
}

@media only screen and (min-width: 992px) {
  .columnText {
    padding-left: 40px;
    padding-right: 40px;
  }
}

.columnText {
  color: #878787;
  line-height: 27px;
}
</style>
