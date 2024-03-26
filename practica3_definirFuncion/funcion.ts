//Gabriel Alexander De León Lizardo
//Ejercicio 1 - Definición Básica de Función
function suma(n1: number, n2: number): number {
    return n1 + n2;
}


//Ejercicio 2 - Parámetros Opcionales
function optional(n1: number, n2?: number): number {
    return n1 + (n2 != undefined ? n2 : 0);
}


//Ejercicio 3 - Valor por Defecto para Parámetros
function multiplicacion(n1: number, n2: number = 15): number {
    return n1 * n2;
}


//Ejercicio 4 - Tipos de Retorno
function sumaAString(n1: number, n2: number): string {
    return (n1 + n2).toString();
}