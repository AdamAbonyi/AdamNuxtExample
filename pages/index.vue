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

  <section id="testimonials">
    Testimonials
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
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
import AppLogo from "~/components/AppLogo.vue";
import scrollTo from "~/scripts/scroll-to";

export default {
  components: {
    AppLogo
  },
  created() {},
  mounted() {
    if (!this.$route.hash) return;
    scrollTo(this.$route.hash, { offset: -100, duration: 0 });
  }
};
</script>

<style>

</style>
