class Person {
	constructor(name, roll, debut) {
		this.name = name;
		this.roll = roll;
		this.debut = debut;
	}
	getAge(birthYear) {
		let date = new Date();
		let currentAge = date.getFullYear() - birthYear;
		return currentAge;
	}
}

const player1 = new Person("Sakib Al Hasan", "All-Rounder", 2005);
// const player2 = new Person("Mushfiqur Rahim", "Batsman", 2006);

/* console.log(
	`${player1.name} is ${player1.getAge(1980)} years old & he is a ${
		player1.roll
	} & he play started in ${player1.debut}`
); */
/* console.log(
	`${player2.name} is ${player2.getAge(1990)} years old & he is a ${
		player2.roll
	} & he play started in ${player2.debut}`
); */

class NewPerson extends Person {
	constructor(name, age, roll) {
		super(name, roll);
		this.age = age;
	}


	newAge(birthYear) {
	 	return super.getAge(birthYear);
	}
}

const person1 = new NewPerson("Mr X", 30, "Coding");

console.log(
	`I'm ${person1.name}, I'm ${person1.age} years old & I like ${person1.roll}`
);

console.log(person1.getAge(1990));
