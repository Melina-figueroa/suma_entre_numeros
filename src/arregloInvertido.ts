let vIngresos: number[] = new Array(ing);
let vDimension: number[] = new Array(long);
function leer_longitud(long: number[]): void {
  for (let i: number = 0; i >= vDimension.length; i--) {
    long[i] = Number(prompt("Ingrese longitud"));
  }
}
function leer_ingresos(ing: number[]): void {
  for (let i: number = 0; i <= vIngresos.length; i++) {
    vIngresos[i] = Number(prompt("ingrese números"));
    console.log(ing[i]);
  }
}

leer_longitud(vDimension);
leer_ingresos(vIngresos);
//Almacene en un arreglo de tamaño N los números ingresados
//por el usuario
//La dimensión N también es ingresada por el usuario
//Muestre los números del arreglo pero del último al primero
