// ARRAY

// Declaarcion  <------------
let miArray = []
let miArray2 = new Array ()

console.log (miArray)
console.log (miArray2)

//Inicializacion <------------

miArray = [3]  //esta es la mejor opcion
miArray2 = new Array (3)   // este lo que hace es guardar 3 espacios vacios en el arreglo

console.log (miArray)
console.log (miArray2)

miArray = [1, 2, 3, 4]  
miArray2 = new Array (1, 2, 3, 4)

console.log (miArray)
console.log (miArray2)

miArray = ["Maxi", "Monzon", "Nicolas", 32, true]  
miArray2 = new Array ("Maxi", "Monzon", "Nicolas", 32, true)

console.log (miArray)
console.log (miArray2)

miArray2 = new Array (3) // esta posibilidad es valida peroo si seguimos agregadando items abajo me los agrega igual OJO!
miArray2[2] = "Monzon"
//miArray2[0] = "Maximiliano"  // SACANDO alguna posicion deja el espacio vacio
miArray2[1] = "Nicolas"
// miArray2[4] = "OJO"

console.log (miArray2)

miArray = [] 
miArray[1] = "Maximiliano"  // SACANDO alguna posicion deja el espacio vacio
miArray[2] = "Nicolas"
miArray[0] = "Monzon"

console.log (miArray)

//Metodos comunes  <------------

// Push y Pop   <------------

//Push sigue un orden creciente, va ingresando en orden los valores
miArray = []

miArray.push("Maxi")
miArray.push("Mora")
miArray.push("Perro")
miArray.push(32)

console.log (miArray)

//Pop elimina el ultimo elemento del arreglo. Pero si seguimos agregando mas pop elimina el anteultimo y asi sucesivamente
miArray.pop()
miArray.pop()
console.log (miArray.pop()) //OJO! Elimina y tambien devuelve de esta forma, el elemento que queremos que nos traiga

console.log (miArray)

// Shift y Unshift   

//Shift elimina el primer elemento del arreglo. Pero si seguimos agregando mas shift elimina el que sigue y asi sucesivamente
miArray = []

miArray.push("Frida")
miArray.push("Dulce")
miArray.push("Nala")
miArray.push(3)

console.log (miArray)

miArray.shift()
console.log (miArray.shift()) //OJO! Elimina y tambien devuelve de esta forma, el elemento que queremos que nos traiga

console.log (miArray)

//Unshift agrega desde el inicio mas elementos
miArray.unshift ("Leo", "Vini")
console.log (miArray)

//Lenght  <------------
//Devuelve la longitud del arreglo

console.log (miArray.length)

// Clear  <------------

miArray = []  // De esta forma limpiamos el arreglo (inicializandolo)

//Slice  <------------
/*Selecciona desde y hasta donde quiero mostrar los elementos del arreglo. Recordar que arranca con 0 siempre la primera posicion y siempre la ultima  
posicion que coloque no la va a incluir. Si la posicion final es 3 por ejemplo va a ser para atras sin incluir la 3era posicion */

miArray = ["Frida", "Bodoquito", "Feni", 32, true]
let seleccion = miArray.slice (1, 2)

console.log(miArray)
console.log(seleccion)

//Splice <------------
/* Lo que hace es eliminar del arreglo DESDE donde uno indica (la posicion del arreglo) y el numero que se coloca luego es el de
la cantidad de elementos a eleminar*/

miArray.splice(1, 3) 
console.log(miArray)

//Otra cosa que nos deja hacer es modificar el arreglo, por ejemplo: 

miArray = ["Frida", "Bodoquito", "Feni", 32, true]
miArray.splice(1, 2, "Vini") 
console.log(miArray)

/* Aca lo que hace es, se para en la posicion 1 y con el 2 le indico que elimine dos elementos, luego con el 3er elemento que agregue
"Vini", le indico que lo agregue en el arreglo. Puede ser string o un integer*/
