const mix = require('laravel-mix')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

mix.setPublicPath('public/production')

mix.webpackConfig({
  output: {
    publicPath: 'production/',
    chunkFilename: 'chunks/[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})

mix.js('resources/js/app.js', 'js')
mix.sass('resources/sass/app.scss', 'css')
mix.version()
