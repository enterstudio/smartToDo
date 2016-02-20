'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	errorHandler = require('./errors.server.controller'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	google = require('googleapis'),
	atob = require('atob'),
	htmlToText = require('html-to-text');

	var OAuth2 = google.auth.OAuth2;
	var oauth2Client = new OAuth2("936284847251-bj0uqov666e6a95p16stn172ld2im9dv.apps.googleusercontent.com", "jfNxtaEeLaOKdCnq_GY4LAwF", "http://localhost:9001/hello");

	var scopes = [
	  'https://www.googleapis.com/auth/gmail.readonly',
	  'https://www.googleapis.com/auth/userinfo.profile'
	];
/**
 * Signup
 */
exports.signup = function(req, res) {
	var url = oauth2Client.generateAuthUrl({
	  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
	  scope: scopes // If you only need one scope you can pass it as string
	});
	res.json({'url':url});
};

exports.gmailToken = function(req, res){
	var code = req.query.code;
	var user = {};
	oauth2Client.getToken(code, function(err, tokens) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
	  if(!err) {
	    oauth2Client.setCredentials(tokens);
			var gmail = google.gmail('v1');
			gmail.users.getProfile({
				 auth: oauth2Client,
				 userId: 'me'
			 }, function(err, response) {
				 if (err) {
					 console.log('The API returned an error: ' + err);
					 return;
				 }

				 User.findOne({email: response.emailAddress}, function(err, user){
					 if(err){
						 console.log(err);
					 }else{
						 if(user == null){
							 console.log('new');
							 user = new User({ email: response.emailAddress, messagesTotal: response.messagesTotal, threadsTotal: response.threadsTotal, historyId: response.historyId, token: tokens });
						 }else{
							 console.log('old');
							 user.messagesTotal = response.messagesTotal;
							 user.threadsTotal = response.threadsTotal;
							 user.historyId = response.historyId;
						 }
						 user.save(function(err){
							 if (err) {
						 			return res.status(400).send({
						 				message: errorHandler.getErrorMessage(err)
						 			});
						 		} else {
									//fetch emails, decode, send array to frontend
									getFirstEmails(oauth2Client, res, user);

								}
						 });
					 }
				 });
			 });
		 }else{
			 res.json({'message':'error'});
		 }

		});
}

function getFirstEmails(auth, res, user){
	google.gmail('v1').users.messages.list({
		auth: auth,
		userId: 'me',
		maxResults: 10,
		labelIds: ['INBOX','IMPORTANT']
	}, function(err, response){
		if (err) {
			console.log('The API returned an error: ' + err);
			return;
		}
		var messages = response.messages;
		  if (messages.length == 0) {
		 	 console.log('No labels found.');
		  } else {
				var email = {};
			 for (var i = 0; i < messages.length; i++) {
				 google.gmail('v1').users.messages.get({
			 		auth: auth,
			 		userId: 'me',
			 		id: messages[i].id
				}, function(err, response){
					var email = {};
					email.subject = extractField(response, "Subject");
					email.date = extractField(response, "Date");
					email.from = extractField(response, "From");
					email.historyId = response.historyId;
					var content = "";
					if(response.payload.parts && response.payload.parts.length > 0){
						var part = response.payload.parts.filter(function(part) {
							if(part.mimeType == 'text/html'){
								if(part.body){
									content= content + part.body.data;
								}
							}
						  return part.mimeType == 'text/html';
						});
					}else{
						content = response.payload.body.data;
					}
					if(content == ""){
						email.content = response.snippet;
					}else{
						email.content = extractContent(atob(content.replace(/-/g, '+').replace(/_/g, '/')));
					}
					console.log(email);
				});
			 }
			 					res.json(user);
		 }
	});
}

var extractField = function(json, fieldName) {
  return json.payload.headers.filter(function(header) {
    return header.name === fieldName;
  })[0].value;
};
function extractContent(s) {
  return htmlToText.fromString(s, {ignoreHref:true, ignoreImage: true});
};
