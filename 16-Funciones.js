// FUNCIONES  <------------

// Simple  <------------

function miFunc(){
    console.log("Hola funcion")
}

for (i=0; i<5; i++) {
    miFunc()
}

// Con parametros  <------------
function miFuncParam (nombre){
    console.log(`Hola querido ${nombre}!`)
 }
miFuncParam("Maxi")
miFuncParam("Leo")

 // funciones anonimas  <------------

const miFunc2 = function (nom){
    console.log(`Hola querido ${nom}!`)
 }
miFunc2("Maximiliano Monzon")

 // Funciones flecha (mas simples, mas cortas)  <------------

const miFunc3 =(nom) => {
    console.log(`Hola querido ${nom}!`)
 }

const miFunc4 = (nom) => console.log(`Hola querido ${nom}!`)
 
miFunc3("Maximiliano Monzon")
miFunc4("Maximiliano Monzon")

// Con parametros  <------------

function sum(a, b){
    console.log(a + b)
}
sum(5, 6)
sum(4, 8)

function sumDef(a=0, b=0){
    console.log(a + b)
}
sumDef()
sumDef(5)
sumDef(0 , 6)
sumDef(b=9)

// Retorno de valores

function mult(a, b){
    return a*b
}

console.log(mult(7, 2))

result = mult(5, 10)
console.log(result)

// Funciones anidadas

function externa () {
    console.log("Funcion externa")
    function interna() {
        console.log("Funcion interna")
    }
    interna()
}
externa()  /* Primero llama a la funcion externa que esta por fuera, 
y luego imprime la funcion interna que esta por dentro */

// Funciones de orden superior
// recibe otra función como parámetro, o devuelve una función

function aplFunc(func, param){  // aplFunc es una función de orden superior porque recibe otra función

    func(param)   
}
aplFunc(miFunc4, "funcion orden superior") // miFunc4 es la función que se ejecuta. Y le paso el dato

/* -func pasa a ser miFunc4.
Es decir:
Func: referencia a la función que querés ejecutar. No la ejecuta todavía, solo la recibe
-param es el dato que querés pasarle a esa función
param pasa a ser "funcion orden....." */

// forEach
// es un bucle que recorre un array, set, map y lo ejecuta por cada uno de sus elementos 

miArray = [1, 2, 3, 4]

miSet = new Set (["Mori", "Frida", "Perro", 32, true, "maxi.rp02@hotmail.com"])

miMap = new Map ([
    ["Nombre", "Maximiliano"],
    ["Correo", "maxi.rp002@gmail.com"],
    ["Edad", 31]
])

miArray.forEach(function (value){
    console.log(value)
})

miArray.forEach((value) => console.log(value))

miSet.forEach((value) => console.log(value))

miMap.forEach((value) => console.log(value))

