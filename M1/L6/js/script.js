document.addEventListener('DOMContentLoaded', () => {
    const caja = document.getElementById('miCaja');
    const boton = document.getElementById('btnCambiar');
    const textoCodigo = document.getElementById('codigoColor');
    const textoContador = document.getElementById('contador');
    let contador = 0;
    
    // Función para calcular si el color es claro u oscuro
    const obtenerContraste = (hex) => {
        // Quitamos el # si lo tiene
        const color = hex.replace('#', '');
        
        // Convertimos el hex a valores RGB
        const r = parseInt(color.substr(0, 2), 16);
        const g = parseInt(color.substr(2, 2), 16);
        const b = parseInt(color.substr(4, 2), 16);
        
        // Fórmula de luminosidad percibida (estándar de accesibilidad)
        // Se le da más peso al verde porque el ojo humano es más sensible a él
        const luminosidad = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // Si la luminosidad es mayor a 0.5, el color es claro (retornamos negro)
        // De lo contrario, es oscuro (retornamos blanco)
        return luminosidad > 0.5 ? '#000000' : '#FFFFFF';
    };

    const generarColorAleatorio = () => {
        const color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        return color;
    };

    boton.addEventListener('click', () => {
        const nuevoColor = generarColorAleatorio();
        const colorTexto = obtenerContraste(nuevoColor);
        
        // Aplicar el color de fondo a la caja
        caja.style.backgroundColor = nuevoColor;
        
        // Aplicar el color de contraste al texto de adentro
        caja.style.color = colorTexto;
        
        // Actualizar el texto del código hex
        textoCodigo.innerText = nuevoColor.toUpperCase();

        // Actualizar el contador de cambios
        contador++;
        textoContador.innerText = `Cambios: ${contador}`;
        
        // (Opcional) Hacer que el brillo también combine
        caja.style.boxShadow = `0 15px 30px ${nuevoColor}66`;
    });
});