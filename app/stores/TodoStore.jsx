"use strict";
let {get, post, del, put} = require("./RestAPI_Helper.js");

function TodoStore() {

  let todos = [
      {
        title: "Meeting with boss",
        complete: false,
        category: "deadline",
        snippet: "Hello Guys Meet With Me",
        from: "mahfuz.aftab@hotmail.com",
        mail_date: "11 Jan, 2016"
      }, {
        title: "appoinment with secretary",
        complete: true,
        category: "reminders",
        snippet: "OMG Why dont you Remind Me",
        from: "Aquibur Rahman Khan",
        mail_date: "09 Mar, 2016"
      }, {
        title: "bill payment of doc",
        complete: true,
        category: "meeting",
        snippet: "Please Attain the Meeting",
        from: "mahfuz.aftab@hotmail.com",
        mail_date: "06 May, 2016"
      }, {
        title: "renew driving license ",
        complete: true,
        category: "registration",
        snippet: "Do the registration",
        from: "Aquibur Rahman Khan",
        mail_date: "01 Jul, 2016"
      }, {
        title: "register with hacksummit",
        complete: false,
        category: "deadline",
        snippet: "Do the Rregistration Now",
        from: "mahfuz.aftab@hotmail.com",
        mail_date: "22 Nov, 2016"
      }, {
        title: "deadline of smartToDo App",
        complete: false,
        category: "registration",
        snippet: "Dont miss the Deadline",
        from: "mahfuz.aftab@hotmail.com",
        mail_date: "12 Dec, 2016"
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
