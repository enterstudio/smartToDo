'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Todo = require('./Todo.js');
/**
 * User Schema
 */
var UserSchema = new Schema({

    email: {
      type: String,
      trim: true
    },

    messagesTotal: {
      type: Number
    },

    threadsTotal: {
      type: Number
    },

    historyId: {
      type: Number
    },

    token: {},
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});
UserSchema.post('remove', function(doc){
  Todo.remove({user:doc._id}).exec();
});
var User = mongoose.model('User', UserSchema, 'users');
module.exports = User;
