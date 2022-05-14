function calcularAreaTriangulo(Base: number, Altura: number): number {
  let Area = (Base * Altura) / 2;
  return Area;
}
let base: number = 1;
let altura: number = 2;

for (let indice = 0; indice <= 14; indice++) {
  console.log(calcularAreaTriangulo(base, altura));
  base += 1;
  altura += 2;
}

//Realice un programa que devuelva el área del triángulo usando los siguientes pares de base-altura:
//(1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
//Implemente un método llamado calcularAreaTriangulo que reciba dos números por parámetro (uno llamado base y otro altura)
//(base*altura)/2
