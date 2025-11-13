import "./Figurinos.css";
import { useState, useEffect, useRef } from "react";

const Figurinos = ({updateCampo, children}) => {

    
const containerRef = useRef(null);
    useEffect(() => {

    const timer = setTimeout(() => {
        if (containerRef.current) {

            containerRef.current.scrollTop = 0;
        }
    }, 100); 

    return () => clearTimeout(timer);
    
  }, [step]);

    const imagens = {
        azul: "umano/bases/bpijamas/brazul.png",
        rosa: "umano/bases/bpijamas/brosa.png",
        verde: "umano/bases/bpijamas/bverde.png",
    };

    const [imagem, setImagem] = useState(imagens.azul);
    const [rotacao, setRotacao] = useState(0);

    const trocarImagem = (e) => {
        const novaImagem = imagens[e.target.value];
        setImagem(novaImagem);

        const valor = (Math.random() * 6) - 3; 
        setRotacao(valor);
    };

    return(
        <div ref={containerRef} className="dentro">
            <div className="campofig">
            <h2>...com figurinos <i>especiais</i>...</h2>
            <p>Numa turnê em que o palco é a casa do Jão, nada mais justo do que ele usar roupas confortáveis como... pijamas!</p>
            <p><strong>Qual foi o seu pijama favorito?</strong></p>
            <br></br>
            <div style={{textAlign:"center"}}>
                <div style={{margin: 0, padding: 0, transform: `rotate(${rotacao}deg)`, display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img src={imagem} style={{width:"110%"}}/>
                </div>
            <select className="selectfig" onChange={(e) => {
                trocarImagem(e);
                updateCampo("pijama", e.target.value);
            }}>
                <option value="azul">Azul</option>
                <option value="rosa">Rosa</option>
                <option value="verde">Verde</option>
            </select>
            <div style={{width: "100%",display: "flex", alignItems:"center"}}>
                {children}
            </div>
            </div>
            
        </div>
        </div>
        
    );
}

export default Figurinos;