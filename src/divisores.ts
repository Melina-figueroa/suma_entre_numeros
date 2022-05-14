function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor_: number;
  for (divisor_ = 0; divisor_ <= numero; divisor_++) {
    if (numero % divisor_ === 0) {
      cantidad++;
    }
  }
  return cantidad;
}
let ingreso1: number = Number(prompt("Ingrese primer dato"));
let divisor_cant: number = cantidadDeDivisores(ingreso1);

console.log("El número " + ingreso1 + " tiene " + divisor_cant + " divisores.");

//Implemente un método llamado cantidadDeDivisores que
//reciba un número entero y devuelva la cantidad de divisores
//Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5
//Re-utilice el método esMultiplo implementado para el ejercicio
//anterior
