
const display = document.querySelector(".calc-display")
const buttons = document.querySelectorAll(".calc-btn")

buttons.forEach(btn => {
	btn.addEventListener("click", function() {
		// const digit = this.dataset.num
		const digit = this.value
		console.dir(this)
		if(digit !== '=' && digit !== 'clr' && digit !== 'del') {
			display.innerText += digit
		}

		/* if(digit === '=') {
			const res = display.textContent

			let arr = res.split("+").map(el => Number(el))

			if(res.includes("+")) {
				let sum = arr.reduce((a,b) => a+b)
				display.innerText = sum
			}
		} */
		if(digit === '=') {
			const res = display.textContent
			const result = 0;
			for (let i = 0; i < res.length; i++) {
				console.log(res[i])
				// if(Number(res[i]) === number){

				// }
			}
			// let arr = res.split("")
			// console.log(arr)

			// let firstVal = "";
			// let secondVal = "";

			// for (let i = 0; i < arr.length; i++) {
			// 	if(arr[i] === "+"){
			// 		if(arr[i] === "+"){

			// 		}
			// 		break
			// 	} else {
			// 		firstVal = firstVal+arr[i]
			// 	}
			// }
			// console.log(firstVal);
			// console.log(secondVal)

			/* if(res.includes("+")) {
				let sum = arr.reduce((a,b) => a+b)
				display.innerText = sum
			} */
		}
	})
})
