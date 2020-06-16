var firstNum = prompt('Введите первое число', '');
var secondNum = prompt('Введите второе число', '');

if (firstNum === '' || secondNum === '') {
  alert('Вы ввели одно или оба числа пустыми');
} else if (isNaN(+firstNum) || isNaN(+secondNum)) {
  alert('Вы ввели словами одно или оба числа');
} else if (firstNum && secondNum) {
  firstNum = +firstNum;
  secondNum = +secondNum;

  if (firstNum > secondNum) {
    alert('Первое число больше второго');
  } else if (firstNum < secondNum) {
    alert('Второе число больше первого');
  } else {
    alert('Числа равны');
  }
} else {
  alert('Вы отменили ввод одного или обоих чисел');
}
