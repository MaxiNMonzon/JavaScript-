// Funcion que recibe 2 numeros y devuelve la suma  <------------

function sum(a, b){
    console.log(a + b)
}
sum(5, 6)
sum(4, 8)

// Funcion que reciba un array de numeros y devuelva el mayor  <------------

miArray = [2, 1, 5, 4]
let mayor = miArray[0]

miArray.forEach(function (value){
    if (value > mayor ) {
        mayor = value
    }  
}) 
console.log(mayor)

// una funcion que reciba un string y cuente el numero de vocales  <------------

let vocales = ["a", "e", "i", "o", "u"]        // let letra of frase (recorre letra por letra)

function unTexto (frase){
    let c = 0
  for (let letra of frase.toLowerCase()) {       //toLowerCase cuenta A y a iguales (mayuscula y minuscula)
    if (vocales.includes(letra)) {             // pregunta si la letra es vocal
        c++
    }} 
    console.log(c) }

unTexto("Maximiliano")                      // el arreglo de vocales puede ir dentro de la funcion, pero lo que va a sucedes es que se crea constantemente (conviene afuera) 
unTexto("Si manana llueve vamos al cine")  // el contador si o si tiene que ir dentro de la funcion porque cuando va recibiendo distintas frases arranca de 0

// funcion que reciba un array de string y devuelve un nuevo array con los string en mayusculas  <------------

function miFuncArr (arr) {
    let arrM = []
    for (let mayus of arr){
    arrM.push(mayus.toUpperCase())
} console.log (arrM) 
}
miFuncArr(["maxi", "nicolas", "monzon"])
miFuncArr(["moriii", "rosa", "leito"])

// o con return 

function miFuncArr (arr) {
    let arrM = []

    for (let mayus of arr){
    arrM.push(mayus.toUpperCase())
} return arrM
}

console.log (miFuncArr(["maxi", "nicolas", "monzon"]))
console.log (miFuncArr(["moriii", "rosa", "leito"]))

// crear una funcion que reciba 2 array y devuelva 1 array con los elementos comunes entre ellos <------------

function comun (a, b){
    let arrCom = []
    for (let numero of a) {
        if (b.includes(numero)) {
            arrCom.push(numero)
        }
    }
return arrCom
}
console.log (comun ([1, 2, 3, 5, 6, 7], [5, 6, 7]))
console.log (comun ([14, 22, 31, 56, 69, 72], [22, 14, 71]))

/* - La función recibe dos arrays: a y b.
- Se crea un array vacío arrCom para guardar los elementos comunes.
- Se recorre el array a con un for...of.
- En cada vuelta, la variable "numero" es un elemento de a.
- Se pregunta si b.includes(numero) → verifica si ese número también está en b.
- Si está, se agrega al array arrCom con arrCom.push(numero).
- Cuando termina el for, se devuelve arrCom con todos los elementos comunes. */

// funcion que reciba array de numeros y devuelva la suma de los pares <------------

function miArrNum (arrNum) {
    let acum = 0

    for (let sumP of arrNum){
        if (sumP % 2 === 0){
            acum = acum + sumP
        }
} return acum
} 

console.log (miArrNum ([2, 3, 4, 5, 6, 7, 8, 9]))
console.log (miArrNum ([62, 83, 24, 15, 44, 93, 72, 54]))

// funcion que reciba array de numeros y devuelva un nuevo array con cada nro elevado al cuadrado <------------

function miArrPot (arrPot) {
    let nroE = []

    for (let nro of arrPot){
    nroE.push(nro**2)
    } return nroE
}

console.log (miArrPot ([2, 3, 4, 5, 6, 7, 8, 9]).join(" - "))  // con el .join hace que se vea uno aldado del otro separado por un guion
