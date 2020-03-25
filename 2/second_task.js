var startingYear = +prompt('Введите начальный год', '');
var endYear = +prompt('Введите конечный год', '');

// Если первый введенный потльзователем год больше, чем второй, то условие меняет их местами
if (startingYear > endYear) {
  var tempVar = endYear;

  endYear = startingYear;
  startingYear = tempVar;
};

// цикл от начального года до конечного с условием-проверкой на "обычность" года
while (startingYear <= endYear) {
  if ((startingYear % 4 != 0) || (startingYear % 100 == 0 && startingYear % 400 != 0)) {
    startingYear++;
    continue;
  } else {
    console.log(startingYear);
    startingYear++;
  }
}
