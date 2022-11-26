async function one() {
	console.log("This is first console");
}
one();

function two() {
	setTimeout(() => {
		console.log("This is second console");
	}, 2000);
}

function three() {
	setTimeout(() => {
		console.log("This is third console");
	}, 1000);
}

function four() {
	setTimeout(() => {
		console.log("This is fourth console");
	}, 500);
}
