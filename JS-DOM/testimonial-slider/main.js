
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")
const thumb = document.querySelector(".thumb")
const desc = document.querySelector(".desc")
const name = document.querySelector(".name")

const items = [
    {
        thumb: "./img/testimonial-1.png",
        description: "description 01",
        name: "Uzzal Hossain"
    },
    {
        thumb: "./img/testimonial-2.png",
        description: "description 02",
        name: "Riya Hossain"
    },
    {
        thumb: "./img/testimonial-3.png",
        description: "description 03",
        name: "Ridwan Hossain"
    }
]

let count = 0

thumb.src = items[count].thumb
desc.textContent = items[count].description
name.textContent = items[count].name

nextBtn.addEventListener("click", function() {
    count++

    if(count >= items.length) {
        count = 0
        thumb.src = items[count].thumb
        desc.textContent = items[count].description
        name.textContent = items[count].name
    } else {
        thumb.src = items[count].thumb
        desc.textContent = items[count].description
        name.textContent = items[count].name
    }
})


prevBtn.addEventListener("click", function() {
    count--

    if(count < 0) {
        count = items.length - 1
        thumb.src = items[count].thumb
        desc.textContent = items[count].description
        name.textContent = items[count].name
    } else {
        thumb.src = items[count].thumb
        desc.textContent = items[count].description
        name.textContent = items[count].name
    }
})