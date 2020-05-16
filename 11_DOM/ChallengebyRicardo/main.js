//Inputs
let preguntaNombre = document.getElementById('preguntaNombre')
let preguntaDireccion = document.getElementById('preguntaDireccion')
let preguntaTelefono = document.getElementById('preguntaTelefono')
let preguntaPizza = document.getElementById('preguntaPizza')
//Card-- respuetas
let textoNombre = document.getElementById('textoNombre')
let textoDireccion = document.getElementById('textoDireccion')
let textoTelefono = document.getElementById('textoTelefono')

//Boton
let boton = document.getElementById('botonOrdenar')
//Card
let card = document.getElementById('card')

// Imagenes de pizza y de advertencia 
let imagenpizza = document.getElementById('imagenpizza')
let imagenpizza2 = document.getElementById('imagenpizza2')
let advertencia = document.getElementById('advertencia')


const ordenar = () => {

    textoNombre.innerHTML = 'Nombre: ' + preguntaNombre.value
    textoDireccion.innerHTML = 'Direccion : ' + preguntaDireccion.value
    textoTelefono.innerHTML = 'Telefono: ' + preguntaTelefono.value
    
    // Aparece la card
    card.classList.remove('none')


    let pizzaReal = preguntaPizza.value
    let compararPizza = pizzaReal.toLowerCase()
   
    if(compararPizza === 'si'){
       imagenpizza.classList.remove('none')
       imagenpizza2.classList.add('none')
       advertencia.classList.add('none')
    }else if(compararPizza === 'no'){
       imagenpizza2.classList.remove('none')
       imagenpizza.classList.add('none')
       advertencia.classList.add('none')
    }else{
       advertencia.classList.remove('none')
       imagenpizza2.classList.add('none')
       imagenpizza.classList.add('none')
    }



} 

botonOrdenar.addEventListener('click', ordenar)