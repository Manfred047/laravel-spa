const mix = require('laravel-mix')

mix.setPublicPath('public/sandbox')

mix.js('resources/js/app.js', 'js')
mix.sass('resources/sass/app.scss', 'css')