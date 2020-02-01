<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  @if(env('APP_ENV') === 'production')
    <link type="text/css" href="{{ mix('css/app.css', 'production') }}" rel="stylesheet">
  @else
    <link type="text/css" href="{{ mix('css/app.css', 'sandbox') }}" rel="stylesheet">
  @endif

  <title>Laravel web SPA</title>
</head>
  <body>
    <div id="app"></div>
    @if(env('APP_ENV') === 'production')
      <script type="text/javascript" charset="UTF-8" src="{{ mix('js/app.js', 'production') }}"></script>
    @else
      <script type="text/javascript" charset="UTF-8" src="{{ mix('js/app.js', 'sandbox') }}"></script>
      @endif
  </body>
</html>
