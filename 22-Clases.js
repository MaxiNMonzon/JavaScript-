// Clases  <------------

class Persona {

    constructor(nombre, edad, alias){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
    }
}

// Sintaxis  <------------

let persona1 = new Persona ("Maximiliano", 31, "Maxi")
let persona2 = new Persona ("Antonio", 21, "Tonio")

console.log(persona1)
console.log(persona2)

console.log(typeof persona1) // sigue siendo un objeto

// Valores por defecto  <------------

class DefPersona {

    constructor(nombre = "Sin nombre", edad = 0, alias = "Sin alias"){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
    }
}

let persona3 = new DefPersona("Lautaro", 75)
console.log(persona3)

// Acceso a propiedades  <------------

persona3.alias = "Lauti"

console.log(persona3.alias)
console.log(persona3)

// Funciones en clases  <------------

class PersonaFun {

    constructor(nombre, edad, alias){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
    }
    trabaja(){
        console.log("La persona trabaja")
    }
}

let persona4 = new PersonaFun("Javier", 62, "Javi")
console.log(persona4)
persona4.trabaja()

// Propiedades privadas  <-----------

class PersonaPrivada {

    #banco

    constructor(nombre, edad, alias, banco){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
        this.#banco = banco
    }
    pagar(){
        this.#banco
    }
}

let persona5 = new PersonaPrivada ("Roberto", 81, "Rober", "icb65657233")
console.log(persona5)
// console.log(persona5.banco) // no podemos acceder

// Getters y Setters  <------------

class PersonaGetSet {

    #banco
    #nombre
  #edad
    #alias

    constructor(nombre, edad, alias, banco){
        this.#nombre = nombre
        this.#edad = edad
        this.#alias = alias
        this.#banco = banco
    }

    //con el get doy permiso a acceder a una propiedad privada pero solo para leerlo
    get nombre() {
        return this.#nombre
    }

    // con el set doy permiso a acceder a una propiedad privada para poder modificar/actualizar los datos
    set banco(banco) {
        this.#banco = banco
    }

    // si le damos el permiso y lo imprimimos (abajo) vamos a ver que se visualiza la modificacion realizada

    /*  get banco() {
        return this.#banco
    } */  

    }

let persona6 = new PersonaGetSet ("Cristian", 40, "Cris", "icb00099984")

console.log(persona6)
console.log(persona6.nombre) // solo me deja leer, no modificar

persona6.banco = "nuevo icb56337644"
// console.log(persona6.banco)    //esto funciona si activo el get de arriba

// Herencia  <------------

class Animal {

    constructor(nombre){
        this.nombre = nombre
    }

    sonido(){
        console.log("El animal emite un sonido particular")
    }
}

class perro extends Animal {

    constructor(name, peso) {
        super(name)
        this.peso = peso
    }

    sonido(){      
        console.log("GUAUUU!!")    // puedo sobrescribir la super clase sonido 
    }

    muerde() {
        console.log ("Guarda que el perro muerde")
    }
}

class pez extends Animal {

    constructor(name, peso) {
        super(name)
        this.peso = peso
    }

    nada() {
        console.log ("El pez es meolans")
    }
}

let miPerro = new perro("Puerro", 50)
console.log (miPerro)
miPerro.sonido()
miPerro.muerde()

let miPez = new pez ("Nemo", 12)
console.log (miPez)
miPez.sonido()
miPez.nada()

// Metodos estaticos <------------

class operacion {

    static sum(a, b){
        return a + b
    }
}

console.log (operacion.sum(1, 9))
console.log (operacion.sum(3, 5))