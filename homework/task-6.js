let input;
const numbers = [];
let total = 0;
do {
    input = prompt("введите число");
    if (input !== null) {
    numbers.push(+input);
    console.log(numbers);
    }
  } while (input !== null);
  for (const number of numbers) {
        total += number;
  }
  alert(`Сумма чисел равна ${total}`);