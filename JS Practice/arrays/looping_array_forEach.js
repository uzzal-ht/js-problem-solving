const movements = [250, 600, 150, -540, 350, -240, -120, 320, 170]

// for of loop
for(const [i, mov] of movements.entries()) {
    if(mov > 0) {
        console.log(`Movement ${i + 1} : You deposit ${mov}`);
    } else {
        console.log(`Movement ${i + 1} : You withdraw ${Math.abs(mov)}`);
    }
}

console.log("--------- separator ---------");

// forEach loop
movements.forEach((mov, i) => {
    /* if(mov > 0) {
        console.log(`Movement ${i + 1} : You deposit ${mov}`);
    } else {
        console.log(`Movement ${i + 1} : You withdraw ${Math.abs(mov)}`);
    } */
    console.log(`Movement ${i + 1} : You ${mov > 0 ? 'Deposit' : 'Withdraw'} ${Math.abs(mov)}`);
})

console.log("--------- separator ---------");









// map with short circuit
const result = movements.map((mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? 'Deposit' : 'Withdraw'} ${Math.abs(mov)}`)

console.log(result);