<template>
 <b-navbar class="animated-navbar" :class="{ 'navbarWh': !navExpand, 'transparent': !navExpand }" type="dark" fixed="top" variant="dark" toggleable toggle-breakpoint="lg">
    <b-navbar-brand to="/">Liberty</b-navbar-brand>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/#home">Home</b-nav-item>
        <b-nav-item to="/#technicals">Technicals</b-nav-item>
        <b-nav-item to="/#gallery">Gallery</b-nav-item>
        <b-nav-item to="/#instructors">Instructors and training</b-nav-item>
        <b-nav-item to="/#testimonials">Testimonials</b-nav-item>
        <b-nav-item to="/events">Events</b-nav-item>
        <b-nav-item to="/support">Support</b-nav-item>
        <b-nav-item to="/#contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TopBar",
  computed: {
    ...mapState(["navExpand"])
  },
  methods: {
    ...mapMutations(["toggleNavExpand"])
  },
  mounted() {
    // Bugfix with classes not updating after rehydration
    var tne = this.toggleNavExpand;
    setTimeout(function() {
      tne();
      setTimeout(function() {
        tne();
      });
    });
  }
};
</script>

<style scoped lang="scss">
.navbarWh {
  min-height: 120px;
}

@media (min-width: 320px) {
  .navbarWh {
    min-height: auto;
  }
}

.navbarWh .navbar-brand {
  background-position: center;
  background-repeat: no-repeat;
  margin: 8px 0 6px 23px;
  width: 145px;
  height: 43px;
}

.animated-navbar,
.animated-navbar .navbar-brand {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.transparent {
  background-color: transparent !important;
}
</style>
