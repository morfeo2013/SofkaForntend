import React , { useEffect } from 'react'

export default function Juego() {

    const nombreJugador=sessionStorage.getItem("nombre");

    const salir = () => {
        sessionStorage.clear();
        window.location.href = '/'
      };
      
        console.log(nombreJugador)


       /*  sessionStorage.clear(); */
    return (
        <div>
            <h1>Juego</h1>
            <button type="button" class="btn btn-primary" onClick={() => salir()}>Primary</button>
        </div>
    )
}
