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

	var _BlanckController = require(__base + 'controllers/blankController');

	this.router.get(_blank, function(req, res){
		var message = 'GET in ' + _blank + ' route';
		console.log(message);
		// return res.response(null, 200, message);
		_BlanckController.retrieveAll(function(err, blanks) {
			if(err) {
				return res.status(400).send(err);
			}
			return res.status(200).send(blanks);
		});
	});

	this.router.get(_blankId, function(req, res){
		var message = 'GET in ' + _blankId + ' route';
		console.log(message);
		// return res.response(null, 200, message);
		_BlanckController.retrieveOne(req.params.id, function(err, blank) {
			if(err) {
				return res.status(400).send(err);
			}
			return res.status(200).send(blank);
		});
	});

	this.router.post(_blank, function(req, res){
		var message = 'POST in ' + _blank + ' route';
		console.log(message);
		// return res.response(null, 200, message);
		_BlanckController.save(req.body, function(err, blank) {
			if(err) return res.send(err);
			return res.send(blank);
		});
	});

	this.router.put(_blankId, function(req, res){
		var message = 'PUT in ' + _blankId + ' route';
		console.log(message);
		// return res.response(null, 200, message);
		_BlanckController.update(req.params.id, req.body, function(err, blank) {
			if(err) return res.send(err);
			return res.send(blank);
		});
	});

	this.router.delete(_blankId, function(req, res){
		var message = 'DELETE in ' + _blankId + ' route';
		console.log(message);
		// return res.response(null, 200, message);
		_BlanckController.remove(req.params.id, function(err, blank) {
			if(err) return res.send(err);
			return res.send(blank);
		});
	});
}

module.exports = BlankRoute;
