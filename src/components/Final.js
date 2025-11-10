import "./Final.css";

const Final = ( { dadoNome, dadoComodo, dadoMusica, dadoPijama, dadoEstado, children } ) => {

     const base = process.env.PUBLIC_URL;

    const polaroidsComodo = {
        banheiro: `${base}/umano/locais/banheiro.png`,
        entrada: `${base}/umano/locais/entrada.png`,
        quarto: `${base}/umano/locais/quarto.png`,
        sala: `${base}/umano/locais/sala.png`,
    }

    const polaroidsMusica = {
        acontece: `${base}/umano/musicas/acontece.png`,
        alinhamento: `${base}/umano/musicas/alinhamento.png`,
        clarao: `${base}/umano/musicas/clarao.png`,
        covers: `${base}/umano/musicas/covers.png`,
        doce: `${base}/umano/musicas/doce.png`,
        enquanto: `${base}/umano/musicas/enquanto.png`,
        essa: `${base}/umano/musicas/essa.png`,
        euquero: `${base}/umano/musicas/quero.png`,
        idiota: `${base}/umano/musicas/idiota.png`,
        julho: `${base}/umano/musicas/julho.png`,
        labia: `${base}/umano/musicas/labia.png`,
        lambe: `${base}/umano/musicas/lambe.png`,
        lobos: `${base}/umano/musicas/lobos.png`,
        locadora: `${base}/umano/musicas/locadora.png`,
        mem: `${base}/umano/musicas/mem.png`,
        modo: `${base}/umano/musicas/modo.png`,
        olhos: `${base}/umano/musicas/vermelhos.png`,
        radio: `${base}/umano/musicas/radio.png`,
        religiao: `${base}/umano/musicas/religiao.png`,
        santo: `${base}/umano/musicas/santo.png`,
        tempos: `${base}/umano/musicas/tempos.png`,
        triste: `${base}/umano/musicas/triste.png`,
        ultima: `${base}/umano/musicas/ultima.png`,
    }

    const polaroidsPijama = {
        azul: `${base}/umano/pijamas/azul.png`,
        rosa: `${base}/umano/pijamas/rosa.png`,
        verde: `${base}/umano/pijamas/verde.png`,
    }

    const polaroidsEstado = {
        bh: `${base}/umano/estados/bh.png`,
        bsb: `${base}/umano/estados/brasilia.png`,
        curitiba: `${base}/umano/estados/curitiba.png`,
        maceio: `${base}/umano/estados/maceio.png`,
        poa: `${base}/umano/estados/poa.png`,
        recife: `${base}/umano/estados/recife.png`,
        ribeirao: `${base}/umano/estados/rp.png`,
        rio: `${base}/umano/estados/rio.png`,
        sp: `${base}/umano/estados/sp.png`,
        vitoria: `${base}/umano/estados/vitoria.png`,
    }

    

    return(
         <div className="dentro" id="captura">
            <div className="campofim">
            <div>
                <h2>Para <i>{dadoNome}</i>,</h2>
                <p>o show perfeito é com o Jão...</p>
                <div className="dentropolaroids">
                    <img src={polaroidsComodo[dadoComodo]} className="polaroid polaroid1"/><br/>
                    <img src={polaroidsMusica[dadoMusica]} className="polaroid polaroid2"/><br/>
                    <img src={polaroidsPijama[dadoPijama]} className="polaroid polaroid3"/><br/>
                    <img src={polaroidsEstado[dadoEstado]} className="polaroid polaroid4"/><br/>
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