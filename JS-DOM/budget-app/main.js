"use strict"

const budgetForm = document.querySelector(".budget-form")
const budgetInput = document.querySelector(".budget-field")

const totalBudget = document.querySelector(".total-budget")
const totalExpense = document.querySelector(".total-expense")
const totalBalance = document.querySelector(".balance")

const expenseForm = document.querySelector(".expense-form")
const expenseNameInput = document.querySelector(".expense-name-field")
const expenseAmountInput = document.querySelector(".expense-amount-field")

const expenseList = document.querySelector(".expense-list")


expenseForm.addEventListener("submit", function(e){
    e.preventDefault()

    class ExpenseItem {
        constructor(title, amount){
            this.title = title
            this.amount = amount
        }
    }

    const item = new ExpenseItem(expenseNameInput.value, Number(expenseAmountInput.value))

    const html = `
        <div class="expense-item">
            <h5 class="expense-name">${item.title}</h5>
            <h5 class="expense-value">${item.amount}</h5>
            <button class="remove-btn">Remove</button>
        </div>
    `
    expenseList.innerHTML += html

    expenseNameInput.value = expenseAmountInput.value = ""

    
    let totalExp = 0

    const allItems = document.querySelectorAll(".expense-item")

    allItems.forEach(el => {
        const test = el.querySelector(".expense-value").textContent
        totalExp += Number(test)
    })

    allItems.forEach(el => {
        el.querySelector(".remove-btn").addEventListener("click", function(e) {
            const target = e.target
    
            if(target.closest(".expense-item")){
                el.remove()
            } 
            calculateExpense()
        })
    })

    calculateExpense(totalExp)
})

let totalAmount = 0

budgetForm.addEventListener("submit", function(e) {
    e.preventDefault()
    
    totalAmount = budgetInput.value
    totalBudget.innerHTML = totalAmount
    budgetInput.value = ""
    calculateExpense()

})

function calculateExpense(totalExpenseAmount = 0) {
    totalExpense.innerHTML = totalExpenseAmount
    totalBalance.innerHTML = (Number(totalAmount) - Number(totalExpenseAmount))
}