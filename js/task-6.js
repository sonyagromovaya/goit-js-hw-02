"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число!");
  numbers.push(input);
  const inputNaN = isNaN(input);
  if(inputNaN){
      alert('Было введено не число, попробуйте еще раз');
      continue;
  }
  for(let i = 0; numbers.length > i; i+= 1) {
        total += parseInt(numbers[i]);
        break;
}
console.log(`Общая сумма чисел равна ${total}`);

}while(input !== null)
// let input;
// const numbers = [];
// let total = 0;
// const totalAmount = function () {
//     while(input !== null) {
//         input = prompt('Введите значение');
//         if(input === null) {
//             console.log('Отменено пользователем!');
//             break
//         }
//         else if(isNaN(input)) {
//             console.log(`Введено ${input}`);
//             continue;
//         };
//         numbers.push(input)
//     };
//     for(let i = 0; numbers.length > i; i++) {
//         total += parseInt(numbers[i]);
//     }
//     return console.log(total);
// };
// totalAmount();