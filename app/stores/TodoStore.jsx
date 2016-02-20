"use strict";

function TaskStore() {

  let todos = [
    {
      title: "Meeting with boss",
      complete: false
    }, {
      title: "appoinment with secretary kjhdbfjhsdafjhksah dfkjhsadfkjhskdfhksjhdfkjshd fkjhsadfkjhsakdfhksadjh kjsbd fkjhsakdjfhb",
      complete: false
    }, {
      title: "bill payment of doc",
      complete: false
    }, {
      title: "renew driving license ",
      complete: false
    }, {
      title: "register with hacksummit",
      complete: false
    }, {
      title: "deadline of smartToDo App",
      complete: false
    }
  ],
    changeListeners = [];


function getAllTodos(){
  return todos;
}

  function triggerListeners() {
    changeListeners.forEach(function(listener) {
      listener();
    })
  };


  function editTodo(todo, value) {
    var index = todos.indexOf(todo);
      todos[index].title = value;
      triggerListeners();
  }

  function deleteTodo(todo) {
    var index = todos.indexOf(todo);
      todos.splice(index,1);
      triggerListeners();
  }


  function onChange(listener) {
    changeListeners.push(listener);
  }

  function removeChangeListener(listener) {
    var index = changeListeners.findIndex(i => i === listener);
    changeListeners.splice(index, 1);
  }


  return {
    onChange: onChange,
    getAllTodos: getAllTodos,
    removeChangeListener: removeChangeListener,
    editTodo: editTodo,
    deleteTodo: deleteTodo
  }
}

module.exports = new TaskStore();
