/* const jane = {
    firstName: 'Rejaul',
};
const tarzan = {
    firstName: 'Boss',
};

function describe(test) {
    return test.firstName;
} */

/* console.log(describe(jane));
console.log(describe(tarzan)); */

class FullName {
    
    constructor(fName, lName){
        this.fName = fName
        this.lName = lName
        console.log(this);
    }

    testName(){
        return `${this.fName} ${this.lName}`
    }
}

const res = new FullName('rejaul', 'karim')

console.log(res.testName());