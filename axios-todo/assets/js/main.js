
let name = document.querySelector(".name")
let email = document.querySelector(".email")
let updateName = document.querySelector(".update-name")
let updateEmail = document.querySelector(".update-email")
let formInner = document.querySelector(".form-inner")
let listInner = document.querySelector(".task-list")
let modalInner = document.querySelector(".modal-inner")

function showTask(items) {
	return (listInner.innerHTML = items.map(item => {
		return `
			<div class="col-lg-4">
				<div class="card" data-id="${item.id}">
					<div class="info">
						<h6>${item.name}</h6>
						<p>${item.email}</p>
					</div>
					<div class="btn-groups">
						<button class="btn btn-light edit" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
						<button class="btn btn-light delete">Delete</button>
					</div>
				</div>
			</div>
		`
	}).join(""))
}

const baseUrl = "http://localhost:3000/users"

async function fetchData() {
	let res = await axios.get(baseUrl)
	let data = await res.data
	showTask(data)
}
fetchData()


// adding task
async function addTask(name, email) {
	const payload = {
		name,
		email
	}

	let res = await axios.post(baseUrl, payload)
	let data = await res.data
	fetchData(data)
}

// remove task
async function removeTask(id) {
	let res = await axios.delete(`${baseUrl}/${id}`)
	let data = await res.data
	fetchData(data)
}

// update task
async function updateTask(id, obj) {
	let res = await axios.put(`${baseUrl}/${id}`, obj)
	let data = await res.data
	fetchData(data)
}

formInner.addEventListener("submit", (e) => {
	e.preventDefault()
	addTask(name.value, email.value)
	name.value = email.value = ""
})


listInner.addEventListener("click", (e) => {
	if(e.target.classList.contains("delete")) {
		const id = e.target.closest('[data-id]').dataset.id
		removeTask(id)
	}
})


listInner.addEventListener("click", async (e) => {
	const target = e.target.classList.contains("edit")

	const id = e.target.closest('[data-id]').dataset.id

	let res = await axios.get(`${baseUrl}/${id}`)
	let data = await res.data

	if(target) {
		updateName.value = data.name
		updateEmail.value = data.email
		modalInner.value = data.id

	}
})


modalInner.addEventListener("submit", (e) => {
	e.preventDefault()
	const id = e.target.value
	const obj = {
		name:	updateName.value,
		email: updateEmail.value
	}
	updateTask(id, obj)
})