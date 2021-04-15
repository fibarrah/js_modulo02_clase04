'use strict'

console.clear();

// OBJETOS - REFERENCIA DE OBJETOS

var productOwner = {
    nombre:  "Nombre 1",
    anios: 29,
    puesto: "Analista de Procesos y Sistemas"
}

var scrumMaster = {
    nombre: "Nombre 2",
    anios: 33,
    puesto: "Analistas y Desarrollador de Software"
}

// REFERENCIAS
productOwner.quienEres = quienEres;
scrumMaster.quienEres = quienEres;

productOwner.quienEres();
scrumMaster.quienEres();

// apartado de las funciones

function quienEres(){
    if(typeof(this.nombre) == 'string'){
        console.log("Hola, soy " + this.nombre);
    }
}