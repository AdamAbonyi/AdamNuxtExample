module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "nuxtjjouda",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [
    "@/assets/style.scss"
  ],
  /*
  ** Modules
  */
  modules: [
    "bootstrap-vue/nuxt",

    // Or if you have custom bootstrap CSS...
    // ["bootstrap-vue/nuxt", { css: false }]
    '@nuxtjs/router'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['babel-polyfill'],
    /** Support for postcss */
    postcss: [
      require('autoprefixer')(),
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
      require('precss')(),
    ],
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

