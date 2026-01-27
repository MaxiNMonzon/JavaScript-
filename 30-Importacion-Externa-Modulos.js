// Modulos externos
// paquetes o librerias que viene incluidas en Node.js

const os = require ("os")  // os es info del sistema operativo

console.log("Sistema operativo: ", os.platform())
console.log("Arquitectura: ", os.arch())
console.log("Memoria total: ",os.totalmem())
console.log("Memoria libre: ",os.freemem())
console.log("Carpeta del usuario: ", os.homedir())
