// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа которое ввёл пользователь.

const integerNumber = parseInt(prompt("Enter integer number"));

for (let i = 1; i ** 2 < integerNumber; i++) {
    console.log(`${integerNumber} is less than ${i} squared`)
}