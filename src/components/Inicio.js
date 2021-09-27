import React from 'react'

/*  Explicacion del juego */

export default function Inicio() {
    return (
        <div className="container text-center">
            <h1>CHALLENGE - CONCURSO DE PREGUNTAS
                Y RESPUESTAS
            </h1>
            <h3>En este reto vamos a modelar un concurso de preguntas y respuestas, la intención es diseñar
                una solución que permita tener un banco de preguntas con diferentes opciones para una
                única respuesta, además cada pregunta debe estar en una categoría o un grupos de
                preguntas similares del mismo nivel, por cada ronda se deberá asignar un premio a conseguir,
                las rondas del juego son nivel que van aumentando en la medida que el jugador gana premios.
            </h3>
        </div>
    )
}
