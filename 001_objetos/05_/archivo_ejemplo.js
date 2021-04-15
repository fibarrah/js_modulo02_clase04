'use strict'

console.clear();

// OBJETOS - GET y SET

var operacionSuma = {
    resultadoSuma: 0
};

var numerosOperacion = {
    num1: 5,
    num2: 5
};

Object.defineProperties(operacionSuma, {
    'resultado': {get: function(){return this.resultadoSuma; }},
    'sumatoria': {set: function(numeros){this.resultadoSuma = numeros[0] + numeros[1]; }}
});

var numeros = [1, 1];
operacionSuma.sumatoria = numeros;
console.log(operacionSuma.resultado);