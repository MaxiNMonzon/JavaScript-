// capturar una excepcion utilizando try-catch y finally

let miPrueba

try {
    // lo que intento ejecutar
    console.log(miPrueba.email)
    console.log("Finaliza la ejecucion sin errores")

} catch { 
    // bloque de error
    console.log("se ha producido un error")
}



try {
    // lo que intento ejecutar
    console.log(miPrueba.email)  // o tambien funciona con el miObjeto.email

} catch (error) { 
    // bloque de error
    console.log("se ha producido un error:", error.message)
} finally {
    console.log("este codigo se ejecuta siempre")
}

/* creo una logica y lanzo varias excepciones. En esta logica cree una funcion para que se introduzcan contraseñas acorde a las validaciones que fui haciendo.
Realize un agregado con un for y for of cuando se quieren detectar los errores que solo lo intente 10 veces */

function ContraseñaValida (pass1, pass2){

    if(pass1 != pass2){
        throw new TypeError ("las contraseñas no son iguales")
    }

    if(pass1.length < 8){
        throw new Error ("la longitud debe tener como minimo 8 caracteres")
    }

    let tieneLetra = false
    let tieneNumero = false

    for (let char of pass1) {

        // si NO es número → puede ser letra
        if (isNaN(char)) {
            // verificamos que sea una letra del abecedario
            if (char.toLowerCase() !== char.toUpperCase()) {
                tieneLetra = true
            }
        }

        // si es número → listo
        if (!isNaN(char)) {
            tieneNumero = true
        }
    }

    if (!tieneLetra) {
        throw new Error("La contraseña debe tener al menos una letra")
    }

    if (!tieneNumero) {
        throw new Error("La contraseña debe tener al menos un número")
    }
    return "Contraseña válida"
}

const contraseñas = [["122sd", "122sd"], ["122", "122"], ["122sdsdsd","122sdsdsd"]]
for(i = 0; i < 10; i++) {

    console.log("Intento", i+1)

    let encontrada = false

for (let par of contraseñas){

try {
    // lo que intento ejecutar
    console.log("Probando:", par[0])
    console.log(ContraseñaValida(par[0], par[1]))
    encontrada = true
    break

} catch(error) { 
    // bloque de error
    console.log("se ha producido un error", error.message)
} // cierro catch
} // cierro for of

    if (encontrada) {            
        console.log("¡Contraseña válida encontrada!")
        break
    } 

    if(i == 10){
        console.log("Alcanzo el maximo permitido")
    }
}



