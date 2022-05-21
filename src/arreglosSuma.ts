function sumar(): number {
  let suma: number = 0;
  for (let indice: number = 0; indice <= arreglo_long; indice++) {
    suma = numero1[indice] + numero2[indice];
  }
  return suma;
}
let arreglo_long: number[] = new Array(6);
let numero1: number[] = new Array(valor1);
let numero2: number[] = new Array(valor2);

for (let indice: number = 0; indice <= arreglo_long; indice++) {
  numero1[indice] = Number(prompt("Ingrese numero1: "));
}
