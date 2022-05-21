function sumar(): number {
  let suma: number = 0;
  for (let indice: number = 0; indice < longitud_arreglo; indice++) {
    suma = suma + arreglo_numero[indice];
  }
  return suma;
}
let longitud_arreglo: number = Number(prompt("Longitud Arreglo"));
let arreglo_numero: number[] = new Array(longitud_arreglo);
for (let indice: number = 0; indice < longitud_arreglo; indice++) {
  arreglo_numero[indice] = Number(prompt("Ingrese numero: "));
}
console.log(sumar());
