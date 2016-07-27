var express = require('express');

var router;
var BlankRoute = function(router){
	this.router = router;
	setBlankRoutes();
	return;
}

var setBlankRoutes = function(){

	var _blank = "/_blank";
	var _blankId = _blank + "/:id";

	this.router.get(_blank, function(req, res){
		var message = 'GET in ' + _blank + ' route';
		console.log(message);
		return res.response(null, 200, message);
	});

	this.router.get(_blankId, function(req, res){
		var message = 'GET in ' + _blankId + ' route';
		console.log(message);
		return res.response(null, 200, message);
	});

	this.router.post(_blank, function(req, res){
		var message = 'POST in ' + _blank + ' route';
		console.log(message);
		return res.response(null, 200, message);
	});

	this.router.put(_blankId, function(req, res){
		var message = 'PUT in ' + _blankId + ' route';
		console.log(message);
		return res.response(null, 200, message);
	});

	this.router.delete(_blankId, function(req, res){
		var message = 'DELETE in ' + _blankId + ' route';
		console.log(message);
		return res.response(null, 200, message);
	});
}

module.exports = BlankRoute;
