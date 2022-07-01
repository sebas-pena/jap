const petsCtn = document.querySelector(".pets-list")

const petId = new URLSearchParams(window.location.search).get("id")

const pet = pets[petId]

// Create card
const card = document.createElement("div")
card.classList.add("pet-card")

// Add image
const cardImage = document.createElement("img")
cardImage.classList.add("pet-card__image")
cardImage.src = pet.image
cardImage.alt = pet.name
card.appendChild(cardImage)

const cardBody = document.createElement("div")
cardBody.classList.add("pet-card__body")

// Add name
const name = document.createElement("p")
name.classList.add("pet-card__name")
name.innerHTML = pet.name
cardBody.appendChild(name)

// Add description
const description = document.createElement("p")
description.classList.add("pet-card__description")
description.innerHTML = pet.description
cardBody.appendChild(description)

card.appendChild(cardBody)
document.body.appendChild(card)
