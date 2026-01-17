// creo objeto, accedo y muestro su valor

let humano = {
    nombre: "Gerard",
    apellido: "Hiler",
    edad: 29,
    respira: function(){
       console.log("El humano respira")
    }
}

console.log(humano)

// Agrego propiedad

humano.correo = "gerH@gmail.com"
console.log (humano)

// Elimino propiedad

delete humano.apellido
console.log (humano)

// Agrego funcion

console.log(humano)
humano.respira()

// Iteracion

 for (let key in humano){
    console.log(key + ": " + humano[key])
}

// Creo objeto anidado

let humano2 = {
    nombre: "Gerard",
    apellido: "Hiler",
    edad: 29,
    respira: function(){
       console.log("El humano respira")},
    casa: {
        habitacion: 2,
        tipo: "duplex",
        barrio: "grillo",
        alquiler: function(){
       console.log("no esta en alquiler")}
    }}

console.log(humano2)
humano2.respira()
console.log(humano2.casa)
humano2.casa.alquiler()  
