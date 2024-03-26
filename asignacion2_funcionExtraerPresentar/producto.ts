//Gabriel Alexander De León Lizardo
//Creando una interfaz Producto
interface Producto {
    nombre: string;
    precio: number;
    categoria: string;
    stock: number;
}

//Función que acepta un Producto, extrae propiedades con desestructuración e imprime una descripción
function presentarProducto(producto: Producto): void {
    const {nombre, precio, categoria} = producto;
    console.log(`El producto ${nombre} de la categoría ${categoria} tiene un precio de ${precio} dolares.`);
}

//Creando un objeto de ejemplo
const electronico: Producto = {
    nombre: "Samsung Galaxy S24 Ultra",
    precio: 1500,
    categoria: "smartphone",
    stock: 15
}

//Llamando la función
presentarProducto(electronico);