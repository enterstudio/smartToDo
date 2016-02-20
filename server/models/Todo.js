var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TodoSchema = {

  message_id: {
    type: String,
    trim: true
  },
  category:{
    type: String,
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  snippet: {
    type: String,
    trim: true
  },
  complete:{
    type: Boolean,
    default: false
  },
  subject:{
    type: String,
    trim: true
  },
  from: {
    type: String,
    trim: true
  },
  historyId: {
    type: Number
  },
  thread_id: {
    type: String,
    trim: true
  },
  mail_date: {
    type: Date
  },
  mail_link: {
    type: String
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
}

var Todo = mongoose.model('Todo', TodoSchema, 'todos');
module.exports = Todo;
