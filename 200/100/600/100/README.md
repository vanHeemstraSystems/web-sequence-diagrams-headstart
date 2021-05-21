# 100 - Installation with Bower (recommended)

## 100 - Install Node and NPM

See https://nodejs.org/en/download/

```$ sudo yum install nodejs```

Check with:

```
$ node --version
$ npm --version
```

## 200 - Install Git Client

See [How to install Git on CentOS 7](https://github.com/vanHeemstraSystems/how-to-install-git-on-centos-7)

## 300 - Install Bower

See also [https://bower.io/](https://bower.io/)

Bower is a command line utility. Install it with npm.

```$ sudo npm install -g bower```

Check with:

```$ bower --version```

Bower requires [node, npm](http://nodejs.org/) and [git](http://git-scm.org/).

## 400 - Install js-sequence-diagrams Bower Package

Create a new project (e.g. called "app") in your git workspace:

```
$ PROJECT_NAME="app"
$ mkdir $PROJECT_NAME
$ cd $PROJECT NAME
$ pwd
/home/$USER/git/app
```

Run ```bower install bramp/js-sequence-diagrams``` 

You will be promted as follows:

```
bower js-sequence-diagrams#*       not-cached https://github.com/bramp/js-sequence-diagrams.git#*
bower js-sequence-diagrams#*          resolve https://github.com/bramp/js-sequence-diagrams.git#*
bower js-sequence-diagrams#*         download https://github.com/bramp/js-sequence-diagrams/archive/v2.0.1.tar.gz
bower js-sequence-diagrams#*          extract archive.tar.gz
bower js-sequence-diagrams#*         resolved https://github.com/bramp/js-sequence-diagrams.git#2.0.1
bower lodash#4.17.x                not-cached https://github.com/lodash/lodash.git#4.17.x
bower lodash#4.17.x                   resolve https://github.com/lodash/lodash.git#4.17.x
bower underscore#1.8.x             not-cached https://github.com/jashkenas/underscore.git#1.8.x
bower underscore#1.8.x                resolve https://github.com/jashkenas/underscore.git#1.8.x
bower raphael#2.2.x                not-cached https://github.com/DmitryBaranovskiy/raphael.git#2.2.x
bower raphael#2.2.x                   resolve https://github.com/DmitryBaranovskiy/raphael.git#2.2.x
bower snap.svg#0.4.x               not-cached https://github.com/adobe-webplatform/Snap.svg.git#0.4.x
bower snap.svg#0.4.x                  resolve https://github.com/adobe-webplatform/Snap.svg.git#0.4.x
bower bower-webfontloader#~1.6.x   not-cached https://github.com/mdarse/bower-webfontloader.git#~1.6.x
bower bower-webfontloader#~1.6.x      resolve https://github.com/mdarse/bower-webfontloader.git#~1.6.x
bower underscore#1.8.x               download https://github.com/jashkenas/underscore/archive/1.8.3.tar.gz
bower snap.svg#0.4.x                 download https://github.com/adobe-webplatform/Snap.svg/archive/v0.4.1.tar.gz
bower lodash#4.17.x                  download https://github.com/lodash/lodash/archive/4.17.21.tar.gz
bower bower-webfontloader#~1.6.x     download https://github.com/mdarse/bower-webfontloader/archive/v1.6.6.tar.gz
bower raphael#2.2.x                  download https://github.com/DmitryBaranovskiy/raphael/archive/v2.2.8.tar.gz
bower underscore#1.8.x                extract archive.tar.gz
bower lodash#4.17.x                   extract archive.tar.gz
bower underscore#1.8.x               resolved https://github.com/jashkenas/underscore.git#1.8.3
bower bower-webfontloader#~1.6.x      extract archive.tar.gz
bower bower-webfontloader#~1.6.x     resolved https://github.com/mdarse/bower-webfontloader.git#1.6.6
bower raphael#2.2.x                   extract archive.tar.gz
bower snap.svg#0.4.x                  extract archive.tar.gz
bower raphael#2.2.x                  resolved https://github.com/DmitryBaranovskiy/raphael.git#2.2.8
bower eve-raphael#0.5.0            not-cached https://github.com/tomasAlabes/eve.git#0.5.0
bower eve-raphael#0.5.0               resolve https://github.com/tomasAlabes/eve.git#0.5.0
bower lodash#4.17.x                  resolved https://github.com/lodash/lodash.git#4.17.21
bower eve-raphael#0.5.0              download https://github.com/tomasAlabes/eve/archive/v0.5.0.tar.gz
bower snap.svg#0.4.x             invalid-meta for:/tmp/cloud_user/bower/26c353a33c542d326cfd5673132c4a40-8907-Lm1fr2/bower.json
bower snap.svg#0.4.x             invalid-meta The "name" is recommended to be lowercase, can contain digits, dots, dashes
bower snap.svg#0.4.x                 mismatch Version declared in the json (0.4.0) is different than the resolved one (0.4.1)
bower snap.svg#0.4.x                 resolved https://github.com/adobe-webplatform/Snap.svg.git#0.4.1
bower eve-raphael#0.5.0               extract archive.tar.gz
bower eve-raphael#0.5.0              resolved https://github.com/tomasAlabes/eve.git#0.5.0
bower js-sequence-diagrams#^2.0.1     install js-sequence-diagrams#2.0.1
bower underscore#1.8.x                install underscore#1.8.3
bower bower-webfontloader#~1.6.x      install bower-webfontloader#1.6.6
bower raphael#2.2.x                   install raphael#2.2.8
bower lodash#4.17.x                   install lodash#4.17.21
bower snap.svg#0.4.x                  install snap.svg#0.4.1
bower eve-raphael#0.5.0               install eve-raphael#0.5.0

js-sequence-diagrams#2.0.1 bower_components/js-sequence-diagrams
├── bower-webfontloader#1.6.6
├── lodash#4.17.21
├── raphael#2.2.8
├── snap.svg#0.4.1
└── underscore#1.8.3

underscore#1.8.3 bower_components/underscore

bower-webfontloader#1.6.6 bower_components/bower-webfontloader

raphael#2.2.8 bower_components/raphael
└── eve-raphael#0.5.0

lodash#4.17.21 bower_components/lodash

snap.svg#0.4.1 bower_components/snap.svg

eve-raphael#0.5.0 bower_components/eve-raphael
```

You should now have a directory called ```bower_components``` in the root of your ```app``` project:

```
$ pwd
/home/$USER/git/app
$ ls 
bower_components
```

Create an HTML page, called index.html

```
$ pwd
/home/$USER/git/app
$ touch index.html
$ vi index.html
```

Add the following content to the index.html:

```
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>App</title>
  <meta name="description" content="App">
  <meta name="author" content="me">

</head>

<body>

</body>
</html>
```

Include the scripts below inside the ```<body>...</body>``` section nearest to the closing tag ```</body>``` of the index.html:

```
<script src="bower_components/bower-webfontloader/webfont.js" />
<script src="bower_components/snap.svg/dist/snap.svg-min.js" />
<script src="bower_components/underscore/underscore-min.js" />
<script src="bower_components/js-sequence-diagrams/dist/sequence-diagram-min.js" />
```

Also import the CSS inside the ```<head>...</head>``` section of the index.html if you plan to use the hand drawn theme:

```
<link href="bower_components/js-sequence-diagrams/dist/sequence-diagram-min.css" rel="stylesheet" />
```

Your ```app/index.html``` should now resemble:

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

Continue to [700 - Usage](https://github.com/vanHeemstraSystems/web-sequence-diagrams-headstart/blob/main/200/100/700/README.md)
