class Person {
	constructor(name, roll, debut) {
		this.name = name;
		this.position = roll;
		this.debut = debut;
	}
	getAge(age) {
		let date = new Date();
		let currentAge = date.getFullYear() - age;
		return currentAge;
	}
}

const player1 = new Person("Sakib Al Hasan", "All-Rounder", 2005);
const player2 = new Person("Mushfiqur Rahim", "Batsman", 2006);

console.log(
	`${player1.name} is ${player1.getAge(1980)} years old & he is a ${
		player1.position
	} & he play started in ${player1.debut}`
);
console.log(
	`${player2.name} is ${player2.getAge(1990)} years old & he is a ${
		player2.position
	} & he play started in ${player2.debut}`
);
