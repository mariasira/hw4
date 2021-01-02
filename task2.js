// Один доллар стоит 30 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов.

for (let i = 10; i <= 100; i += 10) {
    //console.log(i.toLocaleString('en-US', { style: 'currency', currency: 'USD' })) 

    const oneUSDInUAH = 30;
    const multiplicationResult = i * oneUSDInUAH;
    console.log(`${i} USD = ${multiplicationResult} UAH`);
}