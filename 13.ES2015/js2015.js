"use strict";

// Ввод типа данных от пользователя
// const
const type = prompt('Введите тип данных для отбора');

// Функция с неограниченным количеством параметров после основного type через rest
function filterByType(type, ...rest) {
  // let
  let filteredData = [];

  if (type === null || type == '') {
    console.log('Информация о типе данных не получена');
    return;
  } else {
    type = type.toLowerCase();

    // Стрелочная функция
    rest.forEach(item => {  
      if (typeof item == type) {
        filteredData.push(item);
      }
    });

    // Разбиение массива на отдельные части для вывода через spread
    return console.log(...filteredData);
  }
}

filterByType(type, 1, 2, 'a', 'b', true, false);