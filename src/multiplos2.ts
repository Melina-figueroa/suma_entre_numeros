function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  }
  return false;
}
let primer_valor: number = Number(prompt("Ingrese primer dato"));
let segundo_valor: number = Number(prompt("Ingrese segundo dato"));
let multiplo: boolean = esMultiplo(primer_valor, segundo_valor);
if (multiplo === true) {
  console.log("Es multiplo");
} else {
  console.log("No es multiplo");
}

//Cree un método esMultiplo con 2 parámetros que devuelva el
//valor lógico verdadero o falso según si el primer número que
//se indique como parámetro es múltiplo del segundo
// Recuerde que un numero es múltiplo de otro si al dividirlo su
//resto es cero
// Recuerde que la operación mod permite saber si el resto de
//una división es cero
