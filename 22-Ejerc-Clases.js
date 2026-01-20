/* Crear clase que reciba 2 propiedades. Añade un metodo a la clase que utilice las propiedades.
Mostrar los valores de las propiedades e invocar a la funcion. Añade un metodo estatico y usarlo */
class Pe {

    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    olor(){
        console.log(`${this.nombre} tiene olor`)  // aca el metodo utiliza las propiedades
    }

    static horasEstudioPorSemana(a, b, c, d, e, f, g){
        return a + b + c + d + e + f + g 
    }
}

let per = new Pe ("Maximiliano", 31)
console.log (per)
console.log (Pe.horasEstudioPorSemana(2, 4, 0, 0, 4, 1, 3))
per.olor()
let per1 = new Pe ("Antonio", 21)
console.log (per1)
console.log (Pe.horasEstudioPorSemana(2, 6, 3, 7, 4, 1, 3))

// Crear una clase que haga uso de la herencia