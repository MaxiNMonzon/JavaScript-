//OPERADORES

//OPERADORES ARITMETICOS  <------------ 
let a = 10
let b = 20

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(a % b) //Modulo
console.log(a ** b)

//a++ //Incremento
console.log(a)
//b-- //Decremento
console.log(b)

//OPERADORES DE ASIGNACION <------------ 
let variable = 2
console.log(variable)
variable += 2   //esto es lo mismo que decir (variable= variable + 2)
console.log(variable)

variable -= 2
console.log(variable)
variable *= 2
console.log(variable)
variable /= 2
console.log(variable)
variable %= 2
console.log(variable)
variable **= 2
console.log(variable)

//OPERADORES DE COMPARACION  <------------ 
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)

console.log(a == 10)  // Igualdad por valor
console.log(a == "10") //Igualdad por valor
console.log(a == a)

console.log(a === a) //Igualdad por identidad (por tipo y valor). 
console.log(a === 10)
console.log(a === "10")

console.log(a != 10)
console.log(a !== "10")

console.log(0 == "") //ENTENDER muy bien el uso de ==(valor) y ===(tipo y valor)
console.log(0 == false)
console.log(0 === "")

/* VALORES VERDADEROS: 
-Numeros positivos y negativos menos el 0
-Cadenas de texto menos la vacia
-Los boolean true
*/

/* VALORES FALSOS:
-0
-0n
-Null
-undefined
-NaN
-Los boolean false
-Cadenas de texto vacia
*/


// OPERADORES LOGICOS  <------------ 
//and (&&)
console.log(5>10 && 15>20)
console.log(5<10 && 15<20)
console.log(5>10 && 15<20)  //RECORDAR las proposiciones logicas, en el AND ambos tenian que ser verdaderos para que sea verdadero sino todo falso

//or (||)
console.log(5>10 || 15>20)
console.log(5<10 || 15<20)
console.log(5>10 || 15<20) //RECORDAR las proposiciones logicas, en el OR ambos tenian que ser falsas para que sea falso sino todo verdadero

console.log(5>10 && 15>20 || 30<40)

//not (!)
console.log(!(5>10 && 15>20))
console.log(!(5<10 && 15<20))
console.log(!(5>10 || 15>20))

/* RECORDAR ORDEN DE PROCEDENCIA: 
1- not   2- and    3- or   */


//OPERADORES TERNARIOS  <------------ 
const llueve = true
llueve ? console.log ("esta lloviendo y mucho") : console.log("no llueve")

const calor = false
calor ? console.log ("hace calor y mucho") : console.log("no hace calor")
