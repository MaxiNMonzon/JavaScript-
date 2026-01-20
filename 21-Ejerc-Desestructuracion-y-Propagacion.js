// Desestructuracion para extraer los dos primeros elementos del array  <------------

let unArr = [2, 4, 6, 8]

let [valor0, valor1, , ] = unArr
console.log(valor0)
console.log(valor1)

// Desestructuracion en array y asignar un valor predeterminado a una variable  <------------

let [Valor0, Valor1, Valor2, Valor3, Valor4 = 10] = unArr 

console.log(Valor0)
console.log(Valor1)
console.log(Valor2)
console.log(Valor3)
console.log(Valor4)

// Desestructuracion para extraer dos propiedades de un objeto  <------------

let human = {
  nombre: 'Esteban',
  apellido: 'Quito',
  email: 'quito@hotmail.com',
  edad: 23,
Escuela: {
    turno: "tarde",
    materias: 8
  }}

let{nombre, edad} = human
console.log(nombre) 
console.log(edad)

// Desestructuracion para extraer dos propiedades de un objeto y asignarlas a nuevas variables con nombres diferentes  <------------

let{apellido: ap, email: em} = human 
console.log(em) 
console.log(ap)

// Desestructuracion para extraer dos propiedades de objetos anidados  <------------

let {Escuela: {materias: mat}, Escuela: {turno}} = human

console.log(mat)  // esta la hice dandole un nombre distinto a la variable
console.log(turno)

//Propagacion para combinar dos arrays  <------------

let miArr1 = [1, 2, 3,  4, 5]
let miArr2 = [6, 7, 8, 9, 10]

let miCom = [...miArr1, ...miArr2]

console.log(miCom)

//Propagacion para combinar dos objetos  <------------

let humanC = {
  peso: 'Armando',
  altura: 'Gil',
   }

let supHum = {...human, ...humanC}
console.log(supHum)