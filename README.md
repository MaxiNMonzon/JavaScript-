# JavaScript-
Practicando JS

¿Diferencia entre Array, Set y Map?

Array : una lista común y corriente.
Una fila de cosas ordenadas.
- Permite elementos repetidos
- Mantiene orden
- Accedés por índice (posición)
Ideal para listas, colecciones, recorrer datos, etc.

Set: una lista SIN repetidos.
Un Set es como un Array, pero no permite duplicados.
- No hay elementos repetidos
- No accedés por índice (se accede por el nombre o valor del elemento)
- Mantiene orden de inserción
Ideal para evitar duplicados automáticamente

Map: una lista de pares (clave → valor).
Un Map es como un “diccionario”.
- Cada dato tiene una clave y un valor
- Las claves pueden ser cualquier cosa (string, número, objeto…)
- Mantiene orden de inserción
- Una clave no puede repetirse, pero si modificarse
- No accedes por indice
Ideal cuando querés guardar información con nombre, no por posición.


¿Diferencia entre for, while, for of, do while?

For: Ideal cuando sabés cuántas veces repetir algo.
Cuándo usarlo:
- Cuando sabés exactamente cuántas iteraciones necesitás.
- Cuando necesitás controlar el índice manualmente.
- Cuando querés saltar posiciones o avanzar de a 2, 3, etc.
Ejemplos cotidianos
- Mostrar los primeros 10 productos de un catálogo.
- Crear 5 tarjetas HTML repetidas.
- Recorrer un array y modificar elementos por índice.

While: Ideal cuando NO sabés cuántas veces va a repetirse
Cuándo usarlo:
- Cuando no sabés cuántas veces se repetirá.
- Cuando esperás que algo cambie con el tiempo (un contador, un estado, un input).
- Cuando querés esperar a que algo ocurra.
Ejemplos cotidianos:
- Reintentar una conexión a internet hasta que funcione.
- Esperar que un archivo termine de descargarse.
- Leer datos hasta que no haya más

Do While: Como el while, pero garantiza al menos UNA ejecución.
Cuándo usarlo:
- Cuando necesitás que el código se ejecute al menos una vez.
- Formularios, menús, validaciones, pedir datos al usuario.
Ejemplos cotidianos:
- Mostrar un menú de opciones al menos una vez.
- Pedir una contraseña y validar.
- Ejecutar un proceso que siempre debe correr una vez antes de verifar

For of: El más cómodo para recorrer arrays sin preocuparte por índices.
Cuándo usarlo:
- Cuando querés recorrer un array de forma simple.
- Cuando no te importa el índice, solo el valor.
- Cuando querés escribir código más limpio y legible.
Ejemplos cotidianos:
- Recorrer productos de un carrito.
- Recorrer mensajes de un chat.
- Recorrer resultados de una API.


¿Que son los Modulos externos? 

Son paquetes o librerías que vienen incluidas con Node.js o que se intala con npm.
Permiten usar funciones ya hechas, sin tener que programarlas.
Ejemplos:
- os → info del sistema operativo
- fs → leer y escribir archivos
- http → crear servidores
- path → manejar rutas
- chalk → colores en consola (este se instala)
