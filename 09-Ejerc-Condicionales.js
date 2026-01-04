// Imprimir nombre
let nom = "maxi"

if (nom == "maxi") { 
    console.log("Mi nombre es Maximiliano")
} else {
    console.log("Nombre incorrecto")
}


// Nro + - o 0
let num = -9
if (num < 0) { 
    console.log("El numero es negativo")
} else if (num > 0) {
    console.log("El numero es positivo")
}
else {
    console.log("El numero es 0")
}

// Switch

let mes = "Septiembre"
let estacion

switch (mes) {
    case "Enero":
        estacion = "Verano"
        break
    case "Febrero":
        estacion = "Verano"
        break
    case "Marzo":
        estacion = "Verano-Otoño"
        break
    case "Abril":
        estacion = "Otoño"
        break
    case "Mayo":
        estacion = "Otoño"
        break
    case "Junio":
        estacion = "Otoño"
        break
    case "Julio":
        estacion = "Invierno"
        break
    case "Agostio":
        estacion = "Invierno"
        break
    case "Septiembre":
        estacion = "Invierno-Primavera"
        break
    case "Octubre":
        estacion = "Primavera"
        break
    case "Noviembre":
        estacion = "Primavera"
        break
    case "Diciembre":
        estacion = "Verano"
        break
    default:
        estacion = "Mes incorrecto"    
} 
console.log(estacion)
