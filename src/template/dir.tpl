<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  <style>
    body {
      margin: 0;
    }
    a {
      margin: 10px 10px;
      display: inline-block;
    }
  </style>
</head>
<body>
{{#each files}}
    <a href="{{../dir}}/{{file}}">{{file}}</a>
{{/each}}
</body>
</html>
