<template>
  <div>
    <TopBar/>
    <!-- Needs to be set by menu -->
    <nuxt class="animate-content-container" :class="contentClass"/>

  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import { mapState, mapMutations } from "vuex";

export default {
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
    }
    if (process.browser) {
      if (this.$route.hash === "#home") {
        this.setNavExpand(false);
      } else {
        this.setNavExpand(true);
      }
    }
  },
  computed: {
    ...mapState(["navExpand"]),

    contentClass: function() {
      if (!this.expand) return "high-margin";
      return "low-margin";
    }
  },
  methods: {
    ...mapMutations(["setNavExpand"]),

    handleScroll: function(event) {
      if (window) {
        if (window.scrollY >= 60) {
          this.setNavExpand(true);
        } else {
          this.setNavExpand(false);
        }
      }
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },

  components: {
    TopBar
  }
};
</script>

<style scoped lang="scss">
.animate-content-container {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.high-margin {
  margin-top: 86px;
}
.low-margin {
  margin-top: 86px;
}
</style>
