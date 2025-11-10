import React from "react";
import './Titulo.css'

const Titulo = ({step}) => {
    const base = process.env.PUBLIC_URL;

    return(
        <div className={`tcontainer tcontainer${step}`} style={{zIndex: 10}}>
            <img className="titulo"  src={`${base}/umano/bases/bfundos/btitulo.png`}/>
        </div>  
    )
}

export default Titulo;