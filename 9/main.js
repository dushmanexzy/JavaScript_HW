"use strict";

// Ссылки на объекты
var dealsList = document.querySelector('.deals__list');
var addDealBtn = document.querySelector('button');

// Функции
function addDeal() {
  let dealsItem = document.createElement('li');
  dealsItem.classList.add('deals__item');

  let dealValue = document.querySelector('input').value;

  if (dealValue != '') {
    dealsItem.innerHTML = dealValue;
    dealsList.append(dealsItem);

    document.querySelector('input').value = ''; // правка для очистки поля ввода после добавления дела
  } else {
    alert("Название задачи отсутствует!");
  }
}

function changeDealStatus(ev) {
  if (ev.target.tagName == "LI") {
    ev.target.classList.toggle('checked');
  }
}

// Обработчики
addDealBtn.addEventListener('click', addDeal);
dealsList.addEventListener('click', changeDealStatus);