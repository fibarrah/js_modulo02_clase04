'use strict'

console.clear();

// OBJETOS - FUNCION CONSTRUCTORA

// CREAR UNA FUNCION DE INICIO
function miVehiculo(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

// CREAR LOS OBJETOS
var obj1 = new miVehiculo('MARCA1','MODELO1',2019);
var obj2 = new miVehiculo('MARCA2','MODELO2',2020);


function userVehiculo(nombre, anios, sexo){
    this.nombre = nombre;
    this.anios = anios;
    this.sexo = sexo;
}

var usuario1 = new userVehiculo('nombre1',30,"M");
var usuario2 = new userVehiculo('nombre2',40,"F");

function miVehiculo(marca, modelo, anio, usuario){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.usuario = usuario;
}

var obj1 = new miVehiculo('MARCA1','MODELO1',2019, usuario1);
var obj2 = new miVehiculo('MARCA2','MODELO2',2020, usuario2);

console.log(obj2.usuario.nombre);
