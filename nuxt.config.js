module.exports = {
  router: {
    linkActiveClass: "link-active",
    scrollBehavior: function(to, from, savedPosition) {
      if (!process.browser || !window || !window.customScrollTo) return;

      if (to.hash) {
        if (to.path !== from.path) return;
        window.customScrollTo(to.hash, {
          offset: -100,
          duration: 500
        });
        return {
          selector: savedPosition
        };
      } else if (savedPosition) {
        return savedPosition;
      } else {
        // Dont return to top when moving out
        // return {
        //   x: 0,
        //   y: 0
        // };
      }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "CCR Liberty",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        hid: "description",
        name: "description",
        content:
          "CCR Liberty - The Best Equipped Rebreather, First CE Certified."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "CCR Liberty - The Best Equipped Rebreather, First CE Certified."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["@/assets/style.scss"],
  dev: (process.env.NODE_ENV || "production").toLowerCase() !== "production",
  transition: {
    name: "fade",
    mode: "out-in"
  },
  /*
  ** Modules
  */
  modules: [
    "~/modules/typescript.js",
    "bootstrap-vue/nuxt"

    // Or if you have custom bootstrap CSS...
    // ["bootstrap-vue/nuxt", { css: false }]
    //'@nuxtjs/router'
  ],
  plugins: ["~/plugins/custom-scroll-to"],
  /*
  ** Customize the progress bar color
  */
  loading: false, //{ color: "#3B8070" },

  /*
  ** Build configuration
  */
  build: {
    vendor: ["babel-polyfill"],
    /** Support for postcss */
    postcss: {
      plugins: {
        autoprefixer: true,
        "postcss-nested": true,
        "postcss-responsive-type": true,
        "postcss-hexrgba": true,
        precss: true
      }
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
