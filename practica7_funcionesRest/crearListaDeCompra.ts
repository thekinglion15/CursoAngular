//Gabriel Alexander De León Lizardo
//Interface para crear el objeto
interface ListaDeCompra {
    [item: string]: boolean;
}

//Función para crear la lista de compra
function crearListaDeCompra(...items: string[]): ListaDeCompra {
    const listaDeCompra: ListaDeCompra = {};

    for(const item of items) {
        listaDeCompra[item] = false;
    }

    return listaDeCompra;
}

//Ejemplos
const lista = crearListaDeCompra("Carne", "Tortilla", "Spaguetti", "Lasagna", "Queso");
console.log(lista);