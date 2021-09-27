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
    const [respuesta1,setRespuesta1]=useState('')
    const [respuesta2,setRespuesta2]=useState('')
    const [respuesta3,setRespuesta3]=useState('')
    const [respuesta4,setRespuesta4]=useState('')

  
    useEffect(()=>{
   
     setContador(1)
     setPuntaje(0)
    
  },[])

    useEffect(()=>{
     
        Cuestionario()
    },[contador])


    const Cuestionario=async(c)=>{
     
     if (contador===1){
       
      
        const respuesta=await Axios.get('http://localhost:4000/NivelCanario')      
        setDatos(respuesta.data)
        setPegunta(respuesta.data.pregunta)
        setArrays(respuesta.data.arr)
        setVerdadera(respuesta.data.verdadera)

        

      


       /* const {opc1,opc2,opc3,opc4} */
   

     }else if(contador===2)
   
     {const respuesta=await Axios.get('http://localhost:4000/Nivelpaloma') 
     /* alert('paloma') */
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
 Object.assign({}, arrays)
 
 
   

}

 


    }
   



/*   const EnviarRespuesta = async (array,posicion,cont) => {} */


  const EnviarRespuesta = async (array,posicion) => {
  /*  alert(array[posicion]) */
 /*  alert('entrada inicial     '+array[posicion]+verdadera) */
  if((verdadera===array[posicion])){

    
    await  setContador(contador+1)

    if(contador===5){
    
      alert('felicidades ganaste el Reto')
     salir()
      
    }
/* alert('son repetidos'+contador) */



/* alert(puntaje) */
   
  }else{salir()}

     


}




/* salimos y borramos el nombre del usuario */
    const salir =async () => {


      const UsuarioNuevo = {
            nombre:nombreJugador, puntaje: puntaje

        }
      const respuesta = await Axios.post('http://localhost:4000/jugador', UsuarioNuevo)

        /* recive el mensaje desde el backen para evaluar si ya existe */
        const mensage = respuesta.data.mensage





        sessionStorage.clear();
        
        window.location.href = '/'
      };
      
        console.log(nombreJugador)


       /*  sessionStorage.clear(); */
    return (
        <div>
            
            <div className="container text-center">
            <h1>Bienvenido(a) {nombreJugador}</h1>
            <h1>Ronda de Preguntas #{contador}</h1>
            <h2 className="text-color-danger"> {pregunta}</h2>
            </div>
            
            < >
            
            <div className="contaainer text-center">
            <button className="btn btn-primary" type=""  key="1"
                  onClick={
                   ()=> EnviarRespuesta(arrays,0)}
                  
                  >
                    {arrays[0]}
                  </button>

                  <button className="btn btn-primary" type="" key="2"
                  onClick={() =>
                    EnviarRespuesta(arrays,1)}
                  
                  >
                    {arrays[1]}
                  </button>

                  <button className="btn btn-primary" type="" key="2"
                  onClick={() =>
                    EnviarRespuesta(arrays,2)}
                  
                  >
                    {arrays[2]}
                  </button>

                  <button className="btn btn-primary" type="" key="2"
                  onClick={() =>
                    EnviarRespuesta(arrays,3)}
                  
                  >
                    {arrays[3]}
                  </button>


            </div>
            <div className="container text-center">
            <h1>Acumulado Total #{puntaje}</h1>
            </div>
           

             <div className="container text-center">
             <button type="button" class="m-5 btn btn-info" onClick={() => salir()}>Salir</button>
             </div>
           
             </>

        </div>
    )
}
