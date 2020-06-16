"use strict";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isItGoal(ballHeight, filedHeight, str) {
  let min = filedHeight / 2 - ballHeight;
  let max = filedHeight / 2 + ballHeight;

  let coordY = parseFloat(str) * 1.1;

  if (coordY >= min && coordY <= max) {
    alert('Goal!!');

    ball.animate({
      left: 0,
      top: 0
    }, 1000);
  }
}

var ball = $('.ball');
var field = $('.field');

ball.on('click', function () {
  let fieldWidth = field.width();
  let fieldHeight = field.height();

  let ballWidth = ball.width();
  let ballHeight = ball.height();

  let OX = fieldWidth - ballWidth;
  let OY = fieldHeight - ballHeight;

  if (ball.css('left') != '0px') {
    ball.animate({
      left: 0,
      top: getRandomIntInclusive(0, OY)
    }, 1000);
    
    isItGoal(ballHeight, fieldHeight, ball.css('top'));
  } else {
    ball.animate({
      left: OX,
      top: getRandomIntInclusive(0, OY)
    }, 1000);

    isItGoal(ballHeight, fieldHeight, ball.css('top'));
  }
});