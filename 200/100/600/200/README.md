# 200 - Installation without Bower

Not using bower? No problem. 

Just download the dependencies, and include them yourself inside following ```index.html``` page. 

```
$ pwd
/home/$USER/git/app
$ vi index.html
```

```
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>App</title>
  <meta name="description" content="App">
  <meta name="author" content="me">
  <link href="bower_components/js-sequence-diagrams/dist/sequence-diagram-min.css" rel="stylesheet" />

</head>

<body>

  <script src="bower_components/bower-webfontloader/webfont.js" />
  <script src="bower_components/snap.svg/dist/snap.svg-min.js" />
  <script src="bower_components/underscore/underscore-min.js" />
  <script src="bower_components/js-sequence-diagrams/dist/sequence-diagram-min.js" />
</body>
</html>
```

If you plan to use the hand draw theme, don't forget to put the two fontfiles in your css folder: 

- /fonts/daniel/danielbd.woff and 
- /fonts/daniel/danielbd.woff2

Continue to [700 - Usage](https://github.com/vanHeemstraSystems/web-sequence-diagrams-headstart/blob/main/200/100/700/README.md)
