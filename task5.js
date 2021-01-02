// Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя).

const getPowerOfTree = (n) => {
 let count = 0;
 while (n % 3 == 0) {
    n /= 3;
    count++;
 }
 return n === 1 ? count : -1;
}

const num = +prompt('Enter number: ');
const pow = getPowerOfTree(num);

if (pow > 0) {
 console.log(`3^${pow} = ${num}`)
} else {
 console.log(`${num} is not power of three`)
}