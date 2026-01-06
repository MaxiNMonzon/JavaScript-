//SET

//Declaracion  <------------

let miSet = new Set()

console.log(miSet)

//Inicializacion  <------------

miSet = new Set (["Mori", "Frida", "Perro", 32, true, "maxi.rp02@hotmail.com"])

console.log(miSet)

// Metodos comunes  <------------

// add y delete  <------------

miSet.add ("Guadama")   // de esta forma se agrega
console.log(miSet)    

miSet.delete ("Perro")  // de esta forma se elimina
console.log(miSet) 

console.log(miSet.delete("Frida"))   // Lo que hace esto es decirme si esa palabra existe en el set (devuelve true o false) y la elimina
console.log(miSet) 

// has  <------------
// me dice si el elemento pertenece o no al set

console.log(miSet.has("Frida"))
console.log(miSet.has("Mori"))

// size  <------------
// me devuelve la longitud dek set

console.log(miSet.size)

// Covertir un set a array

let miArray = Array.from(miSet)
console.log(miArray) 

// Covertir un array a set

miSet = new Set (miArray)
console.log(miSet) 

// LA PRINCIPAL DIFERENCIA ENTRE SET Y ARRAY ES QUE EN SET NO SE ADMITEN DUPLICADOS

miSet.add ("Mori")
miSet.add ("Mori")
console.log(miSet) 

