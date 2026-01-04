// if (si) y else (si no)  <------------ 
let edad = 32

if (edad == 32) { 
    console.log("La edad es 32")
} else {
    console.log("la edad no es 32")
}


// else if (si no, si)  <------------ 
// Son condiciones que puedo agregar entre el if y else 
if (edad == 32) { 
    console.log("La edad es 32")
} else if (edad > 18) {
    console.log("Es mayor de edad")
}
else {
    console.log("la edad no es 32 ni es mayor de edad")
}
//OJO! se va a cumplir solo 1 de estas 3 condiciones, la primera que encuentra verdadera se cumple


//OPERADOR TERNARIO  <------------
const mensaje = edad == 37 ? "La edad es 32" : "la edad no es 32"   //funcionan como el if y else ? if : else
console.log(mensaje)  //combino variables, operadores y condicionales


// SWITCH  <------------
let dia = 7
let nomDia

switch (dia) {
    case 0:
        nomDia = "Lunes"
        break
    case 1:
        nomDia = "Martes"
        break
    case 2:
        nomDia = "Miercoles"
        break
    case 3:
        nomDia = "Jueves"
        break
    case 4:
        nomDia = "Viernes"
        break
    case 5:
        nomDia = "Sabado"
        break
    case 6:
        nomDia = "Domingo"
        break
    default:
        nomDia = "Numero de dia incorrecto"     // Defeault sirve para cuando se ingresan numeros incorrectos
}
console.log(nomDia)  //Noo olvidarse del BREAK, es el que corta con cada condicion cuando es correcta

