'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const port =  process.env.PORT || 3000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTION');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Start server
server.listen(port, process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined, function() {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

const items = require('./issues.json');

app.get('/api/lists', function(req, res) {
  res.status(200).json(items);
});

app.get('/api/lists/:id', function(req, res) {
  let id = req.params.id;
  let list = items.find(item => item.id === id );
  res.status(200).json(list);
});

app.post('/api/lists', function(req, res) {
  items.push(req.body);
  res.status(200).json();
});

app.put('/api/lists/:id', function(req, res) {
  let id = req.params.id;
  let issue = req.body;
  // console.log(id);
  items[id - 11] = issue;
  res.status(200).json();
});

app.delete('/api/lists/:id', function(req, res) {
  let id = req.params.id;
  items.splice(id, 1);
  res.status(200).json();
});

exports = module.exports = app;