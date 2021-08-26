import webpack from 'webpack'
import { config, merge } from '../nuxt.config'
import LoaderPlugin from './loader.plugin'

export default merge({
  ssr: false,

  srcDir: 'backend/',

  buildDir: '.nuxt-backend',

  build: {
    extend (config, { isDev }) {
      if (!isDev) {
        config.output.filename = '[hash].js'
        config.output.chunkFilename = '[hash].js'
        config.optimization.splitChunks.cacheGroups.default = false
        config.optimization.runtimeChunk = false

        config.plugins.push(
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
          })
        )

        config.plugins.push(new LoaderPlugin())
      }
    },
    splitChunks: {
      layouts: false,
      pages: false,
      commons: false
    }
  },

  generate: {
    dir: 'dist-backend',
    exclude: [/^(?!.*index)(.+)$/g]
  }
}, config)
