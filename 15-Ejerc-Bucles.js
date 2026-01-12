// bucle que imprima los numeros del 1 al 100  <------------

for (i=1; i<21; i++) {
    console.log(`Numero: ${i}`)   
} 

// sumo todos los nros del 1 al 100  <------------

let j = 1
let acum = 0
while (j < 101) {
    acum = acum + j
    j++
} 
console.log(acum)

let suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i
}
console.log(suma) // 5050

// imprimir nros pares del 1 al 50  <------------

let k = 1

while (k <= 30) {
    par = k*2
    if (par <= 50){
        console.log(par)
    }
    k++
} 

//formas mas faciles
let h = 1
let par1 = 0
while (h <= 25) {
    par1 = h * 2
    console.log(par1)
    h++
}


let o = 2
while (o <= 50) {
    console.log(o)
    o += 2   // es lo mismo que o = o + 2, o toma el valor 4 en la primera entrada
}

// imprimir los nombres de un arreglo  <------------

misNombres = ["Maximiliano", "Monzon", "Nicolas"] 
for (let imprimir of misNombres){
    console.log(imprimir)
}

// contar las vocales de un texto  <------------

let frase = "Mañana parece que llueve"

let c = 0
let vocales = ["a", "e", "i", "o", "u"]        // let letra of frase (recorre letra por letra)

for (let letra of frase.toLowerCase()) {       //toLowerCase cuenta A y a iguales (mayuscula y minuscula)
    if (vocales.includes(letra)) {             // pregunta si la letra es vocal
        c++
    }
}   console.log(c)

// otra forma ocupando el set
let oracion = "Mañana parece que llueve"
let voca = new Set(["a", "e", "i", "o", "u"])
let cont = 0

for (let letra of oracion.toLowerCase()) {
    if (voca.has(letra)) {
        cont++
    }
}
console.log(cont)

// crear array de numeros, usar un bucle para multiplicar todos los numeros y mostrar el producto  <------------

let num = [1, 2, 3, 4] 
let w = 0
let p = 1

while (w < num.length) {
    p = p * num[w]
    w++ }
console.log (p)

// un bucle que imprima la tabla de multiplicar del 5  <------------

let tabla = 5
let r
for (i=0; i<11; i++) {
    r = tabla * i
    console.log(`5 * ${i} = ${r}` )      
}

// alternativa
/* let tabla = 5              
let r
for (i=0; i<11; i++) {
    r = tabla * i
    console.log("5 * " + i + " = " + r)      
}  */


// un bucle que invierta una cadena de texto  <------------

let texto = "hola maxi"
let invertido = ""

for (let i = texto.length - 1; i >= 0; i--) {         // texto.lenght -1 (ultima posicion) e i-- retrocedes
    invertido += texto[i]
}
console.log(invertido)

// alternativa
/* let texto = "hola maxi"
let invertido = ""

let i = texto.length - 1

while (i >= 0) {
    invertido += texto[i]
    i--
}
console.log(invertido) */