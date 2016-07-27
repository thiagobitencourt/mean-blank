var express = require('express');

var BlankRoute = require(__base + 'routes/blankRoute');

var LoadRoutes = function(){

	router = express.Router();

	new BlankRoute(router);
	return router;
}

module.exports = LoadRoutes;
