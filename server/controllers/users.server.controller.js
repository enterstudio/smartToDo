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
	htmlToText = require('html-to-text'),
	Todo = require('./../models/Todo.js');

	var natural = require('natural'),
	  classifier = new natural.BayesClassifier();
	var OAuth2 = google.auth.OAuth2;
	var oauth2Client = new OAuth2("936284847251-bj0uqov666e6a95p16stn172ld2im9dv.apps.googleusercontent.com", "jfNxtaEeLaOKdCnq_GY4LAwF", "http://localhost/hello");

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
						 user.save(function(err,data){
							 if (err) {
						 			return res.status(400).send({
						 				message: errorHandler.getErrorMessage(err)
						 			});
						 		} else {
									//fetch emails, decode, send array to frontend
									getFirstEmails(oauth2Client, res, data);

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
					email.message_id = response.id;
					email.subject = extractField(response, "Subject");
					email.mail_date = extractField(response, "Date");
					email.from = extractField(response, "From");
					email.historyId = response.historyId;
					email.thread_id = response.threadId;
					email.snippet = response.snippet;
					email.title = email.subject;
					email.user = user;
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
					email.category = classifier.classify(email.subject + " " + email.content);
					saveToDo(email);
					console.log(email.category);
					console.log(email.subject);
				});
			 }
			 			setTimeout(function(){
							res.json(user);
						}, 3000);

		 }
	});
}

var extractField = function(json, fieldName) {
  return json.payload.headers.filter(function(header) {
    return header.name === fieldName;
  })[0].value;
};
function saveToDo(email){
	var todo = new Todo(email);
	todo.user = email.user;
	todo.save(function(err, data) {
		if (err) {
			return res.status(400).send({

					message: "Save Not successful"
				});
		} else {
			console.log(data);
		}
	});
}
function extractContent(s) {
  return htmlToText.fromString(s, {ignoreHref:true, ignoreImage: true});
};


  //classifier.addDocument(['', 'gold'], 'meeting');
  classifier.addDocument('A credit or debit card thats in your account has expired. If you like tokeep using it for your account, update its expiration date.', 'reminders');
  classifier.addDocument('ready for delvery.You may now collect it from the delivery counter', 'reminders');
  classifier.addDocument('The work week has ended, and your weekly timelog is available for review.', 'reminders');
  classifier.addDocument('pay your internet bill. Internet service will expire by the end of the month.Three days left.','reminders');
  classifier.addDocument('thanks for all !  lets test sometime this week', 'meeting');
  classifier.addDocument('Submission of Poster Proposals - deadline. For the review process, an abstract of 300 words should be submitted by Friday', 'deadline');
  classifier.addDocument('register for an event. Registration Regulation: For poster presentation at the Conference and inclusion of the poster extended abstract in the Proceedings, at least one registration per poster is required by 8 April 2016.', 'registration');

  classifier.addDocument('arrange a meeting. I spoke too soon. How about Tuesday at 3:00 pm?', 'meeting');
  classifier.addDocument('Invitation.Join video call', 'meeting');
  classifier.addDocument('Your credit card payment is due. To make a payment, visit Online Banking, or pay directly from your Capital One Mobile App.', 'reminders');
  classifier.addDocument('Abstract Submission Deadline. This is a quick reminder for the AHFE 2016 International Conference abstract and paper proposal submission extended deadline. The conference will be held at Walt Disney.The extended deadline is approaching quickly, please submit as soon as possible!', 'deadline');
  classifier.addDocument('You are invited to Ubiquity Dev Summit. We are excited to announce that we are opening registration for the first Ubiquity Dev Summit and would love to have you there as our guest. The event will take place at The Strand Theater in San Francisco, CA on January 11-12, 2016.', 'registration');
  classifier.addDocument('Career Fair. I would like to invite you to register for the 2016 Carnegie Mellon University Career Fair in Silicon Valley! It is a job and internship fair for Carnegie Mellon University graduate students in tech disciplines seeking full-time or internship opportunities.', 'registration');
  classifier.addDocument('lets have a conference call to regroup, tomorrow? I can call you earlier let me try 7 or 7:30 our time  = 9 or 9:30 your time', 'meeting');
  classifier.addDocument('prepare a presentation for the meeting.This workshop is designed to explore the unique challenges being faced.','meeting')
classifier.addDocument('introduction and meeting. lets debate certain issues and problems, and to take decisions.','meeting');
//classifier.addDocument(['',''],'');
classifier.addDocument('Board meeting: The directors have decided to meet','meeting');
classifier.addDocument('workshop on react. An introductory workshop on react.js will take place at techdojo.Please register by end of the week.','registration');
classifier.addDocument('programming assignment submission.Submit the programming assignment for the data course by 17th january','deadline');

classifier.addDocument('your credit card has expired. Please recharge the card','reminders');
classifier.addDocument('credit card date expiration, renew the card','reminders');
classifier.addDocument('expiry of credit or debit card. Apply for a new card','reminders');
  classifier.train();
  classifier.save('./server/classifier.json', function(err, classifier) {
      // the classifier is saved to the classifier.json file!
  });
 console.log(classifier.getClassifications('expired'));
