// Exportacion de modulos

// Funciones

export function add (a, b){
    return a + b
}

console.log(add(5, 4))

// Propiedades 

export const pi = 3.14
export let nombre = "Maxi"

//Clases

export class circulo {
    constructor(radio){
        this.radio = radio
    }

    area() {
        return Math.PI * Math.pow (this.radio, 2)
    }

    perimetro() {
        return 2 * Math.PI * this.radio
    }

}


// Exportacion por defecto
/* cuando es por defecto quiere decir que lo que pongamos en importacion lo va a tomar igual, solo basta con llamar a la funcion aparte.
OJO!! SOLO SE PUEDE EXPORTAR POR DEFECTO UNA SOLA VEZ (elegir bien que exportar) Y SOLO FUNCIONES */

export default function res (a, b) {
    return a - b
}

