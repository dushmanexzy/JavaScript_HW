"use strict";

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}

let vasya = new User("Вася");

vasya.sayHi(); // Меня зовут: Вася

/*
vasya = {
   name: "Вася",
   sayHi: function() { ... }
}
*/
