<template>
  <div class="top-bar">
    <div class="title">
      <nuxt-link to="/">Logo And Text</nuxt-link>

    </div>
    <div class="buttons">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/#technicals">Technicals</nuxt-link>
      <nuxt-link to="/#gallery">Gallery</nuxt-link>
      <nuxt-link to="/#instructors">Instructors and training</nuxt-link>
      <nuxt-link to="/#testimonials">Testimonials</nuxt-link>
      <nuxt-link to="/events">Events</nuxt-link>
      <nuxt-link to="/support">Support</nuxt-link>
      <nuxt-link to="/#contact">Contact</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopBar"
  }
</script>

<style scoped>
a {
  padding:4px;
  font-size: 12px;
}
.top-bar {
  padding:8px;
  width:100%;
  display: flex;
  background-color:red;
}

.title {
  flex:auto;
}

.buttons {
  text-align:right;
  flex:auto;
}
</style>
