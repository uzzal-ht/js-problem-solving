'use strict';

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
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


const displayMovements = function(acc, sort = false) {

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
    containerMovements.innerHTML = "";

    
    movs.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const date = new Date(acc.movementsDates[i])
        let year = date.getFullYear();
        let month = `${date.getMonth() + 1}`.padStart(2, 0);
        let day = `${date.getDate()}`.padStart(2, 0);
        
        const displayDate = `${day}/${month}/${year}`

        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                <div class="movements__date">${displayDate}</div>
                <div class="movements__value">$${Math.abs(mov)}</div>
            </div>
        `
        containerMovements.insertAdjacentHTML("afterbegin", html)
    });
}

// user name generator
const userNameGenerator = function(users) {
    users.forEach(user => {
        user.username = user.owner.split(' ').map(e => e[0]).join('').toLowerCase()
    })
}
userNameGenerator(accounts)


// total balance after movements
const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0)
    labelBalance.textContent = `$${acc.balance.toFixed(2)}`;
}

// all calculation summary
const calcDisplaySummary = function(acc) {
    // total deposit
    const deposit = acc.movements.filter(mov => mov > 0).reduce((acc, curr) => acc + curr, 0);
    labelSumIn.textContent = `$${deposit.toFixed(2)}`;

    // total withdrawal
    const withdrawal = acc.movements.filter(mov => mov < 0).reduce((acc, curr) => acc + curr, 0);
    labelSumOut.textContent = `$${Math.abs(withdrawal).toFixed(2)}`;

    // total interest
    const interest = acc.movements.filter(mov => mov > 0).map(el => el * acc.interestRate / 100).filter(el => el >= 1).reduce((acc, curr) => acc + curr, 0)
    labelSumInterest.textContent = `$${interest.toFixed(2)}`
}

const updateUI = function(acc) {
    displayMovements(acc)
    calcDisplayBalance(acc)
    calcDisplaySummary(acc)
}

// user login 
let currentAccount;
btnLogin.addEventListener("click", function(e) {
    e.preventDefault()
    
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

    if(currentAccount?.pin === Number(inputLoginPin.value)) {
        inputLoginUsername.value = inputLoginPin.value = ''
        labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`

        containerApp.style.opacity = 100;

        const date = new Date()
        let year = date.getFullYear();
        let month = `${date.getMonth() + 1}`.padStart(2, 0);
        let day = `${date.getDate()}`.padStart(2, 0);
        let hours = `${date.getHours()}`.padStart(2, 0);
        let minutes = `${date.getMinutes()}`.padStart(2, 0);
        
        labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`
        
        updateUI(currentAccount)
    }
})


// fund transfer
btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)

    inputTransferTo.value = inputTransferAmount.value = ''

    if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc.username !== currentAccount.username) {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // create transfer date
        currentAccount.movementsDates.push(new Date().toISOString())
        receiverAcc.movementsDates.push(new Date().toISOString())
    }
    updateUI(currentAccount)
})


// request loan
btnLoan.addEventListener('click', function(e) {
    e.preventDefault()

    const amount = Number(inputLoanAmount.value)

    inputLoanAmount.value = ''
    
    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        currentAccount.movements.push(amount)

        // create loan date
        currentAccount.movementsDates.push(new Date().toISOString())
    }

    updateUI(currentAccount)
})


// account close
btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    
    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username)

        accounts.splice(index, 1)
        
        containerApp.style.opacity = 0;
    }
})


// sort
let sorted = false;
btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted)
    sorted = !sorted;
})


