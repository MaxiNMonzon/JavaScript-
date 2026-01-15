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

// crear una funcion que reciba 2 array y devuelva 1 array con los elementos comunes entre ellos

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
