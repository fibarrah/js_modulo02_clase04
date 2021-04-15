'use strict'

console.clear();

// ARREGLOS

//APARATDO DE EVENTOS

// APARTADO DE FUNCIONES
var categorias = ["Accion","Comedia","Familia"];
var peliculas = ["Pelicula 1","Pelicula 2","Pelicula 3"];

var netflix = [categorias, peliculas];

// aartado de operaciones
var btn_addElmentos = document.querySelector("#addElementos");
btn_addElmentos.addEventListener('click',function(){
    console.log(peliculas);
    var peticionElemento = prompt("Intoduce tu pelicula:", "");
    peliculas.push(peticionElemento);
    console.log(peliculas);
});

// TAREA
var btn_printElemento = document.querySelector("#printElementos");


// ELIMINAR EL ULTIMO REGUISTRO
var btn_eraseElemento = document.querySelector("#eraseLastElement");
btn_eraseElemento.addEventListener('click',function(){
    var indice = parseInt(prompt("Intoduce tu pelicula:", ""));
    if(indice > -1 && indice <= peliculas.length){
        peliculas.splice(indice,1);
        console.clear();
        console.log(peliculas);
    }else{
        alert("No se encuentra el ID de la pelicula");
    }
});

// EXPORTAR A UNA CADENA VALIDA
var btn_setCadena = document.querySelector("#setListado");
btn_setCadena.addEventListener('click',function(){
    var cadena_ = peliculas.join();
    console.clear();
    console.log(cadena_);
});


// ORDERN ARREGLO EN MANERA ALFABETICA
var btn_ordenarLista = document.querySelector("#orderListado");
btn_ordenarLista.addEventListener('click',function(){
    console.log(peliculas);
    peliculas.sort();
    console.clear();
    console.log(peliculas);
});

var btn_ordenarReverso = document.querySelector("#reverseListado");
btn_ordenarReverso.addEventListener('click',function(){
    console.log(peliculas);
    peliculas.reverse();
    console.log(peliculas);
});