/*
  @Author: Thiago R. M. Bitencourt
  Node.js app entry
*/
'use strict';
global.__base = __dirname + '/server/';

var express = require('express');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var http = require('http');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/json'}));

//Necessary headers to clients access.
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.all('*', function(req, res, next){
  res.response = function(error, responseStatus, message){
    var sendMessage = {message: message, status: responseStatus};

    if(error){
      sendMessage.error = error;
    }
    return res.status(responseStatus).send(sendMessage);
  }
  next();
});

app.use('/', express.static('public/src'));

var LoadRouter = require(__base + 'routes/loadRoutes');
app.use('/api', new LoadRouter());

var httpPort = 8080;
http.createServer(app).listen(httpPort, function(){
  console.log("HTTP server listening on port %s", httpPort);
});
