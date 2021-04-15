'use strict'

console.clear();

// OBJETOS - 

var miObjeto = new Object;
miObjeto.valor1 = 1;
miObjeto.valor2 = 2;

// ELIMINAR UNA DE SUS PROPIEDADES
delete miObjeto.valor1;
console.group('valor1' in miObjeto);

