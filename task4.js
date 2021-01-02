// Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).
const integerNumber = parseInt(prompt("Enter integer number"));
let result = true;
if (integerNumber < 2) {
    result = false;
}
    for (let i = 2; i < integerNumber; i++) {
        if (integerNumber % i == 0) {
            result = false;
            break;
        }
    }

if (result === true) {
	console.log(`${integerNumber} is a prime number`);
} else {
	console.log(`${integerNumber} is not a prime number`);
}

