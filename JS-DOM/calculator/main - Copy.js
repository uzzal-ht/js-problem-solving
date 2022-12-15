
const display = document.querySelector(".calc-display")
const buttons = document.querySelectorAll(".calc-btn")

buttons.forEach(btn => {
	btn.addEventListener("click", function(e) {
		const digit = e.target.dataset.num
		
		if(digit) {
			display.innerHTML += +digit
		}

		if(e.target.dataset.equal) {
			const displayData = display.textContent

			console.log(typeof  displayData);
		}
	})
})




