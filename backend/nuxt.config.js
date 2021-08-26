import webpack from 'webpack'
import { config, merge } from '../nuxt.config'
import LoaderPlugin from './loader.plugin'

export default merge({
  ssr: false,

  srcDir: 'backend/',

  buildDir: '.nuxt-backend',

  build: {
    extend (config, { isClient }) {
      //https://gist.github.com/rvanzon/6028e884f6735c41125fb2d140143102
      config.output.chunkFilename = '[hash].js'

      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1
        })
      )

      config.plugins.push(new LoaderPlugin())
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
