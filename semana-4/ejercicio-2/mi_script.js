document.addEventListener("DOMContentLoaded", function () {
	let links = document.querySelectorAll("a")

	// Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :

	let numOfLinks = links.length

	// Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :

	let penultimateLink = links[links.length - 2].href

	// Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
	let linksToPrueba = 0

	links.forEach((link) => {
		link.href.includes("http://prueba/") && linksToPrueba++
	})

	// Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :

	let linksInThirdParagraph = document
		.querySelectorAll("p")[2]
		.querySelectorAll("a").length

	let info = document.querySelector("#info")
	info.innerHTML = `
        El número de enlaces de la página es: ${numOfLinks} <br>
        La dirección del penúltimo enlace de la página es: ${penultimateLink} <br>
        El número de enlaces que apuntan a http://prueba/ es: ${linksToPrueba} <br>
        El número de enlaces del tercer párrafo es: ${linksInThirdParagraph}
    `
})
