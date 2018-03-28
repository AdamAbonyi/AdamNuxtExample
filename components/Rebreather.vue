<template>
  <div class="col-xs-12 col-xs-6 col-sm-4">
      <nuxt-link :to="link">
        <img src="https://ccrliberty.com/images/properties/oxygen-sensors.jpg"
             class="topIcon img-circle imgCenter img-responsive">
        </nuxt-link>
      <p class="columText">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "img", "link"],
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

.topIcon {
    border: 2px solid #ef4c36;
    max-width: 175px;
    max-height: 175px;
}

.columText {
    // color: White;
    width:200px;
    margin-top: 20px;
    margin-bottom: 40px;

    margin-left: auto;
    margin-right: auto;
}

.imgCenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.img-circle {
    border-radius: 50%;
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
