'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovement = function(movements) {
    movements.forEach((mov, i) => {
        const type = mov > 0 ? "deposit" : "withdrawal"
        let html = `
            <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">$${Math.abs(mov)}</div>
            </div>
        `
        containerMovements.insertAdjacentHTML("beforeend", html)
    });

    const calcDeposit = movements.filter(mov => mov > 0).reduce((acc, curr) => acc + curr, 0);
    labelSumIn.textContent = `$${calcDeposit.toFixed(2)}`;

    const calcWithdrawal = movements.filter(mov => mov < 0).reduce((acc, curr) => acc + curr, 0)
    labelSumOut.textContent = `$${Math.abs(calcWithdrawal).toFixed(2)}`

    const calcInterest = movements.filter(mov => mov > 0).map(mov => mov * 1.2 / 100).filter(int => int >= 1).reduce((acc, curr) => acc + curr, 0);
    labelSumInterest.textContent = `$${calcInterest.toFixed(2)}`


    // get total movements
    const totalMovements = movements.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    labelBalance.innerHTML = `$${totalMovements}`
}
// displayMovement(account1.movements);



// user name generator
const userNameGenerator = function(user) {
    user.forEach(name => {
        name.username = name.owner.split(" ").map(x => x[0]).join("").toLowerCase()
    })
}
userNameGenerator(accounts)

// get current date
var today = new Date().toLocaleDateString();
labelDate.innerHTML = today;



let currentAccount;

btnLogin.addEventListener("click", function(e) {
    e.preventDefault();

    currentAccount = accounts.find((acc) => {
        return acc.username === inputLoginUsername.value;
    })

    if(currentAccount?.pin === Number(inputLoginPin.value)) {
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
        containerApp.style.opacity = 100;
        inputLoginUsername.value = inputLoginPin.value = ''

        displayMovement(currentAccount.movements);
    }
})


















/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];*/

/////////////////////////////////////////////////



/* const checkDogs = function(dogsJulia, dogsKate) {
    let arrayOne = dogsJulia.slice()
    arrayOne.splice(0, 1)
    arrayOne.splice(-2)
    const dogs = [...arrayOne, ...dogsKate]

    dogs.forEach((dog, i) => {
        if(dog >= 3) {
            console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i+1} is an adult is still a puppy`);
        }
    })
}

checkDogs([5,6,8,12,2,1,10], [2,5,4,9,7]) */




// get total value
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
let total = movements.filter(el => el > 0).reduce((acc, curr) => acc+curr)

console.log(total); */


// challenge no 2
/* const calcAverageHumanAge = function(ages) {
    const humanAge = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4 )
    const adults = humanAge.filter(age => age >= 18)
    const avgAge = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;

    return avgAge.toFixed(2)
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1);
console.log(avg2); */

// challenge no 3 with arrow function
/* const calcAverageHumanAge = (ages) => {
    const humanAge = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4).filter((age) => age >= 18).reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

    return humanAge;
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1.toFixed(2));
console.log(avg2.toFixed(2)); */


/* const mathUser = accounts.find(el => el.username === "stw");
console.log(mathUser); */

