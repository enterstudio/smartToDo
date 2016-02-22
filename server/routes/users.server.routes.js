'use strict';

/**
 * Module dependencies.
 */

module.exports = function(app) {
	// User Routes
	var users = require('./../controllers/users.server.controller');

	app.route('/auth/gmailToken').get(users.gmailToken);

	// Setting up the users authentication api
	app.route('/auth/signup').get(users.signup);

	app.route('/api/demo').get(users.demoToDoApi);

};
