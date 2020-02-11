"use strict";

let input;
const numbers = [];
let total = 0;
do {
  input = prompt("введите число", "");
  if (input !== null) {
    numbers.push(+input);
  }
} while (input !== null);

if (numbers.length !== 0) {
  for (const number of numbers) {
    total += number;
  }
}
alert(`Сумма чисел равна ${total}`);