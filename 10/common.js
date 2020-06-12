"use strict";

// Ссылки на объекты DOM
var text = document.querySelector('.editor__text');

var btnSave = document.querySelector('.btn--save');
var btnEdit = document.querySelector('.btn--edit');
var btnCancel = document.querySelector('.btn--cancel');

text.innerHTML = localStorage.getItem('textContent');
// Функции для обработчиков событий
function editTextOn() {
  text.setAttribute('contenteditable', 'true');

  btnSave.removeAttribute('disabled');
  btnCancel.removeAttribute('disabled');

  btnEdit.setAttribute('disabled', '');
}

function editTextOff() {
  text.setAttribute('contenteditable', 'false');

  btnSave.setAttribute('disabled', '');
  btnCancel.setAttribute('disabled', '');

  btnEdit.removeAttribute('disabled');
}

function saveEditableText() {
  localStorage.setItem('textContent', text.textContent);

  editTextOff();
}

function cancelTextChange() {
  text.innerHTML = localStorage.getItem('textContent');

  editTextOff();
}

// Обработчики
btnEdit.addEventListener('click', editTextOn);

btnSave.addEventListener('click', saveEditableText);

btnCancel.addEventListener('click', cancelTextChange);