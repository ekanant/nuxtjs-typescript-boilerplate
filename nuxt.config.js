export default {
  srcDir: './src/',
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        vueI18n: {
          silentTranslationWarn: true
        },
        lazy: true,
        langDir: 'locales/',
        seo: false,
        strategy: 'prefix_and_default',
        defaultLocale: 'th',
        vuex: {
          syncLocale: true
        },
        locales: [
          {
            code: 'en',
            iso: 'en-TH',
            file: 'en-TH.js'
          },
          {
            code: 'th',
            iso: 'th-TH',
            file: 'th-TH.js'
          }
        ],
        detectBrowserLanguage: false
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
