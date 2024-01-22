const _ = require('lodash');

function sumarELementos(array) {
    return _.sum(array);
}

const numeros = [1, 2, 3, 4, 5];
const resultado = sumarELementos(numeros);

console.log(`La suma de los elementos es: ${resultado}`);
