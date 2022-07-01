const petsCtn = document.querySelector(".pets-list")

pets.forEach((pet, i) => {
	const listItem = document.createElement("li")
	// Create card
	const card = document.createElement("a")
	card.setAttribute("href", `./pet/index.html?id=${i}`)
	card.classList.add("pet-card")

	// Add image
	const cardImage = document.createElement("img")
	cardImage.classList.add("pet-card__image")
	cardImage.src = pet.image
	cardImage.alt = pet.name
	cardImage.style.borderColor = pet.borderColor
	card.appendChild(cardImage)

	// Add name
	const name = document.createElement("p")
	name.classList.add("pet-card__name")
	name.innerHTML = pet.name
	card.appendChild(name)

	listItem.appendChild(card)

	petsCtn.appendChild(listItem)
})
