import "./Comodo.css";
import { useState } from "react";

const Comodo = ({nome, updateCampo, children}) => {
    const imagens = {
        banheiro: "umano/bases/blocais/bbanheiro.jpg",
        entrada: "umano/bases/blocais/bporta.jpg",
        quarto: "umano/bases/blocais/bquarto.jpg",
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
        <div className="dentrocom">
            <div className="campo">
            <h2>Olá, <i>{nome}</i>! A casa é sua!</h2>
            <p>Falando em casa, um dos pontos mais marcantes da turnê foi a estrutura do palco em formato de casa.</p>
            <p><strong>Qual foi o seu cômodo favorito do palco?</strong></p>
            <br></br>
            <div style={{textAlign:"center"}}>
                <div style={{margin: 0, padding: 0, transform: `rotate(${rotacao}deg)`}}>
                    <img src={imagem} style={{width:"100%"}}/>
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