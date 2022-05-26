let numAlum: number[] = [];
let vAlumnos: string[] = new Array(arreglo_nombres); //nombres de alumnos, se guarda
let vCantidad: number[] = new Array(numAlum);
let vNota1: number[] = new Array(numAlum);
let vNota2: number[] = new Array(numAlum);
let vNota3: number[] = new Array(numAlum);

function cargar_cantidadAlumnos(): void {
  for (let i: number = 0; i <= numAlum.length; i++) {
    arreglo_nombres[i] = Number(prompt("Ingrese cantidad de alumnos: "));
  }
  let longitud_arreglo: number = Number(prompt("Longitud Arreglo"));
  //let arreglo_nombres: string[] = new Array(longitud_arreglo);
  for (let i: number = 0; i <= vAlumnos.length; i++) {
    nombre[i] = prompt("Nombre y apellido: ");
    vNota1[i] = Number(prompt("Nota 1er trimestre:"));
    vNota2[i] = Number(prompt("Nota 2do trimestre:"));
    vNota3[i] = Number(prompt("Nota 3er trimestre:"));
    console.log(
      "Alumno/a:",
      vAlumnos[i],

      "Nota primer trimestre ",
      +vNota1[i],
      "Nota segundo trimestre ",
      +vNota2[i],
      "Nota tercer trimestre ",
      +vNota3[i]
    );
  }
}
function sacar_promedio(): void {
  let vPromedio: number = vNota1[i] + vNota2[i] + vNota3[i] / 3;
}
cargar_cantidadAlumnos();
sacar_promedio();
//Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
//Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
