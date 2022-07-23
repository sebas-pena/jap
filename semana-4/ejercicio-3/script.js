let usuarios = [
	{
		nombre: "Ana",
		apellido: "Peréz",
		edad: 32,
		quiereConquistarElMundo: false,
	},
	{
		nombre: "Napoleón",
		apellido: "III",
		edad: 65,
		quiereConquistarElMundo: true,
	},
	{
		nombre: "El Rufi",
		edad: 3,
		quiereConquistarElMundo: true,
	},
]

const cuerpoTabla = document.querySelector("#table-body")

const fillRow = (content, row) => {
	let cell = document.createElement("td")
	content && (cell.innerText = content)
	row.appendChild(cell)
}

usuarios.forEach(({ nombre, apellido, edad, quiereConquistarElMundo }) => {
	let row = document.createElement("tr")

	fillRow(nombre, row)
	fillRow(apellido, row)
	fillRow(edad, row)
	fillRow(quiereConquistarElMundo ? "Si" : "No", row)

	cuerpoTabla.appendChild(row)
})
