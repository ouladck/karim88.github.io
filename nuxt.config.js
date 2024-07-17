import colors from 'vuetify/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - KARIM OULAD CHALHA',
    title: 'KARIM OULAD CHALHA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      { hid: 'description', name: 'description', content: `I'm an eager and experienced Technical Project Manager with a demonstrated history of working in the computer software industry. Skilled in Angular, Vuejs, Laravel and Python. Strong engineering professional and ardent about open source and the new IT with a Master focused in \`Master Business Analytics and Big Data\` from FST Settat.` },
      { hid: 'robots', name: 'robots', content: 'follow, index' },
      { hid: 'og:title', name: 'og:title', content: 'KARIM OULAD CHALHA - Technical Project Manager' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'KARIM OULAD CHALHA - Technical Project Manager' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'KARIM OULAD CHALHA - Technical Project Manager' },
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'KARIM OULAD CHALHA - Technical Project Manager' },
      { hid: 'og:image', name: 'og:image', content: 'images/karimslab.jpg' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'images/karimslab.jpg' },
      { hid: 'og:description', name: 'og:description', content: `I'm an eager and experienced Technical Project Manager with a demonstrated history of working in the computer software industry. Skilled in Angular, Vuejs, Laravel and Python. Strong engineering professional and ardent about open source and the new IT with a Master focused in \`Master Business Analytics and Big Data\` from FST Settat.` },
      { hid: 'twitter:description', name: 'twitter:description', content: `I'm an eager and experienced Technical Project Manager with a demonstrated history of working in the computer software industry. Skilled in Angular, Vuejs, Laravel and Python. Strong engineering professional and ardent about open source and the new IT with a Master focused in \`Master Business Analytics and Big Data\` from FST Settat.` },

      { hid: 'robots', name: 'robots', content: 'follow, index' },
      { hid: 'author', name: 'author', content: 'Karim Oulad Chalha <ouladchalha.k@gmail.com>' },
      { hid: 'keywords', name: 'keywords', content: 'fullstack, full-stack, odoo, web, developer, karim, oulad, chalha, oulad chalha, karim oulad chalha, maroc, rabat, fullstack developer, web developer, devextreme, python, typescript, angular, jquery, laravel, mongodb, morocco, linux, applications, nodejs, es6, coffeescript, backend, frontend, ssh, vuejs' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#FCE77D' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#FCE77D' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Dancing+Script|Kanit&display=swap'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/apple-icon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-tooltip.js',
    { src: "@/plugins/aos", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-lazy-load',
    '@nuxtjs/google-gtag',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {icons: 'fa'},
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
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  },
  'google-gtag': {
    id: 'UA-23659575-5',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
    },
    debug: false, // enable to track in dev mode
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
