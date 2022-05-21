function escribir_numeros() {
  for (let indice: number = 0; indice <= 4; indice++) {
    numeros[indice] = Number(prompt("Ingrese numero: "));
  }
}
function leer_numeros() {
  for (let indice: number = 0; indice <= 4; indice++) {
    console.log(numeros[indice]);
  }
}
let numeros: number[] = new Array(5);
escribir_numeros();
leer_numeros();
