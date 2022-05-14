function calcularPotencia(base: number, exponente: number): number {
  let resultado2: number = 1;
  for (let indice: number = 1; indice <= exponente; indice++) {
    resultado2 = base * resultado2;
  }
  return resultado2;
}
let base: number = Number(prompt("Ingrese base:"));
let exponente: number = Number(prompt("Ingrese exponente:"));
let resultado: number;

resultado = calcularPotencia(base, exponente);
console.log(resultado);
