//String
let nombre = "Maximiliano Monzon"
let alias = "Maxi"
let email = "maxi.rp002@gmail.com"

// Integer, real
let edad = 31
let estatura = 1.83

// Boolean
let esEstudiante = true
let esProfe = false

//Undefined. Variable que fue declarada pero no fue inicializada
let unddefinedValue
console.log(unddefinedValue)

//Null. Lo hago intencionalmente, diciendo que en este punto la variable es nula, puede quedar asi o mas adelante le podemos dar un valor. Nosotros ya sabemos que valor o no darle
let nullValue = null

//Symbol. son valores unicos, se utilizan para crear propiedades. Es unico.
let miSimbolo = Symbol ("Mi simbolo")

//Bigint. Representamos numeros extremadamente grande
let miBigint = BigInt (64478374384635245624875623487524928796524)
let miBigint2 = 6664478374384635245624875623487524928796524n

//Como mostrar los tipo de datos
console.log(typeof nombre)
console.log(typeof email)


console.log(typeof edad)

console.log(typeof esEstudiante)

console.log(typeof unddefinedValue)

console.log(typeof nullValue)

console.log(typeof miSimbolo)

console.log(typeof miBigint)

console.log("hola querido", nombre ,"como estas?")
console.log(alias, "tu correo es", email, "y tu edad es", edad, "tu medida", estatura)

//FALTA VER COMO MANEJAR DEL BOOLEAN PARA ABAJO