//Estructura base

//if(condicion){
 //   bloque de codigo si la condicion se cumple
//              }else {
 // Bloque de codigo si no se cumple la condicion
//                    }

//let num = 10

//if(num === '10'){
    //console.log('Es verdad')
//}else{
    //console.log('Es falso')
//}

//Investigar que es el MODULO
// Decir si un numero es par o impar


// let num = 10
// let pregunta = Number(prompt('Ingrese su numero'))

// if(pregunta % 2 === 0) {
//     console.log (pregunta + ' ' + ' Es par');
//   }
//   else if(pregunta %2===1){
//     console.log (pregunta + ' ' + 'Es impar');
//   }else{
//       console.error('Datos incorrectos')
//   }

// let edad = Number(prompt('Ingresa tu edad'))

// if(edad >=18 && edad <= 80){
//     console.log('Puedes conducir')
// }else if (edad === 16 || edad === 17){
// console.log('Puedes sacar tu permiso')  
// }else if (edad > 0 || edad < 16 || edad > 81) {
//     console.log('No puedes conducir')
// }else {
//     console.error('Ingresa los datos de nuevo')
// }
    
// Juego de Piedra, papel o tijera llava 9 condicionales
// prompt de jugador 1 y otro de jugador 2 



let jugador1 = prompt('Jugador1 elige: Piedra,Papel o Tijera').toLowerCase()
let jugador2 = prompt('Jugador2 elige: Piedra, Papel o Tijera').toLowerCase()

if(jugador1 === jugador2) {
    console.log('Empate')
}else if (jugador1 === 'piedra' && jugador2 === 'tijera'){
    console.log('P1 gane porque piedra le gana a tijera')
}else if (jugador1 === 'papel'  && jugador2 === 'piedra'){
    console.log('P1 gana porque papel le gana a piedra')
}else if (jugador1 ==='tijera' && jugador2 === 'papel'){
    console.log('P1 gana porque tijera le gana a papel')
}else if (jugador1 ==='papel' && jugador2 === 'piedra'){
    console.log('P2 gane porque papel le gana a piedra')
}else if (jugador1 ==='tijera' && jugador2 === 'piedra'){
    console.log(' P2 gana porque Piedra le gana a tijera')
}else if (jugador1 ==='papel' && jugador2 === 'tijera'){
    console.log(' P2 gana porque Tijera le gana a papel')
}else{
    console.error('Datos incorrectos')
}