var mongoose = require('mongoose');
var Todo = require('./../models/Todo.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports.list = function(req, res) {
  Todo.find({
    user: new ObjectId(req.params.user)
  }, function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var todo = new Todo(req.body);
  todo.user = req.user;
  todo.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.todo);
};


exports.delete = function(req, res) {
	var todo = req.todoByID;
	todo.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(todo);
		}
	});
};


module.exports.update = function(req, res) {
  var todo = req.todoByID;

  	todo = _.extend(todo, req.body);

  	todo.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(todo);
  		}
  	});
};

exports.todoByID = function(req, res, next, id) {
	Todo.findById(id).populate('user', 'todo').exec(function(err, todoByID) {
		if (err) return next(err);
		if (!todoByID) return next(new Error('Failed to load todoByID ' + id));
		req.todoByID = todoByID;
		next();
	});
};
