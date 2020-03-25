"use strict";

let months = {
  0: 'января',
  1: 'февраля',
  2: 'марта',
  3: 'апреля',
  4: 'мая',
  5: 'июня',
  6: 'июля',
  7: 'августа',
  8: 'сентября',
  9: 'октября',
  10: 'ноября',
  11: 'декабря'
};

let weekdays = {
  0: 'воскресенье',
  1: 'понедельник',
  2: 'вторник',
  3: 'среда',
  4: 'четверг',
  5: 'пятница',
  6: 'суббота'
};

function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function getDayHours(hours) {
  return hours + " " + declOfNum(hours, ['час', 'часа', 'часов']);
}

function getDayMinutes(minutes) {
  return minutes + " " + declOfNum(minutes, ['минута', 'минуты', 'минут']);
}

function getDaySeconds(seconds) {
  return seconds + " " + declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
}

function printDayInfo() {
  let date = new Date();
  let dayNumber = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear() + ' года,';
  let weekday = weekdays[date.getDay()] + ',';
  let todayInfo = [];

  todayInfo.push(dayNumber);
  todayInfo.push(month);
  todayInfo.push(year);
  todayInfo.push(weekday);

  let hours = getDayHours(date.getHours());
  todayInfo.push(hours);

  let minutes = getDayMinutes(date.getMinutes());
  todayInfo.push(minutes);

  let seconds = getDaySeconds(date.getSeconds());
  todayInfo.push(seconds);

  return todayInfo.join(' ');
}
