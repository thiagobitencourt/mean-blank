/*
  @Author: Thiago R. M. Bitencourt
  Node.js app entry
*/
var express = require('express');
var http = require('http');

var app = express();
app.use('/', express.static('public/src'));

var httpPort = 8080;
http.createServer(app).listen(httpPort, function(){
  console.log("HTTP server listening on port %s", httpPort);
});
