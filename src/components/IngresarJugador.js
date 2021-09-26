
import Axios from 'axios'
import React, { useState } from 'react'

export default function IngresarJugador() {


      /* el estado que enviara al backend el dato del usuario */
       const [nombre,setNombre] = useState('')

       /* se crea el usuario con el puntaje inicial en o */
       const guardarUsuario=async(e)=>{
        e.preventDefault();
        const UsuarioNuevo={
            nombre,puntaje:0
        
        }
        const respuesta=await Axios.post('http://localhost:4000/jugador',UsuarioNuevo)
        const mensage=respuesta.data.mensage
       console.log(mensage)
      
    if (mensage === 'Lo sentimos, pero solo puedes participar una sola vez') {
    
        window.location.href='/'
    
    } else {
    
        window.location.href='/jugar'
    }

    


       /*  Swal.fire({          
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,            
          })
          setTimeout(()=>{
            window.location.href='/'
          },1300) */
        
    }






    return (
        <div className="container text-center">
            <div className="col-md-8 pt-4 mx-auto">
                <div className="card card-dody">
                    <h3>Ingresar Datos</h3>                
                    <form onSubmit={guardarUsuario}>
                        <div className="form-group">
                            <input type="text" className="form-control" value={nombre} onChange={e=>setNombre(e.target.value)} placeholder="Nombre" required/>
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
