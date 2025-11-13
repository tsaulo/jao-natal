import "./Comodo.css";
import { useState, useEffect, useRef } from "react";

const containerRef = useRef(null);

const Comodo = ({nome, updateCampo, children}) => {

    useEffect(() => {

    const timer = setTimeout(() => {
        if (containerRef.current) {

            containerRef.current.scrollTop = 0;
        }
    }, 100); 

    return () => clearTimeout(timer);
    
  });
  
    const imagens = {
        banheiro: "umano/bases/blocais/bbanheiro.png",
        entrada: "umano/bases/blocais/bporta.png",
        quarto: "umano/bases/blocais/bquarto.png",
        sala: "umano/bases/blocais/bsala.png",
    };

    const [imagem, setImagem] = useState(imagens.entrada);
    const [rotacao, setRotacao] = useState(0);

    const trocarImagem = (e) => {
        const novaImagem = imagens[e.target.value];
        setImagem(novaImagem);

        const valor = (Math.random() * 6) - 3; 
        setRotacao(valor);
    };

    return(
        <div ref={containerRef} className="dentrocom">
            <div className="campo">
            <h2>Olá, <i>{nome}</i>! A casa é sua!</h2>
            <p>Falando em casa, um dos pontos mais marcantes da turnê foi a estrutura do palco em formato de casa.</p>
            <p><strong>Qual foi o seu cômodo favorito do palco?</strong></p>
            <br></br>
            <div style={{textAlign:"center"}}>
                <div style={{margin: 0, padding: 0, transform: `rotate(${rotacao}deg)`, display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img src={imagem} style={{width:"110%"}}/>
                </div>
            <select onChange={(e) => {
                trocarImagem(e);
                updateCampo("comodo", e.target.value);
            }}>
                <option value="entrada">Entrada</option>
                <option value="sala">Sala</option>
                <option value="quarto">Quarto</option>
                <option value="banheiro">Banheiro</option>
            </select>
            <div style={{width: "100%",display: "flex", alignItems:"center"}}>
                {children}
            </div>
            </div>
            
        </div>
        </div>
        
    );
}

export default Comodo;