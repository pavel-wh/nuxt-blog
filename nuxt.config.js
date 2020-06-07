const path = require('path')
const fs = require('fs')

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#dd6161' },
  /*
   ** Server config
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './server/server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, './server/server.crt'))
    }
  },
  serverMiddleware: [
    // Will register redirect-ssl npm package
    'redirect-ssl'
  ],
  */
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css/normalize.css',
    '@/assets/theme/index.sass'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/globals', '@/plugins/axios'],
  /*
   ** Nuxt.js dev-modules
  buildModules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  */
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /* https://pwa.nuxtjs.org/ */
  pwa: {
    workbox: {
      /* workbox options */
    },
    meta: {
      /* meta options */
    },
    icon: {
      /* icon options */
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL
    // proxy: true,
    // proxyHeaders: true,
    // credentials: false
  },
  env: {
    appName: 'Blog App'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
