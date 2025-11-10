import { useRef, useState } from "react";
import "./AudioPlayer.css";

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [tocando, setTocando] = useState(false);

    const ligarAudio = () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (tocando) {
            audio.pause();
            setTocando(false);
        } else {
            audio.play()
            setTocando(true);
        }
    };

    return(
        <div>
            <div className="musica" onClick={ligarAudio}>
                <div className={`botaomusica ${tocando ? "sim" : ""}`}>
                    <span className="barra barra1"></span>
                    <span className="barra barra2"></span>
                    <span className="barra barra3"></span>
                </div>
                <audio ref={audioRef} src="umano/natal.mp3" loop/>
                
            </div>
        </div>
    );
};

export default AudioPlayer;