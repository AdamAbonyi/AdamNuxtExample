<template>
  <div class="col-sm-6 col-md-4 text-center">
    <div><img alt="Michal Guba" src="https://ccrliberty.com/images/testimonials/michal-guba-thumb.png" class="imgCenter img-responsive"/></div>
    <div class="columnTitle">
      <strong>Michal Guba</strong>
      <br />
      Czech Republic
    </div>
    <div class="columnText">
      Liberty rebreathers are used for exploration and research of the Hranicka abyss for three years. We use eCCR Liberty for deep, exploration and securing dives. We are happy with the functionality and safety of the machine.
    </div>

  </div>
</template>

<script>
export default {
  props: {
    data: undefined
  },
  components: {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.text-center {
  text-align: center;
}

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
