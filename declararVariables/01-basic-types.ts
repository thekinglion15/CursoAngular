//Gabriel Alexander De León Lizardo
//Ejercicio 1 - Declarar variables de tipos basicos
let nombre: string = "Gabriel";
let edad: number = 23;
let estaActivo: boolean = true;


//Ejercicio 2 - Uso de const y let
const PI: number = 3.14;
//PI = 3.1416;

let contador: number = 0;
contador++;


//Ejercicio 3 - Tipo Union
let identificador: number | string;
identificador = 123456789;
identificador = "qwerty";


//Ejercicio 4 - Arrays y Tuplas
let hobbies: string[] = ["Videojuegos", "Dormir", "Comer"];
let usuario: [string, number] = ["Enmanuel", 27]


//Ejercicio 5 - Import y Export
export {
    nombre,
    edad,
    estaActivo,
    PI,
    contador, 
    identificador,
    hobbies,
    usuario
};