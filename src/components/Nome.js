import "./Nome.css";
import { useRef, useEffect } from "react";

const Nome = ( { dado, updateCampo } ) => {
    const containerRef = useRef(null);

    useEffect(() => {

    const timer = setTimeout(() => {
        if (containerRef.current) {

            containerRef.current.scrollTop = 0;
        }
    }, 100); 

    return () => clearTimeout(timer);
    
  });

    return(
        <div>
            <div ref={containerRef} className="textao">
                <p style={{fontSize:"1.8vh"}}>
                No dia 29/11/2024, foi iniciada a <strong>Turnê Especial de Natal</strong> do Jão.
                <br/><br/>
                Ela contou com 12 datas no total e levou a magia natalina por nove estados do Brasil.
                <br/><br/>
                Fãs de todo o país entraram no clima natalino junto com a turnê: fantasias, previsões de <i>cover</i> e projetos de fã para fã marcaram a época.
                <br/><br/>
                Em comemoração a uma turnê tão... <i>especial</i>, criei esse site para que <strong>você</strong> possa relembrar e escolher seus momentos favoritos dos shows.
                <br/><br/>
                Mas, antes de continuarmos,
                </p>
            </div>
            <h1>Qual é o seu nome?</h1>
        <input type="text" maxLength={20} className="escreva" value={dado.nome} onChange={(e) => updateCampo("nome", e.target.value)} placeholder="Escreva seu nome ou @..."></input></div>
    )
}

export default Nome;