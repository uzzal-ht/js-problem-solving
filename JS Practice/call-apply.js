const bimanBangladesh = {
    airline: "Biman Bangladesh",
    iataCode: "BG",
    bookings: [],

    book(name, flightNo) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNo}`);
        this.bookings.push({flight: `${this.iataCode}-${flightNo}`, name});
    }

}

bimanBangladesh.book("Uzzal", 50)
bimanBangladesh.book("Rubel", 40)
console.log(bimanBangladesh);


const unitedBangladesh  = {
    airline: "United Airways",
    iataCode: "4H",
    bookings: []
}

const book = bimanBangladesh.book;

// call method
book.call(unitedBangladesh, "Rahim", 70)
console.log(unitedBangladesh);


book.call(bimanBangladesh, "Mofiz", 90)
console.log(bimanBangladesh);


const airBangla  = {
    airline: "Air Bangla",
    iataCode: "B9",
    bookings: []
}

book.call(airBangla, "Jhonson", 105)
console.log(airBangla);

// apply method
const flightData = ["Erik", 9006]

book.apply(airBangla, flightData)
console.log(airBangla);

book.call(airBangla, ...flightData)



// bind method
const newBimanBangladesh = book.bind(bimanBangladesh)
newBimanBangladesh("Fojol", 45)