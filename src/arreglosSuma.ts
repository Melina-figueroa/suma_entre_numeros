let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let suma: number[] = new Array(6);
function ingresar_numeros() {
  for (let indice: number = 0; indice < 6; indice++) {
    v1[indice] = Number(prompt("Ingrese numero1: "));
  }
  for (let indice: number = 0; indice < 6; indice++) {
    v2[indice] = Number(prompt("Ingrese numero 2: "));
  }
}
function sumar() {
  for (let indice: number = 0; indice < 6; indice++) {
    suma[indice] = v1[indice] + v2[indice];
    console.log("El número: ", v1[indice], "+", v2[indice], "=", suma[indice]);
  }
}
ingresar_numeros();
sumar();
