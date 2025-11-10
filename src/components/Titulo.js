import React from "react";
import './Titulo.css'

const Titulo = ({step}) => {
    return(
        <div className={`tcontainer tcontainer${step}`} style={{zIndex: 10}}>
            <img className="titulo" src="umano/bases/bfundos/btitulo.png"/>
        </div>  
    )
}

export default Titulo;