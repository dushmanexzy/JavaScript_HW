"use strict";

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
  // this.getAllUsers = function() {
  //   let list = document.createElement('ol');
  //   list.className = 'usersList';
  //
  //   this.users.forEach(function(item, i) {
  //     let fullUserRegInfo = [];
  //     for (let key in obj) {
  //       fullUserRegInfo.push(key + ': ' + obj[key]);
  //     }
  //
  //     let listEl = document.createElement('li');
  //     listEl.className = 'usersList-item';
  //
  //     let usersListEl = document.getElementsByClassName('usersList-item');
  //     console.log(usersListEl);
  //     console.log(fullUserRegInfo);
  //     usersListEl.textContent = fullUserRegInfo.join(', ');
  //   });
  // }
};

function regNewUser() {
  let fullName = prompt('Введите ваши имя и фамилию через пробел', 'Андрей Дворцов');

  if (fullName === null) {
    usersList.getAllUsers();
    return;
  } else if (fullName.trim() == '') {
    return regNewUser();
  } else {
    let userInfo = fullName.trim().split(' ');
    let user = new User(userInfo[0], userInfo[1], printDayInfo());

    usersList.usersAdd(user);

    return regNewUser();
  }
}

let usersList = new UserList();

regNewUser();
