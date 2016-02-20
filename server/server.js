'use strict';
require("babel/register");

var mongoose = require ('mongoose');
var express = require ('express');

var uri = 'mongodb://localhost/mailtodo';
var db = mongoose.connect(uri,function(){
});

var app = require('./express.js')(db);

app.listen(app.get('port'), function(){
})

module.exports = app;
