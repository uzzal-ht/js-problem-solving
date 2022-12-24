
"use strict"

const bannerSection = document.querySelector(".banner")
const inner = document.querySelector(".inner")

function isInViewport (elem) {
    let current = elem.getBoundingClientRect()
    return (
        current.top >= 0 && current.left >= 0 && current.right <= (window.innerWidth || document.documentElement.clientWidth) && current.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

document.addEventListener("scroll", () => {
    if(isInViewport(bannerSection)) {
        inner.classList.add("active")
    } else {
        inner.classList.remove("active")
    }
})