<template>
<div class="container">
  <!-- Home Page

  <div class="row">
    <b-button variant="primary" size="sm" href="#technicals">
      Some Btn
    </b-button>
  </div> -->

  <section id="links">
    <nuxt-link to="/">Home</nuxt-link>&nbsp;
    <nuxt-link to="/configurator">Configurator</nuxt-link>
  </section>

  <section id="home">
    Home Stuff
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
  </section>

  <section id="technicals" class="technicals">
    <h2>Technicals</h2>
    <div class="row column">
      <TechnicalBox number="01" title="Something something" link="/"></TechnicalBox>
      <TechnicalBox number="02" title="Something something" link="/"></TechnicalBox>
      <TechnicalBox number="03" title="Something something" link="/"></TechnicalBox>
      <TechnicalBox number="04" title="Something something" link="/"></TechnicalBox>
      <TechnicalBox number="05" title="Something something" link="/"></TechnicalBox>
      <TechnicalBox number="06" title="Something something" link="/"></TechnicalBox>
      <TechnicalBox number="07" title="Something something" link="/"></TechnicalBox>
      <TechnicalBox number="08" title="Something something" link="/"></TechnicalBox>
    </div>
  </section>

  <section id="gallery">
    Gallery
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
  </section>

  <section id="instructors">
    Instructors
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
  </section>

  <section id="testimonials" class="testimonials">
    <h2>Testimonials</h2>
    <div class="row columns">
      <Testimonial></Testimonial>
      <Testimonial></Testimonial>
      <Testimonial></Testimonial>
    </div>
  </section>

  <section id="contact">
    Contact
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
  </section>
</div>

</template>

<script>
import Testimonial from "~/components/Testimonial";
import TechnicalBox from "~/components/TechnicalBox";

import scrollTo from "~/scripts/scroll-to";

export default {
  components: {
    Testimonial,
    TechnicalBox
  },
  created() {},
  mounted() {
    if (!this.$route.hash) return;
    scrollTo(this.$route.hash, { offset: -100, duration: 0 });
  }
};
</script>

<style lang="scss">
section {
  h2 {
    line-height: 58px;
    margin-bottom: 35px;
  }

  padding-top: 40px;
  padding-bottom: 40px;
}

.technicals > h2:first-child {
  text-align: center;
}

.testimonials {
  text-align: center;

  h2 {
    color: white;
  }
}
</style>
