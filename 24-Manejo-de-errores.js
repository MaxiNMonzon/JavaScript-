// excepcion  <------------

// produce una excepcion 

let miObjeto
    // console.log (miObjeto.email)

// tratamiento de errores  <------------

// try-catch (podemos manejar el error)  <------------
/* lo que hace el try es no romper el codigo marcando que esta mal sino que lo intenta ejecutar. Si no lo ejecuta sale por el catch
que de manera prolija marca o visualiza un error pero no lo muestra explicitamente (mostramos por mensaje simplemente el error)  */
try {
    // lo que intento ejecutar
    console.log(miObjeto.email)
    console.log("Finaliza la ejecucion sin errores")

} catch { 
    // bloque de error
    console.log("se ha producido un error")
}

// aca lo encuetra y lo ejecuta al menos sin marcar errores
try {
    // lo que intento ejecutar
    console.log(miObjeto)
    console.log("Finaliza la ejecucion sin errores")

} catch { 
    // bloque de error
    console.log("se ha producido un error")
}

// capturar el error  <------------

try {
    // lo que intento ejecutar
    console.log(miObjeto.email)
    console.log("Finaliza la ejecucion sin errores")

} catch(error) { 
    // bloque de error
    console.log("se ha producido un error:", error.message)  // de esta forma nos dice donde esta el error
}

// finally  <------------
// con esto se ejecuta si o si el codigo, por lo general se utiliza para limpiar cosas 
try {
    // lo que intento ejecutar
    console.log(miObjeto)  // o tambien funciona con el miObjeto.email

} catch (error) { 
    // bloque de error
    console.log("se ha producido un error:", error.message)
} finally {
    console.log("este codigo se ejecuta siempre")
}

// ¡¡¡¡  hasta el momento lo que hicimos fue contener el error con el codigo !!!!

// lanzamiento de errores  <------------

// throw  <------------

function sumIntegers (a, b){
    if (typeof a !== "number" || typeof b !== "number"){
        throw new TypeError ("Esta operacion solo suma numeros")
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("esta operacion solo suma nros enteros")
    }
    if(a == 0 || b == 0){
        throw new sumZeroIntegerError ("se esta intentando sumar 0", a, b)
    }
    return a + b
}

try {
    // lo que intento ejecutar
    console.log(sumIntegers(5, 10))
    console.log(sumIntegers(5.5, 10))  // ojo notar que al primer error que encuentra lo corta, que es aca. No sigue con las demas lineas.
    console.log(sumIntegers(5, "10"))  // si queremos seguir con las demas lineas tenemos que hacer try-catch por cada una
    console.log(sumIntegers(7, 14))

} catch (error) { 
    // bloque de error
    console.log("se ha producido un error:", error.message)
}

// capturar varios tipos de errores  <------------

try {
    
    console.log(sumIntegers("5", 10))
    console.log(sumIntegers(5.5, 10))  
   
} catch (error) { 
   if (error instanceof TypeError){
    console.log("se ha producido un error de tipo:", error.message)
   } else if (error instanceof Error){
    console.log("se ha producido un error:", error.message)
   }
} // lo que hago aca es separar los tipos de errores 


// crear excepciones personalizadas  <------------

class sumZeroIntegerError extends Error{
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b

    }
    impNumeros(){
        console.log(this.a, "+", this.b)
    }
}

try {
    
    console.log(sumIntegers(0, 10))  
   
} catch (error) { 
    console.log("se ha producido un error personalizado:", error.message)
    error.impNumeros()
   }

   