
class LoaderPlugin {
  apply (compiler) {
    compiler.hooks.emit.tapAsync(
      'LoaderPlugin',
      (compilation, callback) => {
        const publicPath = compilation.outputOptions.publicPath

        const assets = {
          js: [],
          css: [],
          config: {}
        }

        const chunks = compilation.getStats().toJson().chunks

        for (const chunk of chunks) {
          // console.log(chunk.id, chunk.names, chunk.siblings)

          if (!chunk.initial) {
            continue
          }

          const jsFiles = chunk.files.filter(function (file) {
            return /.js($|\?)/.test(file)
          }).map(file => publicPath + file)

          assets.js = assets.js.concat(jsFiles)

          const cssFiles = chunk.files.filter(function (file) {
            return /.css($|\?)/.test(file)
          }).map(file => publicPath + file)

          assets.js = assets.js.concat(cssFiles)
        }

        compilation.assets['loader.js'] = {
          source () {
            return `
window.simlaWeb = {
  css: ${JSON.stringify(assets.css)},
  js: ${JSON.stringify(assets.js)},
  config: ${JSON.stringify(assets.config)}
}`
          }
        }

        callback()
      }
    )
  }
}

module.exports = LoaderPlugin
