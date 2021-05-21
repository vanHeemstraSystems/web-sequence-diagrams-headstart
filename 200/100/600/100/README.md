# 100 - Installation with Bower (recommended)

## 100 - Install Node and NPM

See https://nodejs.org/en/download/

```$ sudo yum install nodejs```

Check with:

```
$ node --version
$ npm --version
```

## 200 - Install Bower

See also [https://bower.io/](https://bower.io/)

Bower is a command line utility. Install it with npm.

```$ npm install -g bower```

Bower requires [node, npm](http://nodejs.org/) and [git](http://git-scm.org/).

## 300 - Install js-sequence-diagrams Bower Package

Run ```bower install bramp/js-sequence-diagrams``` and include the scripts below:

```
<script src="{{ bower directory }}/bower-webfontloader/webfont.js" />
<script src="{{ bower directory }}/snap.svg/dist/snap.svg-min.js" />
<script src="{{ bower directory }}/underscore/underscore-min.js" />
<script src="{{ bower directory }}/js-sequence-diagrams/dist/sequence-diagram-min.js" />
```

also import the CSS if you plan to use the hand drawn theme:

```
<link href="{{ bower directory }}/js-sequence-diagrams/dist/sequence-diagram-min.css" rel="stylesheet" />
```
