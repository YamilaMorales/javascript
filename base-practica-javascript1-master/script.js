import { barcelona, roma, paris, londres } from './ciudades.js'


//obtener los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregar un evento click a cada enlace.
//addEventListener es como el onclik que usamosn en el html pero aca lo usamos en el js directamente
enlaces.forEach(
    function (enlace) {
        enlace.addEventListener('click', function () {
            //Remover cla clase active de todos los enlaces
            enlaces.forEach(function (enlace) {
                enlace.classList.remove('active')
            })




            //Agregat active al qenlace actual
            this.classList.add('active')

            //traer la informacion del objeto correspondiente a la eleccion
            let contenido = obtenerContenido(this.textContent)
            tituloElemento.innerHTML = contenido.titulo
            subtituloElemento.innerHTML = contenido.subtitulo
            parrafoElemento.innerHTML = contenido.parrafo
            precioElemento.innerHTML = contenido.precio


        });
    });



//funcion para traer la informcaicon correcta desde cuidades.js

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };

    return contenido[enlace];
}

