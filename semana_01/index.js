const Alumno =require('./Alumno.js');

let nombre = "Jonathan";

const alumno1 = new Alumno (nombre, "Ruiz", 27, "DW");
alumno1.modificarEdad(35);

console.log( alumno1.edad);