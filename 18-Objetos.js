// Objetos  <------------

// Sintaxis  <------------

let persona = {
    nombre: "Maxi",
    edad: 31,
    apellido: "Monzon"
}

// Acceso a las propiedades  <------------

// por notacion punto

console.log(persona.nombre) //la mejor 

// por notacion de corchetes

console.log(persona["nombre"])

// Modificacion de propiedades   <------------

persona.nombre = "Maximiliano"
console.log(persona.nombre)

persona.edad = "31"   // modificamos el tipo de dato tambien
console.log(persona.edad)
console.log(typeof persona.edad)

// Eliminacion de propiedades   <------------

delete persona.edad
console.log(persona)

// Nueva propiedad  <------------

persona.email = "maxi.rp2@hotmail.com"
persona["edad"] = 31
console.log(persona)

// Funciones en propiedades  <------------

let persona2 = {
    nombre: "Maxi",
    edad: 31,
    apellido: "Monzon",
    camina: function(){
        console.log("La persona camina")
    }
}

console.log(persona2)
persona2.camina()

// Anidacion de objetos

let persona3 = {
    nombre: "Maxi",
    edad: 31,
    apellido: "Monzon",
    camina: function(){
        console.log("La persona camina")
    },
    Empleo: {
        nombre: "Ventas",
        experiencia: 8,
        trabajo: function(){
        console.log(`La persona trabaja hace ${this.experiencia} años`)  // fundamental para llamar a objetos
    }
} }
console.log(persona3)
persona3.camina()
console.log(persona3.Empleo)
persona3.Empleo.trabajo()

// Igualdad de objetos

let persona4 = {
  nombre: 'Maximiliano',
  apellido: 'Monzon',
  email: 'maxi.rp2@hotmail.com',
  edad: 31
}

console.log(persona)
console.log(persona4)

console.log(persona == persona4)
console.log(persona === persona4)

console.log(persona.nombre == persona4.nombre)  // entra en juego objetos por valor y por referencia

// Iteracion

 for (let key in persona4){
    console.log(key + ": " + persona4[key])
    } 

// Funciones como obejtos
//OJO NO ES BUENA PRACTICA

function Persona(nombre, edad, email, licencia){  // no es una buena practica, deberia ser una clase pero asi es un objeto
    this.nombre = nombre
    this.edad = edad
    this.email = email
    this.licencia = licencia
}

let persona5 = new Persona ("Maximiliano", 31, "maxi.@gmail.com", "si")
console.log(persona5)

let persona6 = new Persona ("Anotonio", 34, "toni.@gmail.com", "no")
console.log(persona6)