import "./Posicoes.css";
import { useState, useRef } from "react";

const Posicoes = ({updateCampo, children}) => {
    const base = process.env.PUBLIC_URL;

    const videos = {
        bh: `${base}/umano/bases/bestados/videos/bbh.mp4`,
        bsb: `${base}/umano/bases/bestados/videos/bbsb.mp4`,
        curitiba: `${base}/umano/bases/bestados/videos/bcuritiba.mp4`,
        maceio: `${base}/umano/bases/bestados/videos/bmaceio.mp4`,
        poa: `${base}/umano/bases/bestados/videos/bpoa.mp4`,
        recife: `${base}/umano/bases/bestados/videos/brecife.mp4`,
        ribeirao: `${base}/umano/bases/bestados/videos/bribeirao.mp4`,
        rio: `${base}/umano/bases/bestados/videos/brio.mp4`,
        sp: `${base}/umano/bases/bestados/videos/bsp.mp4`,
        vitoria: `${base}/umano/bases/bestados/videos/bvitoria.mp4`,
    };

    const [video, setVideo] = useState(videos.rio);
    const videoRef = useRef(null);
    const [rotacao, setRotacao] = useState(0);
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
    videoRef.current.play();
    setPlaying(true);
  };

    const handleEnded = () => {
        setPlaying(false);
    }

    const trocarVideo = (e) => {
        const novoVideo = videos[e.target.value];
        setVideo(novoVideo);

        const valor = (Math.random() * 6) - 3; 
        setRotacao(valor);
    };

    return(
        <div className="dentro">
            <div className="campopos">
            <h2>...e danças marcantes!</h2>
            <p>Acho que todos lembram da primeira vez que a performance de Religião ficou... <i>especial</i> no segundo refrão.</p>
            <p><strong>Qual estado teve a melhor <i>coreografia</i>?</strong></p>
            <br></br>
            <div style={{textAlign:"center"}}>
                <div className="videomask" style={{transform: `rotate(${rotacao}deg)`}}>
                    <video ref={videoRef} src={video} onEnded={handleEnded} controls={playing}/>
                    {!playing && (
        <button className="play-btn" onClick={handlePlay}>▶</button>
      )}
                </div>
            <select className="selectpos" onChange={(e) => {
                trocarVideo(e);
                updateCampo("cidade", e.target.value);
            }}>
                <option value="rio">Rio de Janeiro</option>
                <option value="bsb">Brasília</option>
                <option value="curitiba">Curitiba</option>
                <option value="bh">Belo Horizonte</option>
                <option value="sp">São Paulo</option>
                <option value="ribeirao">Ribeirão Preto</option>
                <option value="poa">Porto Alegre</option>
                <option value="vitoria">Vitória</option>
                <option value="recife">Recife</option>
                <option value="maceio">Maceió</option>
            </select>
            <div style={{width: "100%",display: "flex", alignItems:"center"}}>
                {children}
            </div>
            </div>
            
        </div>
        </div>
        
    );
}

export default Posicoes;