
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")

const imgTag = document.querySelector(".slider-inner img")

const items = ["./img/slide1.jpg", "./img/slide2.jpg", "./img/slide3.jpg", "./img/slide4.jpg"]

let count = 0
nextBtn.addEventListener("click", function() {
    count++
    if(count >= items.length) {
        count = 0
        imgTag.src = items[count]
    } else {
        imgTag.src = items[count]
    }
})

prevBtn.addEventListener("click", function() {
    count--
    if(count < 0) {
        count = items.length - 1
        imgTag.src = items[count]
    } else {
        imgTag.src = items[count]
    }
})