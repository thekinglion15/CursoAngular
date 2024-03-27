//Gabriel Alexander De León Lizardo
//Interface para crear el objeto
interface PerfilDeUsuario {
    nombre: string;
    edad: number;
    pais: string;
}

//Función para crear el perfil
function crearPerfilDeUsuario(nombre: string, edad: number, pais: string = "No especificado"): PerfilDeUsuario {
    const perfil: PerfilDeUsuario = {nombre, edad, pais}
    return perfil;
}

//Ejemplos
const perfil1 = crearPerfilDeUsuario("Enmanuel", 27, "República Dominicana");
const perfil2 = crearPerfilDeUsuario("Zekatek 'Habibi' turajá", 32);

console.log(perfil1);
console.log(perfil2);
