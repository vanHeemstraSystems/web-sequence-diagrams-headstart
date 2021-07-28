'use strict';

const express = require('express');
const path = require('path');
const db = require('./database.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static(path.join(__dirname, '/')));
app.use('/bower_components',  express.static(path.join(__dirname, '/bower_components')));

app.get('/', (req, res) => {
  // res.send('Hello World\r\n');
  res.redirect('/sequence_diagrams/1');
  //res.sendFile(__dirname + '/index.html');
});

app.get('/sequence_diagrams/:sequenceDiagramId', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
