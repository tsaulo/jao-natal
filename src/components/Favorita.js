import "./Favorita.css";
import { useState } from "react";

const Favorita = ({updateCampo, children}) => {

    const base = process.env.PUBLIC_URL;

    const imagens = {
        acontece: `${base}/umano/bases/bmusicas/bacontece.png`,
        alinhamento: `${base}/umano/bases/bmusicas/balinhamento.png`,
        clarao: `${base}/umano/bases/bmusicas/bclarao.png`,
        covers: `${base}/umano/bases/bmusicas/bcovers.png`,
        doce: `${base}/umano/bases/bmusicas/bdoce.png`,
        enquanto: `${base}/umano/bases/bmusicas/benquanto.png`,
        essa: `${base}/umano/bases/bmusicas/bessa.png`,
        euquero: `${base}/umano/bases/bmusicas/beuquero.png`,
        idiota: `${base}/umano/bases/bmusicas/bidiota.png`,
        julho: `${base}/umano/bases/bmusicas/bjulho.png`,
        labia: `${base}/umano/bases/bmusicas/blabia.png`,
        lambe: `${base}/umano/bases/bmusicas/blambe.png`,
        lobos: `${base}/umano/bases/bmusicas/blobos.png`,
        locadora: `${base}/umano/bases/bmusicas/blocadora.png`,
        mem: `${base}/umano/bases/bmusicas/bmem.png`,
        modo: `${base}/umano/bases/bmusicas/bmodo.png`,
        olhos: `${base}/umano/bases/bmusicas/bolhos.png`,
        radio: `${base}/umano/bases/bmusicas/bradio.png`,
        religiao: `${base}/umano/bases/bmusicas/breligiao.png`,
        santo: `${base}/umano/bases/bmusicas/bsanto.png`,
        tempos: `${base}/umano/bases/bmusicas/btempos.png`,
        triste: `${base}/umano/bases/bmusicas/btriste.png`,
        ultima: `${base}/umano/bases/bmusicas/bultima.png`,
    };

    const [imagem, setImagem] = useState(imagens.lobos);
    const [rotacao, setRotacao] = useState(0);

    const trocarImagem = (e) => {
        const novaImagem = imagens[e.target.value];
        setImagem(novaImagem);

        const valor = (Math.random() * 6) - 3; 
        setRotacao(valor);
    };

    return(
        <div className="dentro">
            <div className="campofav">
            <h2>Uma turnê intimista...</h2>
            <p>A setlist do Especial de Natal foi feita para ser <i>intimista</i>, com músicas diferentes da <strong>SUPERTURNÊ</strong>.</p>
            <p><strong>Qual é a sua música favorita da setlist?</strong></p>
            <br></br>
            <div style={{textAlign:"center"}}>
                <div style={{margin: 0, padding: 0, transform: `rotate(${rotacao}deg)`}}>
                    <img src={imagem} style={{width:"100%"}}/>
                </div>
            <select className="selectfav" onChange={(e) => {
                trocarImagem(e);
                updateCampo("musica", e.target.value);
            }}>
                <option value="lobos">Lobos</option>
                <option value="radio">Rádio</option>
                <option value="alinhamento">Alinhamento Milenar</option>
                <option value="modo">Modo de Dizer</option>
                <option value="doce">Doce</option>
                <option value="acontece">Acontece</option>
                <option value="triste">O Triste É Que Eu Te Amo</option>
                <option value="santo">Santo</option>
                <option value="religiao">Religião</option>
                <option value="euquero">Eu Quero Ser Como Você</option>
                <option value="locadora">Locadora</option>
                <option value="julho">Julho</option>
                <option value="covers">Um dos covers</option>
                <option value="idiota">Idiota</option>
                <option value="labia">Lábia</option>
                <option value="lambe">Me Lambe</option>
                <option value="ultima">A Última Noite</option>
                <option value="olhos">Olhos Vermelhos</option>
                <option value="tempos">Tempos de Glória</option>
                <option value="clarao">Clarão</option>
                <option value="mem">Meninos e Meninas</option>
                <option value="enquanto">Enquanto me Beija</option>
                <option value="essa">Essa Eu Fiz Pro Nosso Amor</option>
            </select>
            <div style={{width: "100%",display: "flex", alignItems:"center"}}>
                {children}
            </div>
            </div>
            
        </div>
        </div>
        
    );
}

export default Favorita;