## Prompt 1

### Mi prompt:
1. Contexto
Estoy estudiando un curso intensivo de Full Stack Development, soy principiante. Estoy haciendo un ejercicio, practicando javascript puro en el navegador.

2. Instrucciones claras
Necesito crear código que haga que un elemento HTML (por ejemplo, un <div>) cambie de color de forma gradual cuando el usuario haga click en un botón.

3. Restricciones
Usar JavaScript vanilla (sin frameworks). 
No uses fetch ni librerías externas. 
El cambio de color debe ser visible y gradual.
Debe funcionar en navegadores modernos.
El código debe ser claro y estar bien comentado.

4. Formato deseado
Necesito armarlo en la siguiente estructura: index.html, css/style.css y js/script.js
Necesito el código para pegar en cada uno.
Quiero que sea responsive.

Si te falta información, pregúntame antes de responder.

### Respuesta de la AI:
Para lograr un cambio de color gradual sin usar librerías, la forma más eficiente y profesional es **combinar JavaScript para activar el evento y CSS Transitions para manejar la suavidad del movimiento**.
1. index.html
Este archivo define la estructura básica: un contenedor (la caja que cambiará de color) y un botón para disparar la acción.
2. css/style.css
La clave aquí es la propiedad transition. Esta le dice al navegador que cualquier cambio de color no debe ser instantáneo, sino que debe durar un tiempo determinado.
3. js/script.js
En el script, seleccionamos los elementos y generamos un color aleatorio cada vez que se hace clic.
¿Cómo funciona esto?
JavaScript detecta el click y le asigna un nuevo color al background-color del div.
El Navegador nota que el color ha cambiado, pero ve la regla de CSS transition: background-color 0.8s ease;.
--> Resultado: En lugar de saltar del color A al B, el navegador calcula los colores intermedios y los muestra durante 0.8 segundos, creando ese efecto suave que buscas.

### Análisis:
- ¿Funcionó? Sí
- ¿Qué faltó? Me faltó aclarar que sea responsive...
- ¿Qué estuvo bien? Todo.
- ¿Hubo algo confuso o incorrecto? No.

________

## Prueba del código

### ¿Funcionó a la primera?
[Sí]

__________

## Análisis crítico

### Problemas encontrados:
- Que el contenido sea 100% responsive

### Alucinaciones o errores de la AI:
No encontré.

### Decisiones que tomé:
Quise hacerlo 100% responsive para que se vea bien desde cualquier dispositivo.

__________

## Reflexión final

### Herramienta de AI usada:
Gemini

### Cantidad de prompts necesarios:
[2]

### ¿Qué mejoró al iterar los prompts?
Me adaptó a responsive, mejoró visualmente en el desk.

### ¿Qué aprendiste sobre cómo formular prompts?
A ser más breve, concisa en las indicaciones

### ¿Hubo algo que la AI no pudo resolver?
No, de hecho, le plantee mejorar el diseño e implementar pequeños giros para hacer algo más útil, dinámico e interesante y procedió.
Me sugirió implementar: 1. El "Efecto Neón" (Sombras Dinámicas), 2. El Contador de "Clicks de Estilo" y 3. Texto del Código Hexadecimal

### ¿La AI cometió algún error o "alucinó"?
No.

### ¿Qué decisiones tomaste tú como desarrollador?
Acepte modificaciones para dar:
- Interactividad: El usuario recibe feedback constante (el contador sube, el texto cambia).
- Estética: El box-shadow dinámico hace que la interfaz se sienta "viva".
- Micro-interacciones: El hover con transform: scale en CSS hace que el elemento responda físicamente a la presencia del mouse.
Asimismo, noté que las letras blancas en colores claros se perdían, por lo que le requerí calcular la luminosancia del color generado para
que las letras sean negras o blancas según corresponda.

A lo que me brindó la solución y me la explicó como principio fundamental de Accesibilidad Web (A11y).

### Conceptos técnicos aprendidos:

**Tokens:**
- ¿Qué son? 
Son los créditos que se tienen en las IAs, se gastan tanto por lo que le escribimos por lo que la IA nos responde. Existen tokens de entrada / prompts y Tokens de salida / completion. Lo que lleva a que se sumen entre los dos.
- ¿Cómo afectan el uso de AI? 
Si mi prompt es muy genérico, los tokens de salida pueden ser muy extensos (ni hablar si alucina porque comienza a inventar) Lo que llevaría a que se gaste muchos más tokens de salida que de entrada. Asimismo, si la IA tiene que "repasar" nuestra conversación, eso implica el uso de tokens para "releer" la conversación, por eso es recomendable comenzar el chat de 0 cuando se le va a pedir algo nuevo.
Se recomienda ser directo, reiniciar el chat, no pegar textos enteros si no hace falta, resumir / dar estructura de prompt antes de preguntar. Los espacios demás, el saludar o agradecerle a la IA, hacerle chistes, etc TODO consume tokens. La gente no suele saberlo.

**Rate Limiting:**
- ¿Qué es? 
Es el límite de usos diarios o de tipo de cuenta (gratuita, paga según si es PRO o normalita, etc). Puede haber límite de mensajes por día, de tokens por hora o de requirimientos por minuto (APIs aún no lo vimos pero algo conozco).
**Experiencia personal:** _Lamentablemente a mi me dejó Claude >.< pero fue la mejor IA que probé para trabajar. Consumí todos (absolutamente todos) los tokens gratuitos y ya no me dice "hablame más tarde", me dijo que pague o no me habla más jajajaja_
- ¿Por qué existe?
Para evitar abusos y distribuir los recursos equitativamente entre todos los usuarios, ya que cada requerimiento que uno le hace a la IA, consume muchísimos recursos _(energía, servidores y procesamiento)_, estas restricciones evitan que una sola persona monopolice el servicio y protegen a la plataforma contra el spam.