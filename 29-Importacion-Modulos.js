// Importacion de modulos

import { add, pi, nombre, circulo } from "./28-Exportar-Modulos.js";

import resta from "./28-Exportar-Modulos.js";

// Funciones

console.log(add(5, 4))

// Propiedades

console.log (pi)

console.log (nombre)

// Clases

let circ = new circulo (10)
console.log (circ.radio)
console.log (circ.area().toFixed(2))  // con el toFixed le digo que me muestre solo dos decimales
console.log (circ.perimetro().toFixed(2))

//Importacion por defecto
// notar que le cambiamos el nombre y funciona igual. SOLO FUNCIONES Y UNA SOLA VEZ

console.log(resta(5, 9))

// Proyecto modular
// Lo que me quiere decir con esto es que puedo traer cualquier archivo o carpeta y trabajar sobre el

//  import { miImport } from "./01-Comienzo.js"  (EJEMPLO)