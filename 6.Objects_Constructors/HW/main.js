"use strict";
let bodyEl = document.getElementById('body');
let listEl = document.getElementsByClassName('usersList');

function User(firstName, lastName, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDate;
};

function UserList(obj) {
  this.users = [];
  this.usersAdd = function(obj) {
    this.users.push(obj);
  };
  this.getAllUsers = function() {
    for (let key in this.users) {
      let fullUserRegInfo = ['User'];
      fullUserRegInfo.push(+key + 1 + ':');

      let obj = this.users[key];
      for (let prop in obj) {
        fullUserRegInfo.push(obj[prop]);
      };

      let listItemEl = document.createElement('li');
      listItemEl.textContent = fullUserRegInfo.join(' ') + ';';
      listEl[0].appendChild(listItemEl);
    };
  };
};

function regNewUser() {
  let fullName = prompt('Введите ваши имя и фамилию через пробел', 'Андрей Дворцов');

  // проверка на нажатие пользователем "отмена"
  if (fullName === null) {
    usersList.getAllUsers();
    return;
  } 
  // проверка на пустой ввод или ввод пробелов
  else if (fullName.trim() == '') {
    return regNewUser();
  } else {
    let userInfo = fullName.trim().split(' ');
    let user = new User(userInfo[0], userInfo[1], printDayInfo());

    // проверка на дублирование пользователя
    let users = usersList.users;
    for (let i = 0; i < users.length; i++) {
      console.log(userInfo[0]);
      console.log(users[i].firstName);
      if (users[i].firstName == userInfo[0] && users[i].lastName == userInfo[1]) {
        alert('User already registred');
      } else {
        usersList.usersAdd(user);
      };
    }
    return regNewUser();
  };
};

let usersList = new UserList();
console.log(usersList);
regNewUser();
