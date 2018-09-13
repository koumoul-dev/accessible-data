module.exports = {
  port: 5600,
  publicUrl: 'http://localhost:5600',
  wsPublicUrl: 'ws://localhost:5600',
  directoryUrl: 'http://localhost:8080',
  openapiViewerUrl: 'https://koumoul.com/openapi-viewer/',
  dataDir: './data/' + (process.env.NODE_ENV || 'development'),
  pluginsDir: './plugins',
  mongoUrl: 'mongodb://localhost:27017/data-fair-' + (process.env.NODE_ENV || 'development'),
  map: {
    // A mapbox style to display geo data
    // style: 'https://free.tilehosting.com/styles/basic/style.json?key=o3lyi2a3gsPOuVB4ZgUv',
    style: 'https://koumoul.com/s/tileserver/styles/klokantech-basic/style.json',
    // The layer before which ou data layers will be inserted (empty to add layer on top of everything)
    beforeLayer: 'poi_label'
  },
  elasticsearch: {
    host: 'localhost:9200',
    defaultAnalyzer: 'french',
    maxBulkLines: 10000,
    maxBulkChars: 1000000
  },
  indicesPrefix: 'dataset-' + (process.env.NODE_ENV || 'development'),
  info: {
    termsOfService: 'https://koumoul.com/term-of-service',
    contact: {
      name: 'Koumoul',
      url: 'https://koumoul.com',
      email: 'support@koumoul.com'
    }
  },
  brand: {
    logo: null,
    title: 'DataFair',
    description: 'Find, Access, Interoperate, Reuse data on the Web'
  },
  defaultLimits: {
    // Maximum storage space per user or organization
    // -1 for unlimited storage
    totalStorage: -1,
    // Maximum storage space for 1 dataset
    datasetStorage: -1
  },
  workers: {
    concurrency: 2,
    pollingInterval: 1000
  },
  headers: {
    storedBytesLimit: 'X-TaxMan-RateLimit-Limit-StoreBytes',
    storedBytesRemaining: 'X-TaxMan-RateLimit-Remaining-StoreBytes'
  },
  nuxtBuild: {
    active: true,
    blocking: true
  },
  adminRole: 'admin',
  // A global default API key for backend to backend calls to remote services
  defaultRemoteKey: {
    in: 'header',
    name: 'x-apiKey',
    value: null
  },
  // secrets that can be used to configure global webhooks for example to update users and organizations
  secretKeys: {
    ownerNames: null
  },
  locks: {
    // in seconds
    ttl: 60
  },
  cache: {
    // set cache-control max-age for public GET endpoints
    publicMaxAge: 1000,
    // size of cache of vector tiles in mongodb (in mb)
    size: 1000
  },
  analytics: null, // use a tracking id for google analytics here
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en']
  },
  theme: {
    logo: null,
    dark: false,
    colors: {
      // standard vuetify colors
      primary: '#1E88E5', // blue.darken1
      secondary: '#42A5F5', // blue.lighten1,
      accent: '#FF9800', // orange.base
      error: 'FF5252', // red.accent2
      info: '#2196F3', // blue.base
      success: '#4CAF50', // green.base
      warning: '#E91E63' // pink.base
    },
    cssUrl: null,
    cssText: ''
  },
  browserLogLevel: 'error',
  licenses: [{
    title: 'Licence Ouverte / Open Licence',
    href: 'https://www.etalab.gouv.fr/licence-ouverte-open-licence'
  }, {
    title: 'Open Database License (ODbL)',
    href: 'https://spdx.org/licenses/ODbL-1.0.html#licenseText'
  }],
  applications: [{
    title: 'Infos parcelles (bêta)',
    href: 'https://koumoul.com/s/infos-parcelles/'
  }, {
    title: 'Infos localisations (bêta)',
    href: 'https://koumoul.com/s/infos-loc/'
  }, {
    title: 'Portail thématique (bêta)',
    href: 'https://koumoul.com/s/portail-thematique/'
  }, {
    title: 'Observatoire des entreprises (bêta)',
    href: 'https://koumoul.com/s/observatoire-entreprises/'
  }],
  remoteServices: [{
    title: 'Données Entreprises',
    href: 'https://koumoul.com/s/sirene/api-docs.json'
  }, {
    title: 'Géocoder',
    href: 'https://koumoul.com/s/geocoder/api/v1/api-docs.json'
  }, {
    title: 'Cadastre',
    href: 'https://koumoul.com/s/cadastre/api-docs.json'
  }, {
    title: 'Divisions administratives',
    href: 'https://koumoul.com/s/insee-mapping/api/v1/api-docs.json'
  }, {
    title: 'Service de données cartographiques',
    href: 'https://koumoul.com/s/tileserver/api/v1/api-docs.json'
  }],
  catalogs: [{
    title: 'Data.gouv.fr',
    href: 'https://www.data.gouv.fr'
  }]
}
