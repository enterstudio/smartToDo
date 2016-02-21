module.exports = function(app){

 var todos = require('./../controllers/todos.server.controller.js');

  app.route('/api/todos/:user')
  	.get(todos.list);

  app.route('/todos/api/todos/:id')
	.get(todos.read)
  .put(todos.update)
  .delete(todos.delete);

  app.param('id', todos.todoByID);

}
