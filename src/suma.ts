function dibujar_linea() {
  let linea = "-";
  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}
let num1: number = Number(prompt("Ingrese Primer valor."));
let num2: number = Number(prompt("Ingrese segundo valor."));
let opcion: number = Number(
  prompt(
    "Para SUMAR ingrese [1], Para RESTAR ingrese [2], Para MULTIPLICAR ingrese [3], Para DIVIDIR ingrese [4], Para FINALIZAR ingrese cualquier tecla."
  )
);
let resultado: number = 0;

switch (opcion) {
  case 1:
    resultado = num1 + num2;
    dibujar_linea();
    console.log("El resultado de su suma es:", resultado);
    dibujar_linea();
    break;

  case 2:
    resultado = num1 - num2;
    dibujar_linea();
    console.log("El resultado de su resta es de:", resultado);
    dibujar_linea();
    break;

  case 3:
    resultado = num1 * num2;
    dibujar_linea();
    console.log("El resultado de su multiplicación es:", resultado);
    dibujar_linea();
    break;

  case 4:
    resultado = num1 / num2;
    dibujar_linea();
    console.log("El resultado de su división es:", resultado);
    dibujar_linea();
    break;
  default:
    console.log("Fin");
}
