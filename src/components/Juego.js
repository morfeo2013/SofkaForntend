import Axios from 'axios'
import React,{useEffect,useState,useContext} from 'react'
import { TemaContext } from "./Context/Usecontext";
export default function Juego() {
    
    /* Permanencia de datos a travez  de la propiedad de React useContext */
    const {setContador} = useContext(TemaContext)
    const {contador} = useContext(TemaContext)
    const {setPuntaje} = useContext(TemaContext)
    const {puntaje} = useContext(TemaContext)


    
  /* guardamos el nombre del jugador en el sessionStorage para guardar puntajes en el backen */
    const nombreJugador=sessionStorage.getItem("nombre");
    

    const [datos,setDatos]=useState([])
    const [arrays,setArrays]=useState([])
    const [pregunta,setPegunta]=useState('')
    const [verdadera,setVerdadera]=useState('')
    const [respuestaJugador,setRespuestaJugador]=useState('')
/*     const [respuesta1,setRespuesta1]=useState([])
    const [respuesta2,setRespuesta2]=useState('')
    const [respuesta3,setRespuesta3]=useState('')
    const [respuesta4,setRespuesta4]=useState('') */

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
     setPuntaje(puntaje+100)     
     setDatos(respuesta.data)
     setPegunta(respuesta.data.pregunta)
     setArrays(respuesta.data.arr)
     setVerdadera(respuesta.data.verdadera)
    /* const {opc1,opc2,opc3,opc4} */
    Object.assign({}, arrays)} 
     
    else if(contador===3)
    {const respuesta=await Axios.get('http://localhost:4000/Nivelgaviota')   
    setPuntaje(puntaje+100)   
    setDatos(respuesta.data)
    setPegunta(respuesta.data.pregunta)
    setArrays(respuesta.data.arr)
    setVerdadera(respuesta.data.verdadera)
   /* const {opc1,opc2,opc3,opc4} */
   Object.assign({}, arrays)} 

   else if(contador===4)
   {const respuesta=await Axios.get('http://localhost:4000/Nivelcondor')   
   setPuntaje(puntaje+100)   
   setDatos(respuesta.data)
   setPegunta(respuesta.data.pregunta)
   setArrays(respuesta.data.arr)
   setVerdadera(respuesta.data.verdadera)
  /* const {opc1,opc2,opc3,opc4} */
  Object.assign({}, arrays)} 

  else if(contador===5)
  {const respuesta=await Axios.get('http://localhost:4000/Nivelaguila')
  setPuntaje(puntaje+100)      
  setDatos(respuesta.data)
  setPegunta(respuesta.data.pregunta)
  setArrays(respuesta.data.arr)
  setVerdadera(respuesta.data.verdadera)
 /* const {opc1,opc2,opc3,opc4} */
 Object.assign({}, arrays)} 



    }
  console.log(pregunta+verdadera,( Object.assign({}, arrays)))


  const EnviarRespuesta = async (evaluar) => {
   

  if(evaluar===respuestaJugador){
   
   
/* aca se coloca la logica para cambiar por medio del usecotext la opcion para pasar de nivel */



  }
  else{/* salir() */}


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
            
            <form /* onSubmit={EnviarRespuesta} */>
            
            <div className="contaainer text-center">
            <button className="btn btn-primary" type=""  key="1"
                  onClick={
                    EnviarRespuesta()}
                  
                  >
                    {arrays[0]}
                  </button>

                  <button className="btn btn-primary" type="" key="2"
                /*   onClick={() =>
                    EnviarRespuesta(respuesta1)} */
                  
                  >
                    {arrays[1]}
                  </button>

                  <button className="btn btn-primary" type="" key="2"
                /*   onClick={() =>
                    EnviarRespuesta(respuesta1)} */
                  
                  >
                    {arrays[2]}
                  </button>

                  <button className="btn btn-primary" type="" key="2"
                /*   onClick={() =>
                    EnviarRespuesta(respuesta1)} */
                  
                  >
                    {arrays[3]}
                  </button>


            </div>
            
           

             <div className="container text-center">
             <button type="button" class="m-5 btn btn-info" onClick={() => salir()}>Salir</button>
             </div>
           
             </form>

        </div>
    )
}
