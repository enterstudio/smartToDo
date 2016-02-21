"use strict";
let {get, post, del, put} = require("./RestAPI_Helper.js");

function TodoStore() {

  let todos = [
      {
        title: "Meeting with boss",
        complete: false,
        category: "deadline"
      }, {
        title: "appoinment with secretary kjhdbfjhsdafjhksah dfkjhsadfkjhskdfhksjhdfkjshd fkjhsadfkjhsakdfhksadjh kjsbd fkjhsakdjfhb",
        complete: true,
        category: "reminders"
      }, {
        title: "bill payment of doc",
        complete: true,
        category: "meeting"
      }, {
        title: "renew driving license ",
        complete: true,
        category: "registration"
      }, {
        title: "register with hacksummit",
        complete: false,
        category: "deadline"
      }, {
        title: "deadline of smartToDo App",
        complete: false,
        category: "registration"
      }
    ],

    changeListeners = [];

    function fetchToDos() {
      var user = (typeof window !== "undefined") ? JSON.parse(localStorage.user) : undefined;
      get("/api/todos/"+user._id).then((data) => {
        todos = data;
        console.log(data);
        triggerListeners();
      });
    }
  function getAllTodos() {
    return todos;
  }

  function triggerListeners() {
    changeListeners.forEach(function(listener) {
      listener();
    })
  };

  function clearCompleted(todo) {
    for (var i = todos.length - 1; i >= 0; i--) {
      if (todos[i].complete) {
        todos.splice(i, 1);
      }
    }
    triggerListeners();
  }

  function toggleComplete(todo) {
    var index = todos.indexOf(todo);
    if (todos[index].complete == true) {
      todos[index].complete = false;
      triggerListeners();
    } else {
      todos[index].complete = true;
      triggerListeners();
    }
    put(`/todos/api/todos/${todos[index]._id}`, todos[index]).then((data) => {
      todos[index] = data;
      triggerListeners();
    }).catch((err) => {
        console.log(err);
    });
  }

  function editTodo(todo, value) {
    var index = todos.indexOf(todo);
    todos[index].title = value;
    triggerListeners();
    put(`/todos/api/todos/${todos[index]._id}`, todos[index]).then((data) => {
      todos[index] = data;
      triggerListeners();
    }).catch((err) => {
        console.log(err);
    });
  }

  function editTodoCategory(todo, value) {
    var index = todos.indexOf(todo);
    todos[index].category = value;
    triggerListeners();
    put(`/todos/api/todos/${todos[index]._id}`, todos[index]).then((data) => {
      todos[index] = data;
      triggerListeners();
    }).catch((err) => {
        console.log(err);
    });

  }

  function deleteTodo(todo) {
    var index = todos.indexOf(todo);
    todos.splice(index, 1);
    triggerListeners();
    del(`/todos/api/todos/${todo._id}`).then((data) => {
      console.log('deleted');
    }).catch((err) => {
      console.log(err);
    });
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
    editTodoCategory:editTodoCategory,
    fetchToDos: fetchToDos,
    getAllTodos: getAllTodos,
    toggleComplete: toggleComplete,
    clearCompleted: clearCompleted,
    removeChangeListener: removeChangeListener,
    editTodo: editTodo,
    deleteTodo: deleteTodo
  }
}

module.exports = new TodoStore();
