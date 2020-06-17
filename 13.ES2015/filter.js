"use strict";

// Ввод типа данных от пользователя
var type = prompt("Введите тип данных для отбора");

function filterByType(type) {
    var args = Array.from(arguments);
    var dataList = args.slice(1, args.length);
    var filteredData = [];

    if (type === null || type == '') {
        console.log('Информация о типе данных не получена');
        return;
    } else {
        type = type.toLowerCase();

        dataList.forEach((item) => {
            if (typeof item == type) {
                filteredData.push(item);
            }
        });

        return console.log(filteredData);
    }
}

filterByType(type, 1, 2, 'a', 'b', true, false);