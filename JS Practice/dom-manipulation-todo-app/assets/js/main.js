
const userList = document.querySelector(".user-list")



document.getElementById('user-card-form').addEventListener("submit", function(event){
	event.preventDefault()

	const col = document.createElement("div")
	col.classList.add('col-lg-3')

const card = document.createElement("div")
	card.classList.add('card')

const head = document.createElement('div')
	head.classList.add('card-head')

const cardName = document.createElement('h6')
const cardEmail = document.createElement('p')

const btnGroups = document.createElement('div')
	btnGroups.classList.add('btn-groups')

const btnEdit = document.createElement('button')
	btnEdit.classList.add('btn', 'btn-light', 'edit')
	btnEdit.innerText = 'Edit'

const btnDelete = document.createElement('button')
	btnDelete.classList.add('btn', 'btn-light', 'delete')
	btnDelete.innerText = 'Delete'

	btnGroups.appendChild(btnEdit);
	btnGroups.appendChild(btnDelete);

	head.appendChild(cardName)
	head.appendChild(cardEmail)

	card.appendChild(head)
	card.appendChild(btnGroups)

	col.appendChild(card)

	const data = new FormData(this);

	userList.appendChild(col)

	cardName.innerText = data.get('name')
	cardEmail.innerText = data.get('email')
})