// Variables del titulo y formularios
let titulo = document.getElementById('titulo')
let parrafo = document.getElementById('parrafo')
let boton = document.getElementById('boton')
let nombre = document.getElementById('nombre')
let direccion = document.getElementById('direccion')
let pina = document.getElementById('pina')

// Variables de la tarjeta
let nombrecard = document.getElementById('nombrecard')
let direccioncard = document.getElementById('direccioncard')
let pinacard = document.getElementById('pinacard')
let tarjeta = document.getElementById ('tarjeta')


// Aqui paso los datos de los formularios a la tarjeta
const cambio = () => {
titulo.innerHTML = 'Excelente tu orden esta siendo preparada!! :D'
parrafo.innerHTML = 'Tiempo estimado: 30 min!'
nombrecard.innerHTML = nombre.value
direccioncard.innerHTML = direccion.value
pinacard.innerHTML = pina.value
}

// Evento del boton para hacer el cambio
boton.addEventListener('click', cambio)