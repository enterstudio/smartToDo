'use strict';
require("babel/register");

var mongoose = require ('mongoose');
var express = require ('express');

var uri = 'mongodb://localhost/mailtodo';
var db = mongoose.connect(uri,function(){
  /*Drop db for dev for testing now*/
  mongoose.connection.db.dropDatabase();

});

require('./models/User.js');
require('./models/Todo.js');

var app = require('./express.js')(db);

app.listen(app.get('port'), function(){
})

module.exports = app;
