/*TP Introducción a la Programación – COMISIÓN "A" TDF
1)Hacer un programa que simule la compra que hace un cliente en un
supermercado. 
2)El cliente va tener que ingresar por teclado la
a) CANTIDAD de productos que va a llevar.
b)PRODUCTOS que va a comprar. 
c) PRECIO UNITARIO de cada producto.
d)CANTIDAD A COMPRAR DE CADA producto.
3)Finalizada la compra, el programa va a mostrar por pantalla el
a) Detalle de la compra.
b) Productos. 
c) Cantidad. 
d) Precio unitario.  
e) Precio total.
Dependiendo del monto comprado, el cliente participa de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 1000 pero menos de 2000 participa un tv led
• si compra mas de 2000 pero menos de 3000 participa por una
moto 0k
• si compra mas de 3000 participa por un 0km
*/
function cargarDatos(arrayProductos: string[]): void {
  for (let i: number = 0; i < arrayProductos.length; i++) {
    let productos: string = prompt("Ingrese productos en el carrito ");
    arrayProductos[i] = productos;
  }
}
function cargarPrecio(arrayPrecioProducto: number[]): void {
  for (let i: number = 0; i < arrayPrecioProducto.length; i++) {
    let precio: number = Number(
      prompt("Ingrese Precio de " + vListaProductos[i])
    );
    while (precio <= 0) {
      precio = Number(prompt("Ingrese Precio de " + vListaProductos[i]));
    }
    arrayPrecioProducto[i] = precio;
  }
}
function cargarCantidad(arrayCantProd: number[]): void {
  for (let i: number = 0; i < arrayCantProd.length; i++) {
    let cantidad: number = Number(
      prompt("Ingrese cantidad de " + vListaProductos[i] + " a llevar")
    );
    while (cantidad <= 0) {
      cantidad = Number(prompt("Ingrese Precio de " + vListaProductos[i]));
    }
    arrayCantProd[i] = cantidad;
  }
}

function obtenerPrecioTotal(
  arregloPrecios: number[],
  arregloStock: number[]
): number {
  let total: number = 0;
  for (let i: number = 0; i < arregloPrecios.length; i++) {
    total = total + Number(arregloPrecios[i]) * Number(arregloStock[i]);
  }
  return total;
}

function obtenerPremio(compra: number): void {
  if (compra < 1000) {
    console.log("Seguí Participando ");
  } else if (compra > 1000 && compra < 2000) {
    console.log("Participa por un TV LED ");
  } else if (compra > 2000 && compra < 3000) {
    console.log("Participa por una moto 0km  ");
  } else if (compra > 3000) {
    console.log("Participa por un vehículo 0km ");
  }
}

/*function imprimir(dato:string, arrPrint:number): void{
  for(let i: number = 0; i < arrPrint.length;i++){
console.log("dato" +dato)
    }
}*/

let cantidadProductos: number = Number(
  prompt("Cantidad de productos a comprar ")
);
let vListaProductos: string[] = new Array(cantidadProductos); //arreglo de long
let vPrecio: number[] = new Array(cantidadProductos); // valor unitario de cada producto
let vCantProd: number[] = new Array(cantidadProductos); //cantidad de producto a llevar
let precioTotal: number = 0;

console.log("El detalle de su compra es");
cargarDatos(vListaProductos);
console.log("Productos en el carrito" + vListaProductos);
cargarPrecio(vPrecio);
console.log("Precio por unidad" + vPrecio);
cargarCantidad(vCantProd);
console.log("Cantidad " + vCantProd);
precioTotal = obtenerPrecioTotal(vCantProd, vPrecio);
console.log("El total de su compra es" + precioTotal);
console.log(obtenerPremio(precioTotal));
/*console.log(
  "El detalle de su compra es: "  +vListaProductos+
    " cantidad " +
    vCantProd +
    " precio por unidad " +
    vPrecio +
    " Total de compra ",
  +precioTotal
);*/
