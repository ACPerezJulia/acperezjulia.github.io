// Selecciona el botón y el párrafo por su id
const boton = document.getElementById('cambiarBtn');
const parrafo = document.getElementById('miParrafo');

// Función para generar un color aleatorio en formato rgb
function colorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b, css: `rgb(${r}, ${g}, ${b})` };
}

// Devuelve color de texto (blanco o negro) según el brillo del fondo
function colorTextoPorContraste(r, g, b) {
  // Formula de luminancia percibida
  const luminancia = (0.299 * r) + (0.587 * g) + (0.114 * b);
  return luminancia < 128 ? '#ffffff' : '#000000';
}

// Agrega el event listener al botón
boton.addEventListener('click', function() {
  console.log('¡El botón fue clickeado!');
  const nuevoColor = colorAleatorio();
  parrafo.textContent = '¡Nuevo texto generado!';
  parrafo.style.backgroundColor = nuevoColor.css;
  parrafo.style.color = colorTextoPorContraste(nuevoColor.r, nuevoColor.g, nuevoColor.b);
});