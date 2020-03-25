"use strict";

let users = [
  {
    name: 'Andrey',
    login: 'exzy',
    password: 'Qwerty123'
  },

  {
    name: 'Victor',
    login: 'viviNo',
    password: 'pro100Parol'
  }
];

function autorization(users) {
  let userLogin = prompt('Введите логин', '');
  let userPass = prompt('Введите пароль', '');

  for (var i = 0; i < users.length; i++) {
    if (userLogin == users[i].login && userPass == users[i].password) {
      alert('Здравствуйте, ' + users[i].name + '!');
      return;
    } else if (i != users.length - 1) {
      continue;
    } else {
      alert('Ошибка авторизации!');
      return;
    }
  }
}

autorization(users);
