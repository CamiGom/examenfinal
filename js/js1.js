
/* Imprime el mensaje en la consola */
console.log("Hola mundo");

/* Mensaje de advertencia en la consola, mostrado con un signo de advertencia */
console.warn("Hola mundo");

/* Mensaje se muestra con una ¡ en la consola  */
console.info("Hola mundo");

/* Mensaje de error en la consola se muestra con una tacha x */
console.error("Hola mundo");

/* Escribe una línea en el documento/página */
document.write("Hola mundo")

/* Da una alerta al abrir la página */
/* alert("Hola mundo") */

//* Declaración de Variables *//
let edad = 46;
let municipio = "Guadalupe"
let foraneo = true;

console.log("Mi edad en 5 años sería", edad + 5);
console.log("En 5 años tendría", edad + 5, "años");
console.log(`En 5 años tendría", ${edad + 5} años.`);
console.log( edad > 17 ? "Eres mayor de edad":"Eres menor de edad")

/* Declaración de Constantes */

const TOTAL_CARRERAS = 5;
const PIA = 0.30;

/* Declaración de Arreglos (listas) */
let grupos = [51,52,11,25]

console.log(grupos)
console.log(`Total de grupos: ${grupos.length}`)