import './button.css';
import button from './button';

const BODY = document.querySelector('body');

BODY.appendChild(button());
BODY.appendChild(button());

function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function makeCounter() {
  let currentCount = 1;

  return function () {
    return currentCount++;
  };
}

let buttons = document.querySelectorAll('button');
let clicker = function (e) {
  let count = this.counter();
  let declaration = declOfNum(count, ['клик', 'клика', 'кликов']);

  this.innerText = `${count} ${declaration}!`;
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].counter = makeCounter();
  buttons[i].addEventListener('click', function (e) {
    clicker.call(this);
  });
}