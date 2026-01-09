// Array

let animal = ["vaca", "pollito", "cebra", "leon"] // creo el arreglo
console.log(animal)

animal.push ("loro") // agrego al final del arreglo
console.log(animal)

animal.unshift("pavo")    //agrego en el inicio del arreglo
console.log(animal)

animal.splice(2, 1) // aca lo que hago es eliminar el que esta en la posicion 3. Me paro en la posicion y luego indico cuantos quiero borrar
console.log(animal)

// Set

let fruta = new Set (["manzana", "banana", "pera", "naranja"]) //creo el set
console.log(fruta)

fruta.add ("kiwi")   // agrego uno que no esta y otro repetido
console.log(fruta)  
fruta.add ("pera")   
console.log(fruta)

fruta.delete ("naranja")  // elimino uno
console.log(fruta)

// Map

let misDatos = new Map([
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"]
])
console.log(misDatos)  // creo un map

// busco si el mes 5 existe y muestro el nombre del mes
if (misDatos.has(5)) { 
   console.log(misDatos.get(5))
} else {
    console.log("el mes no es mayo")
}
console.log(misDatos.keys())

misDatos.set([1, 2, 3]) // agrego al map una clave que almacena los meses de verano
console.log(misDatos)


// creo un array lo trasformo en sey y almaceno en map

let objetoA = ["libro", "caja", "mueble"] // creo el arreglo
console.log(objetoA)

objS = new Set (objetoA)       // lo paso a set
console.log(objS) 

let objM = new Map()               // almaceno en map        
objM.set("objetos", objS)                  

console.log(objM)
