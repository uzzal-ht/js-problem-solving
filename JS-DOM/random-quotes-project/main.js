
const generateButton = document.querySelector(".btn")
const quoteText = document.querySelector(".quote-text")
const author = document.querySelector(".author")

const apiEndPoint = "https://dummyjson.com/quotes"

async function fetchData(apiEndPoint) {
    const response = await fetch(apiEndPoint)
    const quotes = await response.json()

    generateButton.addEventListener("click", function() {
        let randomNumber = Math.floor(Math.random() * quotes.quotes.length)
        quoteText.textContent = quotes.quotes[randomNumber].quote
        author.textContent = quotes.quotes[randomNumber].author
    })
}
fetchData(apiEndPoint)