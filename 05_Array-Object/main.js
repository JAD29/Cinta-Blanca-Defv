//Array o arreglo
    //            0       1         2         3,  Siempre se empieza desde 0
var colores = ["azul", "rojo", "amarillo", "verde"]

//console.log(colores)
//console.log(colores[0])
//console.log(colores[2])
//console.log(colores[3])

colores[4] = "morado"
//console.log(colores)
//console.log(colores[4])

//push ------> Suma un elemento al final del arreglo
colores.push("rosa")
colores.push("cafe")
colores.push()
//console.log(colores)


//pop -----------------> Borra el ultimo elemento

colores.pop()
//console.log(colores)

//splice ----- borra elementos especificos

colores.splice(4, 0)
//console.log(colores)

//----- cosas nuevas
//-------------pocision, elemento a borrar, sustituirlo
colores.splice(2, 1, "cafe")
//console.log(colores)


//Objetos - Object

var persona = {
    nombre : "Joseñññ",
    edad : "25",
    telefono : "551561211654",
    direcccion : "Acayucan",
    musica : ["rock", "regueton", "k-pop"],
    peliculas : {
        accion : ["MI", "Ronnie", "DdM"],
        drama : ["titanic", "Match point"],
        romcom : ["la propuesta", "Yo antes de ti", "one day", "cassanovias"],
        terror : {
                gore : "Destino final",
                slasher : "hallowen",
                vampiros : ["crepusculo", "VH"]
        }
    }
}



console.log(persona.nombre, persona.edad)
console.log(persona.musica[2])
console.log(persona.peliculas.accion[2])
console.log(persona.peliculas.terror.gore)
console.log(persona.peliculas.terror.vampiros[0])