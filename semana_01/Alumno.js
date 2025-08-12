class Alumno {
    // Atributos
    nombre = "";
    apellido = ""
    edad;
    carrera = "";

    constructor(nombre, apellido, edad, carrera, materias=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;
    }
    // Métodos
    obtenerCarrera(){
        return this.carrera;
    }
    obtenerDatos(){
        return `${this.nombre} ${this.apellido}`; 
    }
    modificarEdad(edad){
        this.edad = edad;
    }
}
// Está variable solo se podrá usar en el archivo Alumno.js
let algo = "texto";
module.exports = Alumno;
