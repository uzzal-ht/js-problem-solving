const currencies = new Map([
    ["USD", "American Dollar"],
    ["EUR", "Euro"],
    ["Rupee", "Indian Rupee"],
    ["TK", "Bangladeshi Taka"],
])

// map
/* currencies.forEach((element, index) => {
    console.log(`${index} : ${element}`);
}) */

// set
const currenciesTwo = new Set(["USD","EUR", "Rupee", "TK", "EUR", "USD", "TK"])

currenciesTwo.forEach((element, index) => {
    console.log(`${index} : ${element}`);
})

// console.log([...currenciesTwo]);
