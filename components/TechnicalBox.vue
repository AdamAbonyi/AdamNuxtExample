<template>
  <div class="col-xs-12 col-xs-6 col-sm-4 col-md-3">
    <div class="techColum minHeight160">
      <div class="columNum">{{number}}</div>
      <div class="columTitle">{{title || "Title BlaBlaBla Cosi Kdesi"}}</div>
      <div class="columLink">
        <svg height="12" width="12">
          <polygon points="0,0 0,12 6,6" style="fill:#ef4c36" />
        </svg>
        <nuxt-link :to="link">Full article</nuxt-link></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["number", "title", "link"],
  components: {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.columLink {
  position: absolute;
  bottom: 25px;

  a {
    color: #ef4c36;
    text-decoration: none;
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  }
}

.techColum {
  margin-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
}

.minHeight160 {
  min-height: 160px;
}

.columNum {
  // color: #d7d7d7;
  font-size: 25px;
}

@media only screen and (min-width: 768px) {
  .columNum {
    font-size: 45px;
    text-align: left;
  }
}

.columTitle {
  color: #272727;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}

@media only screen and (min-width: 768px) {
  .columTitle {
    font-size: 20px;
    text-align: left;
  }
}

.columLink {
  // background-image: url(../pcs/pcs_layout/arrow.png);
  background-position: center left;
  background-repeat: no-repeat;
  width: 110px;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (min-width: 768px) {
  .columLink {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
