import mergeWith from 'lodash/mergeWith'

export const config = {
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '../common/plugins/UiLibrary.js',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-svg-loader'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

export const merge = (target, source) => {
  return mergeWith(target, source)
}
