'use strict'

console.clear();

// Objetos, ¿Como crearlos?

// PRIMERA DECLARACION
var miVehiculos = new Object();

// PRIMERA FORMA DE INICIARLO
miVehiculos.marca = "NISSAN";
miVehiculos.modelo = "VERSA";
miVehiculos.anio = 2019;

// UN CONSTRUCTOR
var miVehiculoWithInit = {
    marca: 'NISSAN',
    modelo: 'VERSA',
    anio: 2019
}

// CUANDO LA PROPIEDAD NO ESTA DEFINIDA
console.log(miVehiculoWithInit.color);

// CUANDO LA PROPIEDAD ESTA DEFINIDA
console.log(miVehiculoWithInit.marca);

// ASIGNAR NUEVOS VALORES
miVehiculoWithInit['marca'] = 'CHREVROLET';
console.log(miVehiculoWithInit['marca']);

var btnImpresion = document.querySelector("#miBoton");
btnImpresion.addEventListener('click',function(){
    console.log(viewProperties(miVehiculoWithInit,"miVehiculoWithInit"));
});

// APARTADO DE LAS FYUNCIONES
function viewProperties(obj, objNombre){
    var resultado = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
    resultado += objNombre + "." + i + " = " + obj[i] + "\n";
            
        }
    }

    return resultado;
}