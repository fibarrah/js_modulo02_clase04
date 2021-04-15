'use strict'

console.clear();

// ARREGLOS
var nombre = "Nombre 1";
var nombres = ["Nombre1","Nombre2","Nombre3"];

var lenguaje_prog = new Array("Java","C#","C++","Javascript");

// APARTADO PARA LAS INTERACCIONES
var btn_impresiones = document.querySelector("#printElemento");
btn_impresiones.addEventListener('click',function(){
    impresionElemento();
});

var btn_impresionesTodos = document.querySelector("#printElementoAll");
btn_impresionesTodos.addEventListener('click',function(){
    imprimirListado();
});

// APARTADO PARA LAS FUNCIOENS

// FUNCION PARA MOSTRAR UN ELEMENTO 
function impresionElemento(){
    var elemento = parseInt(prompt("¿Que elemento quieres imprimir?",0));

    if(elemento > lenguaje_prog.length){
        alert("Introduce el valor correcto no debe ser mayor a: " + lenguaje_prog.length);
    }else{
        alert(lenguaje_prog[elemento]);
    }

}

// FUNCION PARA IMPRIMIR EL LISTADO
function imprimirListado(){

    var titulo_impresion = document.createElement("h3");
    titulo_impresion.append("Lenguaje de Programacion");
    var barra_separacion = document.createElement("hr");

    // CREAR UN LISTADO
    var contenedor_impresion = document.querySelector("#listado");

    contenedor_impresion.append(titulo_impresion);
    contenedor_impresion.append(barra_separacion);

    var ul = document.createElement('ul');
    ul.setAttribute("id","Listado");

    contenedor_impresion.appendChild(ul);

    var t;

    for (var indice = 0; indice < lenguaje_prog.length; indice++) {
        
        var li = document.createElement("li");
        li.setAttribute("class","item");

        ul.appendChild(li);
        t = document.createTextNode(lenguaje_prog[indice]);
        li.innerHTML = li.innerHTML + lenguaje_prog[indice];
        
    }

}