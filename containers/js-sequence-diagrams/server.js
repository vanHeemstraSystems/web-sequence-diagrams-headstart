'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static(path.join(__dirname, '/')));
app.use('/bower_components',  express.static(path.join(__dirname, '/bower_components')));

app.get('/', (req, res) => {
  // res.send('Hello World\r\n');
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
