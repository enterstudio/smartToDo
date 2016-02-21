"use strict";
let {get, post, del, put} = require("./RestAPI_Helper.js");

function UserStore() {
  let user = {},
    changeListeners = [];

  function triggerListeners() {
    changeListeners.forEach(function(listener) {
      listener();
    })
  };

  function fetchUser(code) {
    get("/auth/gmailToken?code="+code).then((data) => {
      user = data;
      console.log(data);
      //save logged in user details to localStorage
      localStorage.user = JSON.stringify(data);
      triggerListeners();
    });
  }

  function signup(){
    get('/auth/signup')
      .then((data) => {
        console.log(data);
        location.assign(data.url);
      })
      .catch((err) => {
          });
  }

  function signout(){
    localStorage.removeItem('user');
    triggerListeners();
  }

  function getUser() {
    return user;
  }

  function onChange(listener) {
    changeListeners.push(listener);
  }

  function removeChangeListener(listener) {
    var index = changeListeners.findIndex(i => i === listener);
    changeListeners.splice(index, 1);
  }

  return {
    fetchUser: fetchUser,
    getUser: getUser,
    signup: signup,
    signout: signout,
    removeChangeListener: removeChangeListener,
    onChange: onChange
  }
}

module.exports = new UserStore();
