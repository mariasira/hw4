// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа которое ввёл пользователь.

let nDigitNumber = Number(prompt("Please enter a number"));
let n = nDigitNumber;
let i = '';
let result = i ** 2;
for(let i = 1; i ** 2 < n; i++) {
    const squareNumber = Math.pow(i, 2);

    console.log(`${squareNumber }`)
}