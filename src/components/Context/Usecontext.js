import React ,{useState} from 'react'
/* se creauna constante para estructurar el createContext la cual sera incorporada en el app.js para ser compartido por los demas compoentes, importante exportarla*/
export const TemaContext = React.createContext()

/* ingresamos los props para ser renderizado en otros componentes */
function Usecontext(props) {

    /* se crea los estados a ser compartidos  por los componentes */
    const [contador, setContador]= useState()
    const [puntaje, setPuntaje]= useState()

 
    
    return (

        /*vamos a devolver el provaide para todos los componentes hijos  
        en value especifica como un objeto que se entra a evaluar*/
       <TemaContext.Provider value= {{contador, setContador,puntaje, setPuntaje}}>
       
       {/* al proveedor todo lo que se ponga lo renderiza */}
          {props.children}
       </TemaContext.Provider>
    )
}

export default Usecontext
