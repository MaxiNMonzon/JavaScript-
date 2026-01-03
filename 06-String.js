//String

//CONCATENACION  <------------ 
let nombre = "Maximiliano Monzon"
let email = "maxi.rp002@gmail.com"
let saludo = "Hola querido " + nombre + "!, como estas?"
console.log(saludo)

//LONGITUD  <------------ 
console.log(saludo.length)

//ACCESO A CARACTERES
console.log(saludo[0])
console.log(saludo[5])

//METODOS COMUNES  <------------ 
console.log(saludo.toUpperCase())  // transforma todo a mayuscula
console.log(saludo.toLowerCase())  // transforma todo a minuscula
console.log(saludo.indexOf("querido")) // me dice la posicion donde arranca esa palabra
console.log(saludo.includes("Hola")) // me dice si la palabra esta incluida o no en la cadena
console.log(saludo.includes("todo bien?"))
console.log(saludo.slice(0, 10)) // nos devuelve la cadena con los caracteres que le solicitamos del 0 al 10
console.log(saludo.replace("Hola", "Buenas")) // reemplaza una palabra por la otra

//PLANTILLAS LITERALES <------------ 
let mensaje = `con estas comillas (alt + })
puedo hacer este salto, es decir, 
puedo escribir varios renglones o en distintos`

console.log(mensaje)

console.log(`hola mi nombre es ${nombre} y mi correo es ${email}`) // ESTO solo lo podemos hacer con este tipo de comillas (alt + })


