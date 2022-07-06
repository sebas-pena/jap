const selectBoxPlaceholder = document.querySelector(".select-box__placeholder")
const selectBoxItems = document.querySelectorAll(".select-box__item > label")

selectBoxItems.forEach((item) => {
	item.addEventListener("click", (e) => {
		selectBoxPlaceholder.classList.contains("undefined") &&
			selectBoxPlaceholder.classList.remove("undefined")
		selectBoxPlaceholder.innerText = e.target.innerText
		selectBoxPlaceholder.nextElementSibling.classList.add("hidden")
	})
})

selectBoxPlaceholder.addEventListener("click", () => {
	selectBoxPlaceholder.classList.toggle("active")
	selectBoxPlaceholder.nextElementSibling.classList.toggle("hidden")
})

document.addEventListener("click", (e) => {
	if (!e.target.closest(".select-box")) {
		selectBoxPlaceholder.classList.remove("active")
		selectBoxPlaceholder.nextElementSibling.classList.add("hidden")
	}
})
