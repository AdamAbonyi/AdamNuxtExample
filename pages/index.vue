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

  <section id="technicals">
    Technicals
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
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
import scrollTo from "~/scripts/scroll-to";

export default {
  components: {
    Testimonial
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
  padding-top: 40px;
  padding-bottom: 40px;
}

.testimonials {
  text-align: center;

  h2 {
    color: white;
    line-height: 58px;
    margin-bottom: 35px;
  }
}
</style>
