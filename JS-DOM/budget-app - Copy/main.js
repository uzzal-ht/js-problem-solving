
const budgetForm = document.querySelector(".budget-form")
const budgetInput = document.querySelector(".budget-field")

const totalBudget = document.querySelector(".total-budget")
const totalExpense = document.querySelector(".total-expense")
const totalBalance = document.querySelector(".balance")

const expenseForm = document.querySelector(".expense-form")
const expenseNameInput = document.querySelector(".expense-name-field")
const expenseAmountInput = document.querySelector(".expense-amount-field")


const expenseList = document.querySelector(".expense-list")

budgetForm.addEventListener("submit", function(e) {
    e.preventDefault()

    let totalExpenseAmount = 30
    totalAmount = budgetInput.value
    totalBudget.innerHTML = totalAmount

    totalExpense.innerHTML = totalExpenseAmount

    totalBalance.innerHTML = (Number(totalAmount) - Number(totalExpenseAmount))
    budgetInput.value = ""
})


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
            <button>Remove</button>
        </div>
    `
    expenseList.innerHTML += html

    expenseNameInput.value = expenseAmountInput.value = ""

    let totalExp = 0

    const allItems = document.querySelectorAll(".expense-item")

    allItems.forEach(el => {
        totalExp += item.amount
    })

    console.log(totalExp);
    
})