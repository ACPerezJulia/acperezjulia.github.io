# ✅ VERIFICACIÓN - Errores Comunes a Evitar

## 1. ✅ Vincular el CSS Correctamente

**Estado:** `CORRECTO`

```html
<!-- En index.html (línea 8) -->
<link rel="stylesheet" href="css/styles.css">
```

**Verificación:**
- El archivo `styles.css` está en la carpeta `css/`
- La ruta relativa `./css/styles.css` es correcta
- El navegador carga los estilos sin errores 404

---

## 2. ✅ Usar rem para font-size (Accesibilidad)

**Estado:** `CORRECTO`

```css
/* En styles.css */
html {
  font-size: 100%; /* Base 16px, respeta preferencias del usuario */
}

body {
  font-size: 1rem; /* = 16px */
}

.titulo-principal {
  font-size: 2.5rem; /* = 40px */
}

.descripcion {
  font-size: 1.2rem; /* = 19.2px */
}

.foto-titulo {
  font-size: 1.2rem; /* = 19.2px */
}

.foto-descripcion {
  font-size: 1rem; /* = 16px */
}
```

**Ventajas:**
- Los usuarios pueden ajustar el tamaño base en el navegador
- Mayor accesibilidad para personas con discapacidades visuales
- Escalado consistente en todo el sitio

---

## 3. ✅ Usar Variables CSS (No Valores Directos)

**Estado:** `CORRECTO`

### Variables Definidas:

```css
:root {
  /* Color primario con variaciones */
  --color-primario: hsl(270, 70%, 50%);
  --color-primario-claro: hsl(270, 70%, 70%);
  --color-primario-oscuro: hsl(270, 70%, 30%);

  /* Colores de texto y fondo */
  --color-texto-principal: hsl(0, 0%, 20%);
  --color-fondo-principal: hsl(0, 0%, 98%);
  --color-tarjeta: hsl(0, 0%, 100%);

  /* Espaciado */
  --espaciado-pequeno: 0.5rem;
  --espaciado-medio: 1rem;
  --espaciado-grande: 2rem;
}
```

### Uso Consistente:

```css
.header {
  background-color: var(--color-primario);
  padding: var(--espaciado-grande);
}

.foto-tarjeta {
  background-color: var(--color-tarjeta);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.footer {
  padding: var(--espaciado-grande);
  margin-top: var(--espaciado-grande);
}
```

**Beneficios:**
- Cambios globales fáciles (solo editar una variable)
- Tema oscuro implementado con `html[data-theme="oscuro"]`
- Mantenimiento simple

---

## 4. ✅ Grid con Gap (Espacio entre Tarjetas)

**Estado:** `CORRECTO`

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem; /* 24px de espacio entre tarjetas */
}
```

**Verificación:**
- Las tarjetas tienen espacio consistente
- Responsive: gap se mantiene en todos los saltos
- Las imágenes no se tocan unas a otras

---

## 5. ✅ object-fit en Imágenes

**Estado:** `CORRECTO`

```css
.foto-tarjeta img {
  width: 100%;           /* Llena el contenedor */
  height: 250px;         /* Altura fija */
  object-fit: cover;     /* No distorsiona, recorta si es necesario */
  display: block;        /* Evita espacios en blanco */
  transition: transform 0.3s ease; /* Smooth hover */
}
```

**Resultado:**
- ✅ Las imágenes mantienen su proporción
- ✅ No se distorsionan aunque tengan diferentes dimensiones
- ✅ Relleno uniforme de todas las tarjetas
- ✅ Efecto hover suave en las imágenes

---

## 6. ✅ Media Queries Correctas (max-width)

**Estado:** `CORRECTO`

```css
/* Desktop First - 3 columnas (predeterminado) */
.galeria {
  grid-template-columns: repeat(3, 1fr);
}

/* Tablets - 2 columnas (hasta 768px) */
@media (max-width: 768px) {
  .galeria {
    grid-template-columns: repeat(2, 1fr);
  }
  .titulo-principal {
    font-size: 2rem;
  }
}

/* Móviles - 1 columna (hasta 480px) */
@media (max-width: 480px) {
  .galeria {
    grid-template-columns: 1fr;
  }
  .titulo-principal {
    font-size: 1.8rem;
  }
  .contenedor {
    padding: var(--espaciado-medio);
  }
}
```

**Verificación:**
- ✅ Desktop: 3 columnas
- ✅ Tablets (≤768px): 2 columnas
- ✅ Móviles (≤480px): 1 columna
- ✅ Textos se ajustan para no desbordar

---

## 7. ✅ Documentación Completa de HSL

**Estado:** `CORRECTO`

### Documentación en CSS:

```css
/*
 * INVESTIGACIÓN: ¿Qué es HSL y por qué usarlo?
 * 
 * 1. ¿Qué significa cada valor en hsl()?
 *    - H (Hue/Matiz): Es el tono del color en grados (0-360°).
 *      0° = Rojo, 60° = Amarillo, 120° = Verde, 180° = Cian, 240° = Azul
 *    - S (Saturation/Saturación): La intensidad del color (0-100%).
 *      0% = Gris (sin color), 100% = Color puro y vibrante
 *    - L (Lightness/Luminosidad): La claridad del color (0-100%).
 *      0% = Negro, 50% = Color normal, 100% = Blanco
 * 
 * 2. ¿Por qué HSL puede ser más útil que HEX o RGB?
 *    - Permite crear variaciones facilmente: hsl(200, 70%, 50%) → hsl(200, 70%, 70%)
 *    - Es más intuitivo para humanos
 *    - Facilita crear paletas coherentes
 * 
 * 3. Ejemplo práctico: ¿Cuándo usarías HSL?
 *    - Sistemas light/dark mode
 *    - Estados hover/active
 *    - Paletas de colores grandes
 */
```

### Ejemplos de Variaciones:

```css
/* Color primario con Hue y Saturation fijos, solo varía Lightness */
--color-primario: hsl(270, 70%, 50%);       /* Normal */
--color-primario-claro: hsl(270, 70%, 70%); /* +20% Lightness */
--color-primario-oscuro: hsl(270, 70%, 30%); /* -20% Lightness */
```

---

## 📋 RESUMEN FINAL

| Criterio | Status | Evidencia |
|----------|--------|-----------|
| CSS vinculado correctamente | ✅ | `<link href="css/styles.css">` |
| Font-size en rem | ✅ | `font-size: 1rem, 1.2rem, 2.5rem` |
| Variables CSS usadas | ✅ | 15+ variables en `:root` |
| Grid con gap | ✅ | `gap: 1.5rem;` |
| object-fit en imágenes | ✅ | `object-fit: cover;` |
| Media queries correctas | ✅ | `@media (max-width: 768px/480px)` |
| HSL documentado | ✅ | Documentación completa en comentarios |

---

## 🎯 Desafíos Implementados Adicionales

1. ✅ **Tema Claro/Oscuro**: Sistema completo con `data-theme` y `localStorage`
2. ✅ **@keyframes**: Animación `fadeInSlideUp` con efecto cascada
3. ✅ **Hover Effects**: Escala de imagen + elevación de tarjeta
4. ✅ **Flexbox**: Header con contenido centrado
5. ✅ **Transiciones Suaves**: Todas las interacciones timadas

---

**Proyecto completamente optimizado y siguiendo mejores prácticas de CSS modern.** ✨
