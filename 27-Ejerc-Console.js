// Error

console.error(" ERROR:", new Error ("algo esta fallando"))  

// Time

console.time ("Comienzo/Fin")

let tabla = 5
let r
for (i=0; i<11; i++) {
    r = tabla * i
    console.log(`5 * ${i} = ${r}` )      
}

console.timeEnd ("Comienzo/Fin")

// Assert

let nro = -2
console.assert (nro > 0, "el numero es negativo, debe ser positivo")

// trace

function miFunc(){
    console.trace("Hola funcion")
}

for (i=0; i<5; i++) {
    miFunc()
}
