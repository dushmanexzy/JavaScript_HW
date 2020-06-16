"use strict";

let user = new Object(); // синтаксис "конструктор объекта"
let user = {
  name: 'John',
  age: 30,
  isAdmin: true,
}; // {} - синтаксис "литерал объекта"

for (let key in user) {
  alert(key);
  alert(user[key])
}

user.isAdmin = true;
delete user.age;

function makeUser(name, age) {
  return {
    name, // name: name,
    age,  // age: age,
  }
}

// // HOMEWORK

// // 1 exercise
// let user = {};
//
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// // 2 exercise
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// // 3 exersise
// const user = {
//   name: "John"
// };
//
// // это будет работать?
// user.name = "Pete"; // YES

// // 4 exercise
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
//
// function sumSalaries(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// }

// // 5 exercise
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// }
//
// console.log(multiplyNumeric(menu));
