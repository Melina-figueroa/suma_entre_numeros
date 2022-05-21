function escribir_numeros(longitud_arreglo: string) {
  for (let indice: string = 0; indice < longitud_arreglo; indice++) {
    arreglo_nombres[indice] = prompt("Ingrese Nombres: ");
  }
}
function leer_nombres(longitud_arreglo: number) {
  for (let indice: number = 0; indice < longitud_arreglo; indice++) {
    console.log(arreglo_nombres[indice]);
  }
}
let longitud_arreglo: number = Number(prompt("Longitud Arreglo"));
let arreglo_nombres: string[] = new Array(longitud_arreglo);

escribir_numeros(longitud_arreglo);
leer_nombres(longitud_arreglo);
