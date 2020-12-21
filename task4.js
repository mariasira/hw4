// Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

let nDigitNumber = Number(prompt("Please enter a number"));
let n = nDigitNumber;
for (let i = 2; i < n; i++){
    if (n % i == 0) {
        alert(`${n} is not a prime number`);
    } else {
        alert(`${n} is a prime number`);
        break;
        }
    }

