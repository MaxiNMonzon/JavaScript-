// Funcion que recibe 2 numeros y devuelve la suma

function sum(a, b){
    console.log(a + b)
}
sum(5, 6)
sum(4, 8)

// Funcion que reciba un array de numeros y devuelva el mayor

miArray = [2, 1, 5, 4]
let mayor = miArray[0]

miArray.forEach(function (value){
    if (value > mayor ) {
        mayor = value
    }  
}) 
console.log(mayor)

