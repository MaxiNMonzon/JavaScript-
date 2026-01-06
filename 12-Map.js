//Map

//Declaracion  <------------

let miMap = new Map()

console.log(miMap)

//Inicializacion  <------------

miMap = new Map ([
    ["Nombre", "Maximiliano"],
    ["Correo", "maxi.rp002@gmail.com"],
    ["Edad", 31]
])

console.log(miMap)

//Metodos y propiedades  <------------

//Set  <------------
// Agrega y modifica elementos del Map. Como el set original no pueden repetirse elementos por eso los modifica

miMap.set("Alias", "Maxi")
miMap.set("Nombre", "Maximiliano Monzon")

console.log(miMap)

// get  <------------
// Simplemente me devuelve la informacion del elemento, se puede utilizar para if, else....

console.log(miMap.get("Correo"))

// has  <------------
// Simplemente me devuelve si el elemento existe o no, se puede utilizar para if, else....

console.log(miMap.has("Nombre"))
console.log(miMap.has("Apellido"))

// delete  <------------

miMap.delete("Alias")

console.log(miMap)

// keys y values  <------------
/* keys me devuelve las CLAVES del map y value los VALORES.
Entries me devuelve las CLAVES y VALORES de forma secuencial y no de a par */

console.log(miMap.keys())
console.log(miMap.values())
console.log(miMap.entries())

// size
// Devuelve el tamaño

console.log(miMap.size)

// clear  <------------

miMap.clear()

console.log(miMap)
