import React, { useState } from 'react'

export default function IngresarJugador() {
      
       const [nombre,setNombre] = useState('')









    return (
        <div className="container text-center">
            <div className="col-md-8 pt-4 mx-auto">
                <div className="card card-dody">
                    <h3>Ingresar Datos</h3>                
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" value={nombre} onChange={e=>setNombre(e.target.value)} placeholder="Nombre" required/>
                        </div>
                       
                        
                    
                           
                           <button type="submit" className="btn btn-primary">
                            Guardar
                           </button> 
                                                             
                    </form>
                </div>
            </div>
        </div>
    )
}
