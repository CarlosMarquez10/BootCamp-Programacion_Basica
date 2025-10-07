// las funciones closure es cuando una funcion recuerda las variables se su entorno incluso despues de que la funcion externa haya terminado.

// ejemplo de una funcion closure

function crearContador(){

    let contador = 0; //iniciamos una veriable en cero

    return function(){
        contador++;
        return contador;
    };
}

const contar = crearContador();

console.log(contar());
console.log(contar());
console.log(contar());
