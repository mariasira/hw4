// Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя).

let base = 3;
let powerEntered = Number(prompt("Please enter a number"));
for (let exponent = 1; exponent < powerEntered; exponent++) {
    let threeToPower = base ** exponent;
    if (powerEntered == threeToPower) {
        console.log(`${powerEntered} = 3 ^ ${exponent}`);
    }
    else {
        console.log(`${powerEntered} could not be achieved as 3 ^ ${exponent}`);
    }
}
