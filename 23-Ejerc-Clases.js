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

// Crear una clase que haga uso de la herencia  <------------

class Muebles {

    constructor(nombre){
        this.nombre = nombre
    }

    tipoI(){
        console.log("Este es un mueble de interior")
    }

     tipoE(){
        console.log("Este es un mueble de exterior")
    }
}

class sofa extends Muebles {

    constructor(name, medida, peso, cuerpos) {
        super(name)
        this.medida = medida
        this.peso = peso
        this.cuerpos = cuerpos

    }

    division(){      
        console.log(`el sofa lo quiere en ${this.cuerpos} cuerpos`)    
} 
}

let miMueble = new sofa("Sofa Maga", 1.80, 85, 2)
console.log (miMueble)
miMueble.division()
miMueble.tipoI()

// Datos de personas que va a realizar una compra y utilizo get y set  <------------

class Cliente {

    #tarjeta
    #nombre
  

    constructor(nombre, tarjeta){
        this.#nombre = nombre
        this.#tarjeta = tarjeta
    }

    //con el get doy permiso a acceder a una propiedad privada pero solo para leerlo
    get nombre() {
        return this.#nombre
    }

    // con el set doy permiso a acceder a una propiedad privada para poder modificar/actualizar los datos
    set tarjeta(tarjeta) {
        this.#tarjeta = tarjeta
    }

    // si le damos el permiso y lo imprimimos (abajo) vamos a ver que se visualiza la modificacion realizada

    /*  get tarjeta() {
        return this.#tarjeta
    }  */

    }

    let cliente1 = new Cliente ("Felipe", "Frances: ...0244")
    console.log (cliente1)
    console.log(cliente1.nombre)

    cliente1.tarjeta = "Galicia: ...0945 (actualizado)"
    // console.log(cliente1.tarjeta)  // si activo el get de arriva le doy el permiso 
