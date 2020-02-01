<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  @php $path = ((env('APP_ENV', 'production') === 'production') ? 'production' : 'sandbox'); @endphp

  <link rel="icon" type="image/png" href="{{asset("{$path}/statics/app-logo-128x128.png")}}">
  <link rel="icon" type="image/png" sizes="16x16" href="{{asset("{$path}/statics/icons/favicon-16x16.png")}}">
  <link rel="icon" type="image/png" sizes="32x32" href="{{asset("{$path}/statics/icons/favicon-32x32.png")}}">
  <link rel="icon" type="image/png" sizes="96x96" href="{{asset("{$path}/statics/icons/favicon-96x96.png")}}">
  <link rel="icon" type="image/ico" href="{{asset("{$path}/statics/icons/favicon.ico")}}">
  <link type="text/css" href="{{ mix('css/app.css', $path) }}" rel="stylesheet">

  <title>Laravel web SPA</title>
</head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" charset="UTF-8">
      const AUTH_TOKEN_NAME = '@php echo env('AUTH_TOKEN_NAME', 'spa-oauth') @endphp'
      const AUTH_COOKIE_NAME = '@php echo env('AUTH_COOKIE_NAME', 'spa-lang') @endphp'
      const LANG_COOKIE_NAME = '@php echo env('LANG_COOKIE_NAME', 'spa-lang') @endphp'
      const API_URL = '@php echo env('API_URL', 'http://127.0.0.1:8000/api/v1') @endphp'
    </script>
    <script type="text/javascript" charset="UTF-8" src="{{ mix('js/app.js', $path) }}"></script>
  </body>
</html>
