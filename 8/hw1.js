// Проверка кода от пользователя в строгом режиме

var userCode = prompt('Введите свой код:');

function tryUserCode(str) {
  "use strict";

  try {
    console.log(eval(str));
  } catch (e) {
    console.log('Ошибка:', e.message);
  } finally {
    if (str === null || str == '') {
      alert('Код не найден!')
    } else {
      alert('Ваш код обработан!');
    }
  }
}

tryUserCode(userCode);
