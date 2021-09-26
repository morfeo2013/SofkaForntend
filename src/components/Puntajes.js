import Axios from 'axios'
import React,{useEffect,useState} from 'react'

export default function () {


    const [datos,setDatos]=useState([])

    useEffect(()=>{
        obtenerUsuarios()
    },[])
    const obtenerUsuarios=async()=>{
        const respuesta=await Axios.get('http://localhost:4000/listarjugadores')      
        setDatos(respuesta.data)
    }



    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h4>Usuarios</h4>
                </div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Puntaje</th>
                            
                        </tr>
                    </thead>
                    {
                    datos.map((usuario, i)=>(
                        <tbody key={usuario._id}>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.puntaje}</td>
                                
                                <td>
                                   
                                 
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
                </table>                
            </div>            
        </div>
    )
}

