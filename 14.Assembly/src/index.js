import button from './button';

document.body.appendChild(button());

const clickBtn = document.querySelector('button');
let count = 0;

clickBtn.classList.add('click-btn');

clickBtn.addEventListener('click', function (evt) {
  evt.preventDefault();

  count += 1;

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  let declaration = declOfNum(count, ['клик', 'клика', 'кликов']);

  clickBtn.innerHTML = `${count} ${declaration}!`;
});
