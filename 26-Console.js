// Console

// Log

console.log("holaaaaaa")

// error

console.error(" esto es un mensaje de error. ")
console.error(" esto es un mensaje de error:", new Error ("conexion fallida"))  // puedo combinarlo

// warn 

console.warn(" esto es un mensaje de advertencia. ")

// info

console.info(" mensaje de informacion adicional ")

// table

let datos = [
    ["Maxi", 31],
    ["Igor", 8],
    ["Carla", 82]
]
 console.table (datos)

datos = [
    {nombre: "Maxi", edad: 31},
    {nombre: "Carla", edad: 82}
]
 console.table (datos)  // coloca el nombre y edad en las columnas

// group ()

console.group("Usuario:")
console.log("Nombre: Maxi")
console.log("Edad: 31")
console.log("Emial: msjdnf@ddf.com")
console.groupEnd()  // cierro lo que quiero mostrar del grupo usuario

// time

console.time("Tiempo de ejecucion")

for (i=0; i<5; i++) {
    console.log("hola")
}

console.timeEnd("Tiempo de ejecucion") // si o si tiene que decir lo mismo sino no funciona 

console.time("Tiempo de ejecucion 2")

const num = [1, 2, 3, 4, 5, 6]

for (i=0; i<num.length; i++) {
    console.log(`Numero: ${num[i]}`)
}

console.time ("Tiempo de ejecucion 1")

const nume = [1, 2, 3, 4, 5, 6]

for (i=0; i<nume.length; i++) {
    console.log(`Numero: ${nume[i]}`)
}

console.timeEnd ("Tiempo de ejecucion 1")

console.timeEnd ("Tiempo de ejecucion 2")

// assert (valida que se cumpla un criterio, si no lo hace da el mensaje de aviso, si lo cumple sigue no hace nada)

let edad = 17
console.assert (edad >= 18, "el usuario debe ser mayor de edad")

// count (contador de console)

console.count("click")
console.count("click")
console.count("click")
console.countReset("click")  //reseteo
console.count("click")

// trace (me muestra el seguimiento de la ejecucion del codigo)

function funA(){
    funB()
}

function funB(){
    console.trace(" seguimiento de la ejecucion ")
}

funA()


// clear (limpia todo)

// console.clear() // lo comentamos porque borra todo


