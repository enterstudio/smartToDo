"use strict";

function TaskStore() {

  let todos = [
    {
      title: "Meeting with boss",
      complete: false
    }, {
      title: "appoinment with secretary",
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


  function editTask(task, id, history) {

    put(`api/tasks/${id}`, task).then((data) => {
      task = data;
      triggerListeners();
      history.pushState(null, '/tasks/' + data._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function deleteTask(id, history) {

    del(`api/tasks/${id}`).then((g) => {
      taskDeleted = 'true';
      triggerListeners();
      history.pushState(null, '/tasks');
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
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
    editTask: editTask,
    deleteTask: deleteTask,
  }
}

module.exports = new TaskStore();
