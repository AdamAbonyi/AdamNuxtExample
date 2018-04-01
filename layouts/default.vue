<template>
  <div>
    <TopBar/>
    <!-- Needs to be set by menu -->
    <nuxt class="animate-content-container"
          :class="contentClass" />
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import { mapState, mapMutations } from "vuex";

export default {
  created() {
    if (process.browser) {
      // Update on scroll change
      window.addEventListener("scroll", this.handleScroll);
      this.handleScroll();
    }
  },
  computed: {
    ...mapState(["navExpand"]),

    contentClass: function() {
      return !this.navExpand ? "nav-expanded" : "nav-collapsed";
    }
  },
  methods: {
    ...mapMutations(["setNavExpand"]),

    handleScroll: function(event) {
      if (!!window) {
        if (window.scrollY >= 40) {
          if (!this.navExpand) this.setNavExpand(true);
        } else {
          if (!!this.navExpand) this.setNavExpand(false);
        }
      }
    }
  },
  destroyed() {
    if (!!window) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },

  components: {
    TopBar
  }
};
</script>

<style scoped lang="scss">
@import "assets/_variables.scss";

.animate-content-container {
  -webkit-transition: all $default-transition-duration;
  transition: all $default-transition-duration;
}

// .nav-expanded {
//   margin-top: 72px;
// }
// .nav-collapsed {
//   margin-top: 40px;
// }
</style>
