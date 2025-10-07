let nombre = "Carlos";
const edad = 30;
var esEstudiante = true;

let mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y ${esEstudiante ? "soy estudiante" : "no soy estudiante"}.`;
let mensaje_02 = "Hola, mi nombre es " + nombre + ", tengo " + edad + " años y " + (esEstudiante ? "soy estudiante" : "no soy estudiante") + ".";

console.log(mensaje);
console.log(mensaje_02);