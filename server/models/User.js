'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

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

var User = mongoose.model('User', UserSchema, 'users');
module.exports = User;
