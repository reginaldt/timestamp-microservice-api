'use strict';

var path = process.cwd();
var TimeHandler = require(path + '/app/controllers/timeHandler.server.js');
module.exports = function (app) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	var th = new TimeHandler();

	app.route('/')
		.get( function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/:time')
		.get(th.convertValue);	


};
