function cargarDatos(arrayProductos: string[]): void {
  for (let i: number = 0; i < arrayProductos.length; i++) {
    let productos: string = prompt(
      "Ingrese productos " + [i] + " en el carrito"
    );
    arrayProductos[i] = productos;
  }
}
function cargarPrecio(arrayPrecioProducto: number[]): void {
  for (let i: number = 0; i < arrayPrecioProducto.length; i++) {
    let precio: number = Number(prompt("Ingrese Precio de " + [i]));
    while (precio < 0) {
      precio = Number(prompt("Ingrese Precio de " + [i]));
    }
    arrayPrecioProducto[i] = precio;
  }
}
function cargarCantidad(arrayCantProd: number[]): void {
  for (let i: number = 0; 0 < arrayCantProd.length; i++) {
    let cantidad: number = Number(
      prompt("Ingrese cantidad de " + [i] + " a llevar")
    );
    while (cantidad < 0) {
      cantidad = Number(prompt("Ingrese Precio de " + [i]));
    }
    arrayCantProd[i] = cantidad;
  }
}

function obtenerTotal(arrayPrecio: number[], arrayCant: number[]): number {
  let total: number = 0;
  for (let i: number = 0; i < arrayPrecio.length; i++) {
    total = total + Number(arrayPrecio[i]) + Number(arrayCant[i]);
  }
  return total;
}

function obtenerPremio(arrayTotal: number[]): number {
  if (1000 < 0) {
    console.log("Seguí Participando ");
  } else if (3000 < 2000) {
    console.log("Participa por una moto 0km  ");
  } else if (3000 > 3001) {
    console.log("Participa por un vehículo 0km ");
  } else if (2000 < 1000) {
    console.log("Participa por un TV LED ");
  }
  return;
}

let cantidadProductos: number = Number(
  prompt("Cantidad de productos a comprar ")
);
let vListaProductos: string[] = new Array(cantidadProductos); //arreglo de long
let vPrecio: number[] = new Array(cantidadProductos); // valor unitario de cada producto
let vCantProd: number[] = new Array(cantidadProductos); //cantidad de producto a llevar
let precioTotal: number = 0;

cargarDatos(vListaProductos);
cargarPrecio(vPrecio);
cargarCantidad(vCantProd);
precioTotal = obtenerTotal(vPrecio, vCantProd);
