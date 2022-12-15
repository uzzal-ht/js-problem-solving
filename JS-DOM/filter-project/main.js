
const buttons = document.querySelectorAll(".btn")
const items = document.querySelectorAll(".col-lg-4")
const parent = document.querySelector(".item-wrapper .row")

/* buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        items.forEach((item) => {
            if(e.target.dataset.title !== item.dataset.category && e.target.dataset.title !== "all") {
                item.remove()
            } else {
                parent.append(item)
            }
        })
    })
}) */


buttons.forEach(button => {
    button.addEventListener("click", function(e){
        const target = e.target.dataset.title

        items.forEach(item => {
            if(target === "all") {
                item.style.display = "block"
            } else {
                if(item.classList.contains(target)) {
                    item.style.display = "block"
                } else {
                    item.style.display = "none"
                }
            }
        })
    })
})


const searchBox = document.querySelector(".search-field")

searchBox.addEventListener("keyup", function(e) {
    const searchKeyword = e.target.value.toLowerCase().trim()

    items.forEach(item => {
        if(item.textContent.toLowerCase().includes(searchKeyword)) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
})



