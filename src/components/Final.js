import "./Final.css";

const Final = ( { dadoNome, dadoComodo, dadoMusica, dadoPijama, dadoEstado, children } ) => {

    const carregarComoBase64 = (url) => {
        return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous"; 
        img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext("2d").drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
        };
        img.src = url;
    });
    };

    const polaroidsComodo = {
        banheiro: "umano/locais/banheiro.png",
        entrada: "umano/locais/entrada.png",
        quarto: "umano/locais/quarto.png",
        sala: "umano/locais/sala.png",
    }

    const polaroidsMusica = {
        acontece: "umano/musicas/acontece.png",
        alinhamento: "umano/musicas/alinhamento.png",
        clarao: "umano/musicas/clarao.png",
        covers: "umano/musicas/covers.png",
        doce: "umano/musicas/doce.png",
        enquanto: "umano/musicas/enquanto.png",
        essa: "umano/musicas/essa.png",
        euquero: "umano/musicas/quero.png",
        idiota: "umano/musicas/idiota.png",
        julho: "umano/musicas/julho.png",
        labia: "umano/musicas/labia.png",
        lambe: "umano/musicas/lambe.png",
        lobos: "umano/musicas/lobos.png",
        locadora: "umano/musicas/locadora.png",
        mem: "umano/musicas/mem.png",
        modo: "umano/musicas/modo.png",
        olhos: "umano/musicas/vermelhos.png",
        radio: "umano/musicas/radio.png",
        religiao: "umano/musicas/religiao.png",
        santo: "umano/musicas/santo.png",
        tempos: "umano/musicas/tempos.png",
        triste: "umano/musicas/triste.png",
        ultima: "umano/musicas/ultima.png",
    }

    const polaroidsPijama = {
        azul: "umano/pijamas/azul.png",
        rosa: "umano/pijamas/rosa.png",
        verde: "umano/pijamas/verde.png",
    }

    const polaroidsEstado = {
        bh: "umano/estados/bh.png",
        bsb: "umano/estados/brasilia.png",
        curitiba: "umano/estados/curitiba.png",
        maceio: "umano/estados/maceio.png",
        poa: "umano/estados/poa.png",
        recife: "umano/estados/recife.png",
        ribeirao: "umano/estados/rp.png",
        rio: "umano/estados/rio.png",
        sp: "umano/estados/sp.png",
        vitoria: "umano/estados/vitoria.png",
    }

    const [imgComodo, setImgComodo] = useState(null);
    const [imgMusica, setImgMusica] = useState(null);
    const [imgPijama, setImgPijama] = useState(null);
    const [imgEstado, setImgEstado] = useState(null);

    useEffect(() => {
    carregarComoBase64(polaroidsComodo[dadoComodo]).then(setImgComodo);
    carregarComoBase64(polaroidsMusica[dadoMusica]).then(setImgMusica);
    carregarComoBase64(polaroidsPijama[dadoPijama]).then(setImgPijama);
    carregarComoBase64(polaroidsEstado[dadoEstado]).then(setImgEstado);
    }, [dadoComodo, dadoMusica, dadoPijama, dadoEstado]);

    

    return(
         <div className="dentrofinal">
            <div className="campofim">
            <div>
                <h2>Para <i>{dadoNome}</i>,</h2>
                <p>o show perfeito é com o Jão...</p>
                <div className="dentropolaroids">
                    <img src={imgComodo} className="polaroid polaroid1"/><br/>
                    <img src={imgMusica} className="polaroid polaroid2"/><br/>
                    <img src={imgPijama} className="polaroid polaroid3"/><br/>
                    <img src={imgEstado} className="polaroid polaroid4"/><br/>
                </div>
                <div style={{position:"relative", zIndex:999, display:"flex", justifyContent:"flex-end"}}>
                {children}
            </div>
            </div>
            
        </div>
        </div>
    )
}

export default Final;