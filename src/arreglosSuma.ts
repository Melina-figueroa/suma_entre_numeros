function ingresar_numeros() {
  for (let indice: number = 0; indice < 6; indice++) {
    v1[indice] = Number(prompt("Ingrese numero1: "));
  }
  for (let indice: number = 0; indice < 6; indice++) {
    v2[indice] = Number(prompt("Ingrese numero 2: "));
  }
}
function sumar() {
  let suma: number[] = new Array(6);
  for (let indice: number = 0; indice < 6; indice++) {
    suma[indice] = v1[indice] + v2[indice];
    console.log(suma[indice]);
  }
}
let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
//let suma: number[] = new Array(6);

ingresar_numeros();
sumar();
