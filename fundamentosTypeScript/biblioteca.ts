//Creando una interfaz Libro
interface Libro {
    titulo: string;
    autor: string;
    anioPublicacion: number;
    estaDisponible: boolean;
}

//Definiendo un array biblioteca que almacene objetos del tipo Libro
const biblioteca: Libro[] = []

//Función para crear un nuevo libro y agregarlo al array biblioteca
function agregarLibro(titulo: string, autor: string, anioPublicacion: number, estaDisponible: boolean) {
    const nuevoLibro: Libro = {titulo, autor, anioPublicacion, estaDisponible};
    biblioteca.push(nuevoLibro);
}

//Función para buscar un libro por su título
function buscarLibroPorTitulo(titulo: string): Libro | null {
    for(let i = 0; i < biblioteca.length; i++) {
        if(biblioteca[i].titulo === titulo) {
            return biblioteca[i];
        }
    }

    return null;
}

//Función para listar todos los libros disponibles en la biblioteca
function listarLibros() {
    for (const libro of biblioteca) {
        if(libro.estaDisponible) {
            console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}, Año de publicación: ${libro.anioPublicacion}`);
        }
    }
}

//Ejemplo de uso
agregarLibro("El Hobbit", "J.R.R. Tolkien", 1937, true);
agregarLibro("1984", "George Orwell", 1949, false)

const libro = buscarLibroPorTitulo("El Hobbit");
console.log(libro);

listarLibros();