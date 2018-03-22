<template>
 <b-navbar type="dark" variant="primary" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
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
export default {
  name: "TopBar"
};
</script>

<style scoped>
</style>
