<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Phone Book</title>
    <link rel="stylesheet" href="{!! asset('css/app.css') !!}">
</head>
<body>

<div id="app">

<div class="container">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
</div>

</div>

<script src="{!! asset('js/app.js') !!}"></script>
</body>
</html>