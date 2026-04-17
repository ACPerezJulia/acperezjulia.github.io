
console.log("JavaScript conectado correctamente");

// Array de mensajes según edad
const mensajesEdad = [
	"Eres menor de edad.",
	"Eres joven adulto.",
	"Eres adulto.",
	"Eres una persona experimentada."
];

// Función para calcular edad
function calcularEdad(fechaNacimiento) {
	const hoy = new Date();
	const nacimiento = new Date(fechaNacimiento);
	let edad = hoy.getFullYear() - nacimiento.getFullYear();
	const m = hoy.getMonth() - nacimiento.getMonth();
	if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
		edad--;
	}
	return edad;
}

// Función para obtener mensaje según edad
function obtenerMensajeEdad(edad) {
	if (edad < 18) return mensajesEdad[0];
	if (edad < 30) return mensajesEdad[1];
	if (edad < 60) return mensajesEdad[2];
	return mensajesEdad[3];
}

// Función para generar un número favorito aleatorio
function numeroFavorito() {
	// Entre 1 y 100
	return Math.floor(Math.random() * 100) + 1;
}


// Array de colores para la ruleta
const colores = ["Rojo", "Azul", "Verde", "Amarillo", "Violeta", "Naranja", "Rosa", "Turquesa"];

// Función para elegir color favorito aleatorio
function colorFavorito() {
	const indice = Math.floor(Math.random() * colores.length);
	return colores[indice];
}

// Manejar el formulario
document.getElementById('perfilForm').addEventListener('submit', function(e) {
	e.preventDefault();
	const nombre = document.getElementById('nombre').value;
	const fecha = document.getElementById('fecha').value;
	let edad = calcularEdad(fecha);
	const mensaje = obtenerMensajeEdad(edad);
	const favorito = numeroFavorito();

	// Mostrar resultado en la página
	document.getElementById('resultado').innerHTML =
		`<h2>Hola, ${nombre}!</h2>
		<p>Tu edad es: <strong>${edad}</strong></p>
		<p>${mensaje}</p>
		<p>Tu número favorito aleatorio es: <strong>${favorito}</strong></p>`;

	// Mostrar sección de ruleta
	document.getElementById('ruleta-section').style.display = 'block';

	// Limpiar resultado de color anterior
	document.getElementById('colorElegido').innerHTML = "";

	// Mostrar en consola
	console.log(`Nombre: ${nombre}`);
	console.log(`Fecha de nacimiento: ${fecha}`);
	console.log(`Edad: ${edad}`);
	console.log(`Mensaje: ${mensaje}`);
	console.log(`Número favorito aleatorio: ${favorito}`);
});

// Manejar el botón de girar ruleta
document.getElementById('girarRuleta').addEventListener('click', function() {
	const color = colorFavorito();
	document.getElementById('colorElegido').innerHTML =
		`¡Tu color favorito es: <strong style="color:${color.toLowerCase()}">${color}</strong>!`;
	console.log(`Color favorito de la ruleta: ${color}`);
});