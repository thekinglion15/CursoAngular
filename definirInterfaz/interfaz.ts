//Gabriel Alexander De León Lizardo
//Ejercicio 1 - Definir una Interfaz para un Personaje
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}


//Ejercicio 2 - Interfaz para Objetos con Propiedades Anidadas
interface Libro {
    titulo: string;
    anoPublicacion: number;
    autor: Autor;
}

interface Autor {
    nombre: string;
    nacionalidad: string;
}


//Ejercicio 3 - Interfaz para Arrays de Objetos
interface Empleado {
    nombre: string;
    id: number;
    departamento: string;
}

let empleados: Empleado[] = [
    {
        nombre: "Enmanuel",
        id: 1234,
        departamento: "Desarrollo"
    },
    {
        nombre: "Wander",
        id: 4321,
        departamento: "Desarrollo"
    }
];


//Ejercicio 4 - Extender Interfaces
interface PersonajeExtendido extends Personaje{
    xp: number;
}


//Ejercicio 5 - Interfaz con Métodos
interface CuentaBancaria {
    saldo: number;
    depositar(cantidad: number): void;
}