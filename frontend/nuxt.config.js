import { config, merge } from '../nuxt.config'

export default merge({
  srcDir: 'frontend/',

  buildDir: '.nuxt-frontend',

  head: {
    title: 'nuxt.local',
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

  generate: {
    dir: 'dist-frontend'
  }
}, config)
