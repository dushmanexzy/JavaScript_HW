var myName = prompt('Как вас зовут?');
var mySurname = prompt('Ваша фамилия?');
var myBirthYear = prompt('Введите ваш год рождения');

var date = new Date();
var currentYear = date.getFullYear();
var ageUser = currentYear - myBirthYear;
var fullNameUser = mySurname + ' ' + myName;

if (ageUser < 20) {
  alert('Привет, ' + fullNameUser + '!');
} else if (ageUser >= 20 && ageUser < 40) {
  alert('Добрый день, ' + fullNameUser + '!');
} else {
  alert('Здравствуйте, ' + fullNameUser + '!');
}
