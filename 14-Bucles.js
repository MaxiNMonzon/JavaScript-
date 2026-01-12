// Bucles o loops  <------------

// for  <------------

for (i=0; i<5; i++) {
    console.log("hola")
}

for (i=0; i<5; i++) {
    console.log(`hola ${i}`)        //aca me va indicando el numero de indice que va recorriendo (interpolacion)
}   

const num = [1, 2, 3, 4, 5, 6]

for (i=0; i<num.length; i++) {
    console.log(`Numero: ${num[i]}`)
}       // recorro el arreglo con el tamaño de su longitud


// while  <------------  
// corta cuando es falso o en todo caso no arranca si el primero es falso. No recorre todo al encontrar un falso

let j = 0
while (j < 11) {
    console.log(`Hola ${j}`)
    j++
}

// do while   <------------ 
// igual que el while, pero se ejecuta al menos una vez aunque sea falso

k = 6
do {
    console.log(`Hola ${k}`)
    k++
} while (k < 5)

// for of  <------------

// se utiliza para imprimir estructuras de datos. Sirve para mostrarnos lo que tiene dentro

miArray = [1, 2, 3, 4]

miSet = new Set (["Mori", "Frida", "Perro", 32, true, "maxi.rp02@hotmail.com"])

miMap = new Map ([
    ["Nombre", "Maximiliano"],
    ["Correo", "maxi.rp002@gmail.com"],
    ["Edad", 31]
])

for (let imprimir of miArray){
    console.log(imprimir)
}

for (let imprimir of miSet){
    console.log(imprimir)
}

for (let imprimir of miMap){
    console.log(imprimir)
}

miString = "Hola mundo"   // en este caso notamos como lo interpreta, nos va mostrando cada letra como si fuera un arreglo

for (let imprimir of miString){
    console.log(imprimir)
}

// Practicas muy utilizadas  <------------
// break y continue  <------------


for (i=0; i<10; i++) {
    if (i == 5){                     // con el continue le decimos que saltee el 5 
        continue
    } else if (i == 8){              // con el break le digo que corte todo cuando aparezca el 8
        break
    }
    console.log(`hola ${i}`)
}    
