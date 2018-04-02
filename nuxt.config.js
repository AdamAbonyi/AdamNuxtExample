module.exports = {
  router: {
    linkActiveClass: "link-active",
    scrollBehavior: function(to, from, savedPosition) {
      if (!process.browser || !window || !window.customScrollTo) return;

      if (to.hash) {
        if (to.path !== from.path) return;
        window.customScrollTo(to.hash, {
          offset: -50,
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
  css: ["@/assets/style.scss"], // inlining them
  dev: (process.env.NODE_ENV || "production").toLowerCase() !== "production",
  transition: {
    // name: "fade",
    // mode: "in-out",
    duration: 0,
    beforeEnter: function () {
      window.scrollState.lastHash = undefined;
   }
  },
  /*
  ** Modules
  */
  modules: [
    "~/modules/typescript.js",
    "bootstrap-vue/nuxt",
    // "@nuxtjs/pwa" // Uncomment this line to support ServiceWorker

    // Or if you have custom bootstrap CSS...
    // ["bootstrap-vue/nuxt", { css: false }]
    //'@nuxtjs/router'
  ],
  plugins: [
    "~/plugins/custom-scroll-to",
    "~/plugins/global-components.js"
  ],
  /*
  ** Customize the progress bar color
  */
  loading: true, //{ color: "#3B8070" },

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
  },

  /*
  ** Nuxt PWA Workbos
  */
  workbox: {
    importScripts: ["my-test-pwa-script.js"],
    // globalDirectory: '.',
    globPatterns: ["static/**/*.{js,css,png,jpg, jpeg, json}",
    ".nuxt/dist/**/*.{js,css,png,jpg, jpeg, json}"],
    globDirectory: '.',
    modifyUrlPrefix: { 'static/': '/', '.nuxt/dist/':'/_nuxt/' },
    // modifyUrlPrefix: { '': '/_nuxt/' }

    // runtimeCaching: [
    //   {
    //     // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
    //     urlPattern: "*",
    //     // Defaults to `networkFirst` if omitted
    //     handler: "cacheFirst",
    //     // Defaults to `GET` if omitted
    //     method: "GET",
    //     options: {
    //       // Configure the broadcast cache update plugin.
    //       broadcastUpdate: {
    //         channelName: "my-update-channel"
    //       }
    //     }
    //   }
    // ]
  }
};
