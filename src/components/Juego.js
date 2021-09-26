import Axios from 'axios'
import React,{useEffect,useState,useContext} from 'react'
import { TemaContext } from "./Context/Usecontext";
export default function Juego() {
    
    /* Permanencia de datos a travez  de la propiedad de React useContext */
    const {setContador} = useContext(TemaContext)
    const {contador} = useContext(TemaContext)
    const {setPuntaje} = useContext(TemaContext)


    
  /* guardamos el nombre del jugador en el sessionStorage para guardar puntajes en el backen */
    const nombreJugador=sessionStorage.getItem("nombre");
    

    const [datos,setDatos]=useState([])
    const [arrays,setArrays]=useState([])
    const [pregunta,setPegunta]=useState('')
    const [verdadera,setVerdadera]=useState('')
    const [respuestaJugador,setRespuestaJugador]=useState('')

    useEffect(()=>{
        Cuestionario()
    },[])


    const Cuestionario=async()=>{

     if (contador===1){
        const respuesta=await Axios.get('http://localhost:4000/NivelCanario')      
        setDatos(respuesta.data)
        setPegunta(respuesta.data.pregunta)
        setArrays(respuesta.data.arr)
        setVerdadera(respuesta.data.verdadera)
       /* const {opc1,opc2,opc3,opc4} */
       Object.assign({}, arrays)

     }else if(contador===2)
     {const respuesta=await Axios.get('http://localhost:4000/Nivelpaloma')      
     setDatos(respuesta.data)
     setPegunta(respuesta.data.pregunta)
     setArrays(respuesta.data.arr)
     setVerdadera(respuesta.data.verdadera)
    /* const {opc1,opc2,opc3,opc4} */
    Object.assign({}, arrays)} 
     
    else if(contador===3)
    {const respuesta=await Axios.get('http://localhost:4000/Nivelgaviota')      
    setDatos(respuesta.data)
    setPegunta(respuesta.data.pregunta)
    setArrays(respuesta.data.arr)
    setVerdadera(respuesta.data.verdadera)
   /* const {opc1,opc2,opc3,opc4} */
   Object.assign({}, arrays)} 

   else if(contador===4)
   {const respuesta=await Axios.get('http://localhost:4000/Nivelcondor')      
   setDatos(respuesta.data)
   setPegunta(respuesta.data.pregunta)
   setArrays(respuesta.data.arr)
   setVerdadera(respuesta.data.verdadera)
  /* const {opc1,opc2,opc3,opc4} */
  Object.assign({}, arrays)} 

  else if(contador===5)
  {const respuesta=await Axios.get('http://localhost:4000/Nivelaguila')      
  setDatos(respuesta.data)
  setPegunta(respuesta.data.pregunta)
  setArrays(respuesta.data.arr)
  setVerdadera(respuesta.data.verdadera)
 /* const {opc1,opc2,opc3,opc4} */
 Object.assign({}, arrays)} 



    }
  console.log(pregunta+verdadera,( Object.assign({}, arrays)))


  const EnviarRespuesta = async (e) => {


  const nombre= sessionStorage.setItem( "nombre");

    e.preventDefault();
    const UsuarioNuevo = {
        nombre,respuesta

    }
    const respuesta = await Axios.post('http://localhost:4000/jugador', UsuarioNuevo)

    /* recive el mensaje desde el backen para evaluar si ya existe */
    const mensage = respuesta.data.mensage


    /* si e mensaje exite vuelve a la pagina de inicio */
    if (mensage === 'fallaste') {

        salir()

        /* Si es un jugador nuevo ingresa al juego */
    } else {
       
        window.location.href = '/jugar'
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





/* salimos y borramos el nombre del usuario */
    const salir = () => {

      




        sessionStorage.clear();
        window.location.href = '/'
      };
      
        console.log(nombreJugador)


       /*  sessionStorage.clear(); */
    return (
        <div>
            
            <div className="container text-center">
            <h1>Pregunta:</h1>
            <h2 className="text-color-danger"> {pregunta}</h2>
            </div>
            
            <form onSubmit={EnviarRespuesta}>
            
            <div className="contaainer text-center">
            <button type="button" class="m-5 btn btn-primary"> {arrays[0]}</button>
            <button type="button" class="m-5 btn btn-success"> {arrays[1]}</button>
            <button type="button" class="m-5 btn btn-danger"> {arrays[2]}</button>
            <button type="button" class="m-5 btn btn-warning"> {arrays[3]}</button>
            

            </div>
            
           

             <div className="container text-center">
             <button type="button" class="m-5 btn btn-info" onClick={() => salir()}>Salir</button>
             </div>
           
             </form>

        </div>
    )
}
