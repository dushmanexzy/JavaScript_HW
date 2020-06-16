(callee = function() {
  'use strict';
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var inventedNum = getRandomIntInclusive(0, 1000);
  var countAttempts = 10;

  return window.start = function() {
    if (countAttempts != 0) {
      countAttempts -= 1;

      var num = prompt('Введи число!');
    } else {
      let message = prompt('Ваши попытки исчерпаны! Начать заново?', 'Да или Нет');

      if (message == 'Да') {
        callee();
      } else {
        return;
      }
    }

    if (num === null) {
      alert('Ошибка ввода!');
      return;
    } else if ( isNaN(+num) || !num || !(num.trim()) ) {
      start();
    } else if (num < inventedNum) {
      alert('Больше!');
      start();
    } else if (num > inventedNum) {
      alert('Меньше!');
      start();
    } else {
      alert('Правильно!');
      return;
    }
  }
})();
