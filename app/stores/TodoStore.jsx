"use strict";

function TaskStore() {

  let todos = [
    {
      title: "Meeting with boss",
      complete: false,
      category: "Deadline"
    }, {
      title: "appoinment with secretary kjhdbfjhsdafjhksah dfkjhsadfkjhskdfhksjhdfkjshd fkjhsadfkjhsakdfhksadjh kjsbd fkjhsakdjfhb",
      complete: true,
      category: "Reminder"
    }, {
      title: "bill payment of doc",
      complete: true,
      category: "Meeting"
    }, {
      title: "renew driving license ",
      complete: true,
      category: "Register"
    }, {
      title: "register with hacksummit",
      complete: false,
      category: "Deadline"
    }, {
      title: "deadline of smartToDo App",
      complete: false,
      category: "Register"
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

function toggleComplete(todo){
var index = todos.indexOf(todo);
if(todos[index].complete == true ){
  todos[index].complete = false;
  triggerListeners();
}
else{
  todos[index].complete = true;
  triggerListeners();
}
}

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
    toggleComplete: toggleComplete,
    removeChangeListener: removeChangeListener,
    editTodo: editTodo,
    deleteTodo: deleteTodo
  }
}

module.exports = new TaskStore();
