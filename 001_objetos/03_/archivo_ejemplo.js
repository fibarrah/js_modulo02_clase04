'use strict'

console.clear();

// OBJETOS - METODO OBJECT.CREATE

// ENCAPSULACION

var mascota = {
    tipo: 'Gatos',
    verTipo: function(){
        console.log(this.tipo);       
    },
    color: 'Gris y Blanco',
    verColor: function(){
        console.log(this.color);  
    }
};

// DECLARAR UN TIPO DE METODO
var mascota1 = Object.create(mascota);
mascota1.verTipo();
mascota1.verColor();

// VAMOS A CREAR UN NUEVO TIPO
var perros = Object.create(mascota);
perros.tipo = "Perros";
perros.verTipo();