'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessTheNum(guessedNum) {
  var num = prompt('Введи число!');

  if (num === null) {
    return;
  } else if ( isNaN(+num) || !num || !(num.trim()) ) {
    return guessTheNum(guessedNum);
  } else if (num < guessedNum) {
    alert('Больше!');
    return guessTheNum(guessedNum);
  } else if (num > guessedNum) {
    alert('Меньше!');
    return guessTheNum(guessedNum);
  } else {
    alert('Правильно!');
    return;
  }
}

var inventedNum = getRandomIntInclusive(0, 20);
alert('отгадай число');
guessTheNum(inventedNum);
