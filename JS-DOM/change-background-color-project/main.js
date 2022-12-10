
const btn = document.querySelector(".btn")
const body = document.querySelector("body")

body.style.backgroundColor = "violet"

const colors = ["red", "green", "blue", "yellow"]

btn.addEventListener("click", function() {
    const random = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[random]
})