"use strict";

function getLangValue(str) {
  let selectedIndex = document.querySelector(str).options.selectedIndex;
  let selectedValue = document.querySelector(str).options[selectedIndex].value;

  return selectedValue;
}

function rebootLangValue(str) {
  let defaultIndex = 0;
  let defaultValue = document.querySelector(str).options[defaultIndex].value;
  document.querySelector(str).value = defaultValue;
}

var btn = document.querySelector('button');

btn.addEventListener('click', function (ev) {
  ev.preventDefault();

  var req = new XMLHttpRequest();

  var API_KEY = 'trnsl.1.1.20181031T062132Z.f849174da6229ec7.4bf744eaa43c4c4f626373d5ef7f0fecbe71bee6';
  var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
  var word = document.querySelector('#word').value;

  url += '?key=' + API_KEY;
  url += '&text=' + word;
  url += '&lang=' + getLangValue('#startLang') + '-' + getLangValue('#endLang');

  req.onload = function () {
    var response = JSON.parse(req.response);

    if (response.code !== 200) {
      alert('Произошла ошибка при получении ответа от сервера:\n\n' + response.message);
      return;
    }

    if (response.text.length === 0) {
      alert('К сожалению, перевод для данного слова не найден');
      return;
    }

    alert(response.text);

    document.querySelector('#word').value = '';
    rebootLangValue('#startLang');
    rebootLangValue('#endLang');
  };

  if (word != '') {
    req.open('get', url);
    req.send();
  } else {
    alert('Вы ничего не ввели!');
  }
});
