"use strict";

var numbers = [10, 313, 41, 20, 1, 4];

numbers.sort(function (x, y) {
  return x - y;
});

console.log(numbers);

document.querySelector(".header-text").style.color = "blue";
