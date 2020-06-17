"use strict";


// Функции

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function whoScoredAGoal() {
  if (ball.css('left') != '0px') {
    goalsCountLeft += 1;
    score.text(`${goalsCountLeft}:${goalsCountRight}`);
  } else {
    goalsCountRight += 1;
    score.text(`${goalsCountLeft}:${goalsCountRight}`);
  }
}

function getWinner() {
  if (goalsCountLeft == 3) {
    alert('Team Left is win!!! Congratulations!');
    play();
  } else if (goalsCountRight == 3) {
    alert('Team Right is win!!! Congratulations!');
    play();
  }
}

function play() {
  let goPlay = confirm('Do you want to play again?');

  if (goPlay) {
    goalsCountLeft = 0;
    goalsCountRight = 0;
    score.text(`${goalsCountLeft}:${goalsCountRight}`);
  }
}

function isItGoal(ballHeight, fieldHeight, str) {
  let min = fieldHeight / 2 - ballHeight;
  let max = fieldHeight / 2 + ballHeight;

  let coordY = parseFloat(str) * 1.1;

  if (coordY >= min && coordY <= max) {
    alert('Goal!!');

    whoScoredAGoal();
    getWinner();

    ball.animate({
      left: 0,
      top: 0
    }, 1000);
  }

}


// Переменные

const ball = $('.ball');
const field = $('.field');
const score = $('.score');

const fieldWidth = field.width();
const fieldHeight = field.height();

const ballWidth = ball.width();
const ballHeight = ball.height();

let OX = fieldWidth - ballWidth;
let OY = fieldHeight - ballHeight;

let goalsCountLeft = 0;
let goalsCountRight = 0;

score.text(`${goalsCountLeft}:${goalsCountRight}`);

// Обработчик

ball.on('click', function () {
  if (ball.css('left') != '0px') {
    ball.animate({
      left: 0,
      top: getRandomIntInclusive(0, OY)
    }, 1000, function () {
      isItGoal(ballHeight, fieldHeight, ball.css('top'));
    });
  } else {
    ball.animate({
      left: OX,
      top: getRandomIntInclusive(0, OY)
    }, 1000, function () {
      isItGoal(ballHeight, fieldHeight, ball.css('top'));
    });
  }
});
