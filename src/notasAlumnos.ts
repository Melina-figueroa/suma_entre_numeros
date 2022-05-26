let numAlum: number[] = [];
let vAlumnos: string[] = new Array(numAlum); //nombres de alumnos
let vCantidad: number[] = new Array(numAlum);
let vNota1: number[] = new Array(numAlum);
let vNota2: number[] = new Array(numAlum);
let vNota3: number[] = new Array(numAlum);
let Vnotas_total: number[] = new Array(vNota1, vNota2, vNota3);
let vPromedio: number[] = new Array(Vnotas_total);

function cargar_cantidadAlumnos(): void {
  for (let i: number = 0; i <= numAlum.length; i++) {
    vCantidad[i] = Number(prompt("Ingrese cantidad de alumnos: "));
  }
  for (let i: number = 0; i <= vCantidad.length; i++) {
    vAlumnos[i] = prompt("Nombre y apellido: ");
    vNota1[i] = Number(prompt("Nota 1er trimestre:"));
    vNota2[i] = Number(prompt("Nota 2do trimestre:"));
    vNota3[i] = Number(prompt("Nota 3er trimestre:"));
    Vnotas_total[i] = vNota1[i] + vNota2[i] + vNota3[i];
    vPromedio[i] = Vnotas_total[i] / 3;
    console.log(
      "Alumno/a:",
      vAlumnos[i],

      "Nota primer trimestre ",
      +vNota1[i],
      "Nota segundo trimestre ",
      +vNota2[i],
      "Nota tercer trimestre ",
      +vNota3[i],
      "su promedio es: ",
      vPromedio[i]
    );
  }
}
cargar_cantidadAlumnos();

//Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
//Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
