import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - QuartoBattleStation',
    title: 'QuartoBattleStation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  privateRuntimeConfig: {
    BASIC_USER: process.env.BASIC_USER,
    BASIC_PASSWORD: process.env.BASIC_PASSWORD
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {
      target: 'http://backend:3001',
      pathRewrite: {'^/api/': '/api/v1/'}
    }
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyC2qrcV-V-cY4qn5NDm1SGkjsmOq0WN1yw',
      authDomain: 'quartobattlestation.firebaseapp.com',
      projectId: 'quartobattlestation',
      storageBucket: 'quartobattlestation.appspot.com',
      messagingSenderId: '627953691048',
      appId: '1:627953691048:web:488003be84b403a8c4959d',
    },
    services: {
      firestore: true
    }
  }
}
