let miArray = [1, 2, 3, 4]

let person = {
  nombre: 'Maximiliano',
  apellido: 'Monzon',
  email: 'maxi.rp2@hotmail.com',
  edad: 31
}

let myValue = miArray[1]
console.log(myValue)

let miNombre = person.nombre
console.log(miNombre)

// Desestructuracion  <------------

// Sintaxis arrays  <------------

let [miValor0, miValor1, miValor2, miValor3, miValor4 = 5] = miArray // puedo crear/agregar variables
console.log(miValor0)
console.log(miValor1)
console.log(miValor2)
console.log(miValor3)
console.log(miValor4)

// Sintaxis arrays con valores predeterminados

let [miValor5 = 0, miValor6 = 0, miValor7 = 0, miValor8 = 0, miValor9 = 0] = miArray // notar que no cambian los primeros 4 que ya estan declarados
console.log(miValor5)
console.log(miValor6)
console.log(miValor7)
console.log(miValor8)
console.log(miValor9)

// Ignorar elementos del array

let [miValor10, , , miValor13] = miArray 
console.log(miValor10)
console.log(miValor13)

// Sintaxis objetos  <------------

let{nombre, apellido, edad} = person
console.log(nombre) 
console.log(apellido)
console.log(edad)

// Sintaxis objetos con valores predeterminados

let{nombre2, apellido2, edad2, altura = 1.82 } = person  // notar que no funciona como el arreglo, en los objetos tenemos que darle el nombre de la variable orginal si o si
console.log(nombre2) // no existe
console.log(apellido2) // no existe
console.log(edad2)  // no existe
console.log(altura)

// Sintaxis objetos con valores predeterminados

let{apellido: apellido3, nombre: nombre3, edad: edad3} = person // de esta forma si funciona, y notar que no importa el orden de las variables
console.log(nombre3) 
console.log(apellido3)
console.log(edad3)

// Objetos anidados

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

let {nombre: nom4, Empleo: {nombre: jobNomb}} = persona3

console.log(nom4)
console.log(jobNomb)

// Propagacion(...)  <------------

// Sintaxis arrays

let miArray2 = [...miArray] // copia

let miArray3 = [...miArray, 5, 6]

console.log(miArray2)
console.log(miArray3)

// Combinacion de arrays

let miArray4 = [...miArray, ...miArray2, ...miArray3]

console.log(miArray4)

// Sintaxis de objetos

let persona4 = { ...person} // copia
console.log(persona4)

let persona5 = {...person, peso: 84}
console.log(persona5)


