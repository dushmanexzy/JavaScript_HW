function User(firstName, lastName, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDate;
}

function UserList(user) {
  this.users = [];

  this.addUser = function(user) {
    this.users.push(user);
  }

  this.getAllUsers = function() {
    this.users.forEach(function(item, i) {
      var fullUserRegInfo = ['User' + (i + 1)];
      console.log(fullUserRegInfo);
      for (var key in item) {
        fullUserRegInfo.push(key + ': ' + item[key]);
      }
      console.log(fullUserRegInfo.join(', '));
    });
  }
}

var users = new UserList();

function regNewUser() {
  var newUser = prompt('Введите ваше имя и фамилию', 'одной строкой, через пробел');

  if (newUser === null) {
    users.getAllUsers();
    return;
  } else if (newUser.trim() == '') {
    alert('Введена пустая строка. Повторите ввод');
    return regNewUser();
  } else if (newUser.trim().split(' ').length != 2) {
    alert('Некорректно введены данные. Пожалуйста повторите ввод');
    return regNewUser();
  } else {
    var userInfo = newUser.trim().split(' ');

    var date = printDayInfo();
    var user = new User(userInfo[0], userInfo[1].trim(), date);

    users.addUser(user);

    return regNewUser();
  }
}

regNewUser();
