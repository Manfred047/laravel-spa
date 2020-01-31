<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link type="text/css" href="{{ mix('css/app.css') }}" rel="stylesheet">

  <title>Laravel web SPA</title>
</head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" charset="UTF-8" src="{{ mix('js/app.js') }}"></script>
  </body>
</html>
