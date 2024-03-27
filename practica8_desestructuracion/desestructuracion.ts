//Gabriel Alexander De León Lizardo
//Ejercicio 1 - Desestructuración Básica de Arreglos
const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Morado'];
const [color1, color2, color3] = colores;
console.log(`Color 1: ${color1}, Color 2: ${color2}, Color 3: ${color3}`);


//Ejercicio 2 - Desestructuración con Omisión de Elementos
const libroInfo = ['Cien años de soledad', 'Gabriel García Márquez', 1967];
const [titulo, , anio] = libroInfo;
console.log(`${titulo} del año ${anio}`);


//Ejercicio 3 - Desestructuración de Objetos Anidados
const estudiante = {
    nombre: 'Ana',
    edad: 22,
    universidad: {
        nombre: 'Universidad de Buenos Aires',
        ciudad: 'Buenos Aires'
    }};
const {nombre: nombreEst, universidad: {nombre: universidad}} = estudiante;

console.log(`El estudiante ${nombreEst} de la ${universidad}`);


//Ejercicio 4 - Desestructuración en Parámetros de Función
const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020
};

function extraeImprime({marca, modelo}) {
    console.log(`El vehículo es ${marca}, más especifico es un ${modelo}`);
}

extraeImprime(coche);


//Ejercicio 5 - Desestructuración y Renombramiento
const direccion = {
    calle: 'Av. Siempre Viva',
    ciudad: 'Springfield',
    pais: 'EE.UU.'
    //Preguntar por la familia Simpson, si no estan, deja el paquete donde su vecino Ned Flanders
};

const {calle: nombreCalle, ciudad: nombreCiudad} = direccion;
console.log(`La calle ${nombreCalle} de la Ciudad de ${nombreCiudad}`);