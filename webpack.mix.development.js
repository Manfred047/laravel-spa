const mix = require('laravel-mix')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

mix.setPublicPath('public/sandbox')

mix.webpackConfig({
  output: {
    publicPath: 'sandbox/',
    chunkFilename: 'chunks/[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!.gitkeep']
    })
  ]
})

mix.js('resources/js/app.js', 'js')
mix.sass('resources/sass/app.scss', 'css')
mix.copyDirectory('resources/js/statics', 'public/sandbox/statics')
