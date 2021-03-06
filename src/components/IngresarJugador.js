
import Axios from 'axios'
import React, { useState } from 'react'

export default function IngresarJugador() {


    /* el estado que enviara al backend el dato del usuario */
    const [nombre, setNombre] = useState('')
    const [contador, setContador] = useState(1)
    const [puntaje, setPuntaje] = useState(0)

       /* Permanencia de datos a travez  del sessionStorage */
    const guardarUsuario = async (e) => {
        sessionStorage.setItem(
            "nombre",
            nombre
        );
        
       

        e.preventDefault();
        const UsuarioNuevo = {
            nombre, puntaje: 0

        }
       

     
       


           
            window.location.href = '/jugar'
        

    

    }






    return (
        <div className="container text-center">
            <div className="col-md-8 pt-4 mx-auto">
                <div className="card card-dody">
                    <h3>Ingresar Datos</h3>
                    <form onSubmit={guardarUsuario}>
                        <div className="form-group">
                            <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
                        </div>




                        <button type="submit" className="btn btn-primary">
                            Comenzar
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}
