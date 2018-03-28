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

  <section id="rebreather" class="rebreathers" >
    <h2>Fault-tolerant Rebreather</h2>
    <p class="subText">The Liberty rebreather is designed to be fault-tolerant. No single malfunction in the electronic system could cause a breakdown of the whole apparatus. And even multiple malfunctions often do not lead to a complete breakdown.</p>
    <div class="row column">
      <Rebreather title="4 oxygen sensor" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 helium sensors patented technology" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 methods of ppO2 measurement" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 independent computers" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="2 solenoid valves" link="4-oxygen-sensors"></Rebreather>
      <Rebreather title="4 displays" link="4-oxygen-sensors"></Rebreather>
    </div>
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
import Rebreather from "~/components/Rebreather";

import scrollTo from "~/scripts/scroll-to";

export default {
  components: {
    Testimonial,
    Rebreather,
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

.rebreathers {
  text-align: center;

  h2,
  p {
    text-align: center;
  }
}

.testimonials {
  text-align: center;

  h2 {
    color: white;
  }
}
</style>
