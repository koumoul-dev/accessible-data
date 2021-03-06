const URL = require('url').URL
const i18n = require('./i18n')
const fr = require('vuetify/es5/locale/fr').default
let config = require('config')
config.basePath = new URL(config.publicUrl + '/').pathname
config.i18nMessages = i18n.messages

if (process.env.NODE_ENV === 'production') {
  const nuxtConfigInject = require('@koumoul/nuxt-config-inject')
  if (process.argv.slice(-1)[0] === 'build') config = nuxtConfigInject.prepare(config)
  else nuxtConfigInject.replace(config, ['nuxt-dist/**/*', 'public/static/**/*'])
}

const webpack = require('webpack')

module.exports = {
  ssr: false,
  components: true,
  srcDir: 'public/',
  buildDir: 'nuxt-dist',
  build: {
    // cache: true,
    publicPath: config.publicUrl + '/_nuxt/',
    transpile: [/@koumoul/, 'easymde', 'marked'], // Necessary for "à la carte" import of vuetify components
    extend (config, { isServer, isDev, isClient }) {
      // Ignore all locale files of moment.js, those we want are loaded in plugins/moment.js
      config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))

      // Loader for sounds
      /* config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }) */
    },
  },
  loading: { color: '#1e88e5' }, // Customize the progress bar color
  plugins: [
    { src: '~plugins/global-components' },
    { src: '~plugins/ws', ssr: false },
    { src: '~plugins/session' },
    { src: '~plugins/moment' },
    { src: '~plugins/truncate' },
    { src: '~plugins/cell-values' },
    { src: '~plugins/display-bytes' },
    { src: '~plugins/logger', ssr: false },
    { src: '~plugins/analytics', ssr: false },
    { src: '~plugins/polyfill', ssr: false },
  ],
  router: {
    base: config.basePath,
  },
  modules: ['@digibytes/markdownit', '@nuxtjs/axios', 'cookie-universal-nuxt', ['nuxt-i18n', {
    seo: false,
    locales: [{ code: 'fr', iso: 'fr-FR' }, { code: 'en', iso: 'es-US' }],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: config.i18nMessages,
    },
  }]],
  axios: {
    browserBaseURL: config.publicUrl + '/',
    baseURL: `http://localhost:${config.port}/`,
  },
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/svg'],
  vuetify: {
    theme: {
      dark: config.theme.dark,
      themes: {
        light: config.theme.colors,
        dark: { ...config.theme.colors, ...config.theme.darkColors },
      },
    },
    defaultAssets: {
      font: {
        family: 'Nunito',
      },
    },
    lang: {
      locales: { fr },
      current: 'fr',
    },
  },
  env: {
    publicUrl: config.publicUrl,
    wsPublicUrl: config.wsPublicUrl,
    directoryUrl: config.directoryUrl,
    sessionDomain: config.sessionDomain,
    adminRole: config.adminRole,
    contribRole: config.contribRole,
    map: config.map,
    brand: config.brand,
    openapiViewerUrl: config.openapiViewerUrl,
    browserLogLevel: config.browserLogLevel,
    analytics: config.analytics,
    captureUrl: config.captureUrl,
    notifyUrl: config.notifyUrl,
    notifyWSUrl: config.notifyWSUrl,
    subscriptionUrl: config.subscriptionUrl,
    theme: config.theme,
    baseAppsCategories: config.baseAppsCategories,
    datasetUrlTemplate: config.datasetUrlTemplate,
    applicationUrlTemplate: config.applicationUrlTemplate,
    doc: config.doc,
    extraNavigationItems: config.extraNavigationItems,
    extraAdminNavigationItems: config.extraAdminNavigationItems,
    darkModeSwitch: config.darkModeSwitch,
    disableSharing: config.disableSharing,
    disableApplications: config.disableApplications,
    disableRemoteServices: config.disableRemoteServices,
  },
  head: {
    title: config.brand.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'application', name: 'application-name', content: config.brand.title },
      { hid: 'description', name: 'description', content: config.brand.description },
      { hid: 'robots', name: 'robots', content: 'noindex' },
    ],
    link: [],
    style: [],
  },
}

if (config.theme.cssUrl) {
  module.exports.head.link.push({ rel: 'stylesheet', href: config.theme.cssUrl })
}

if (config.theme.cssText) {
  module.exports.head.style.push({ type: 'text/css', cssText: config.theme.cssText })
}
