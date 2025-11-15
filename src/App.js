import { useState, useEffect } from 'react';
import './App.css';
import * as domtoimage from 'dom-to-image-more';
import { domToPng } from 'modern-screenshot';
import Titulo from './components/Titulo';
import Nome from './components/Nome';
import Neve from './components/Neve';
import Comodo from './components/Comodo';
import AudioPlayer from './components/AudioPlayer';
import Favorita from './components/Favorita';
import Figurinos from './components/Figurinos';
import Posicoes from './components/Posicoes';
import Final from './components/Final';
import { preload } from 'react-dom';


function App() {
  const [carregando, setCarregando] = useState(true);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    comodo: "entrada",
    musica: "lobos",
    pijama: "azul", 
    cidade: "rio",
  });

  const updateCampo = (campo, valor) =>{
    setFormData(prev => ({...prev, [campo]: valor}));
  };

  const [desaparecendo, setDesaparecendo] = useState(false);
  const [fade, setFade] = useState("fade-enter-active");
  const [taPrintando, setTaPrintando] = useState(false);

  useEffect(() => {
    const imagensCarregar = [
      "umano/bases/blocais/bbanheiro.png",
      "umano/bases/blocais/bporta.png",
      "umano/bases/blocais/bsala.png",
      "umano/bases/blocais/bquarto.png",
      "umano/bases/bfundos/btitulo.png",
      "umano/bases/bfundos/começo.jpeg",
      "umano/bases/bfundos/começo.png",
      "umano/bases/bfundos/começo1.png",
      "umano/bases/bfundos/começo2.png",
      "umano/bases/bfundos/final.jpeg",
      "umano/bases/bfundos/jaofinal.png",
      "umano/bases/bfundos/padrao.png",
      "umano/bases/bestados/videos/bbh.mp4",
      "umano/bases/bestados/videos/bbsb.mp4",
      "umano/bases/bestados/videos/bcuritiba.mp4",
      "umano/bases/bestados/videos/bmaceio.mp4",
      "umano/bases/bestados/videos/bpoa.mp4",
      "umano/bases/bestados/videos/brecife.mp4",
      "umano/bases/bestados/videos/bribeirao.mp4",
      "umano/bases/bestados/videos/brio.mp4",
      "umano/bases/bestados/videos/bsp.mp4",
      "umano/bases/bestados/videos/bvitoria.mp4",
      "umano/bases/bmusicas/bacontece.png",
      "umano/bases/bmusicas/balinhamento.png",
      "umano/bases/bmusicas/bclarao.png",
      "umano/bases/bmusicas/bcovers.png",
      "umano/bases/bmusicas/bdoce.png",
      "umano/bases/bmusicas/benquanto.png",
      "umano/bases/bmusicas/bessa.png",
      "umano/bases/bmusicas/beuquero.png",
      "umano/bases/bmusicas/bidiota.png",
      "umano/bases/bmusicas/bjulho.png",
      "umano/bases/bmusicas/blabia.png",
      "umano/bases/bmusicas/blambe.png",
      "umano/bases/bmusicas/blobos.png",
      "umano/bases/bmusicas/blocadora.png",
      "umano/bases/bmusicas/bmem.png",
      "umano/bases/bmusicas/bmodo.png",
      "umano/bases/bmusicas/bolhos.png",
      "umano/bases/bmusicas/bradio.png",
      "umano/bases/bmusicas/breligiao.png",
      "umano/bases/bmusicas/bsanto.png",
      "umano/bases/bmusicas/btempos.png",
      "umano/bases/bmusicas/btriste.png",
      "umano/bases/bmusicas/bultima.png",
      "umano/bases/bpijamas/brazul.png",
      "umano/bases/bpijamas/brosa.png",
      "umano/bases/bpijamas/bverde.png",
      "umano/locais/banheiro.png",
      "umano/locais/porta.png",
      "umano/locais/sala.png",
      "umano/locais/quarto.png",
      "umano/estados/bh.png",
      "umano/estados/brasilia.png",
      "umano/estados/curitiba.png",
      "umano/estados/maceio.png",
      "umano/estados/poa.png",
      "umano/estados/recife.png",
      "umano/estados/rp.png",
      "umano/estados/rio.png",
      "umano/estados/sp.png",
      "umano/estados/vitoria.png",
      "umano/musicas/acontece.png",
      "umano/musicas/alinhamento.png",
      "umano/musicas/clarao.png",
      "umano/musicas/covers.png",
      "umano/musicas/doce.png",
      "umano/musicas/enquanto.png",
      "umano/musicas/essa.png",
      "umano/musicas/quero.png",
      "umano/musicas/idiota.png",
      "umano/musicas/julho.png",
      "umano/musicas/labia.png",
      "umano/musicas/lambe.png",
      "umano/musicas/lobos.png",
      "umano/musicas/locadora.png",
      "umano/musicas/mem.png",
      "umano/musicas/modo.png",
      "umano/musicas/vermelhos.png",
      "umano/musicas/radio.png",
      "umano/musicas/religiao.png",
      "umano/musicas/santo.png",
      "umano/musicas/tempos.png",
      "umano/musicas/triste.png",
      "umano/musicas/ultima.png",
      "umano/pijamas/azul.png",
      "umano/pijamas/rosa.png",
      "umano/pijamas/verde.png",
    ];

    Promise.all(imagensCarregar.map(preloadImage)).then(() => {
      setCarregando(false);
    }).catch(error => {
      console.error("Erro ao carregar imagens:", error);
      setCarregando(false);
    });
  }, []);


  const handleNext = () => {
    setFade("fade-exit-active");

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    
    setTimeout(() => {
        setStep(prev => prev + 1);
         setFade("fade-enter-active");
    }, 500);


  }
  const handleBack = () => {
    setFade("fade-exit-active");

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    
    setTimeout(() => {
        setStep(prev => prev - 1);
         setFade("fade-enter-active");
    }, 500);

  }

const gerarImagem = async () => {

    setTaPrintando(true); 

    try {
        await new Promise(r => setTimeout(r, 500)); 

        const elemento = document.getElementById("captura");
        const polaroidsDiv = document.querySelector(".campofim"); 
        const isMobile = window.innerWidth <= 1024; 
        let link;
        
        const CAPTURE_SCALE = window.devicePixelRatio * 1.5;
        
        const pngDataUrl = await domToPng(elemento, {
            scale: CAPTURE_SCALE,
            fetchExternalStyles: true,
        });

        const img = new Image(); 
        img.src = pngDataUrl;
        await new Promise(resolve => img.onload = resolve);

        const larguraDesejadaStory = 1080;
        const alturaDesejadaStory = 1920;
        
        let larguraOrigem, alturaOrigem, imgToDraw;

        if (isMobile) {
            larguraOrigem = img.naturalWidth; 
            alturaOrigem = img.naturalHeight;
            imgToDraw = img;
        } else {
            const alturaViewport = window.innerHeight;

            const larguraPolaroidsPx = polaroidsDiv 
                ? polaroidsDiv.getBoundingClientRect().width 
                : elemento.offsetWidth; 

            larguraOrigem = larguraPolaroidsPx; 
            alturaOrigem = alturaViewport; 
            
            const canvasCrop = document.createElement("canvas");
            
            const cropWidth = larguraPolaroidsPx * CAPTURE_SCALE;
            const cropHeight = alturaViewport * CAPTURE_SCALE; 
            
            canvasCrop.width = cropWidth; 
            canvasCrop.height = cropHeight;

            const ctxCrop = canvasCrop.getContext("2d");
            
            const rectCaptura = elemento.getBoundingClientRect();
            const rectPolaroids = polaroidsDiv ? polaroidsDiv.getBoundingClientRect() : rectCaptura;
            const cropXStart = (rectPolaroids.left - rectCaptura.left) * CAPTURE_SCALE;
            
            ctxCrop.drawImage(
                img, 
                cropXStart, 0, 
                cropWidth, cropHeight, 
                0, 0, 
                cropWidth, cropHeight 
            );

            imgToDraw = canvasCrop; 
        }
        
        let scaleRatio = Math.min(larguraDesejadaStory / larguraOrigem, alturaDesejadaStory / alturaOrigem);
        let imgWidthScaled = larguraOrigem * scaleRatio;
        let imgHeightScaled = alturaOrigem * scaleRatio;

        let xPos = Math.round((larguraDesejadaStory - imgWidthScaled) / 2);
        let yPos = Math.round((alturaDesejadaStory - imgHeightScaled) / 2);
        
        
        const canvasFinalStory = document.createElement("canvas");
        canvasFinalStory.width = larguraDesejadaStory;
        canvasFinalStory.height = alturaDesejadaStory;
        const ctxFinalStory = canvasFinalStory.getContext("2d");


        const backgroundImage = new Image();
        backgroundImage.src = "umano/bases/bfundos/padrao.png"; 
        
        await new Promise(resolve => backgroundImage.onload = resolve);

        ctxFinalStory.drawImage(
            backgroundImage,
            0, 0, 
            larguraDesejadaStory, alturaDesejadaStory
        );
        
        ctxFinalStory.drawImage(imgToDraw, xPos, yPos, imgWidthScaled, imgHeightScaled);

        link = document.createElement("a");
        link.download = "jao-natal.png";
        link.href = canvasFinalStory.toDataURL("image/png");

        
        const response = await fetch(link.href);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        link.href = blobUrl;
        link.click();
        setTimeout(() => URL.revokeObjectURL(blobUrl), 500);

    } catch (error) {
        console.error("Erro durante a captura da imagem:", error);
    } finally {
        setTaPrintando(false); 
    }
};

if (carregando) {
  return(
    <div><p>ta carregando carai</p></div>
  );
}

  return (
    <div id="captura" className={`tela tela${step}`}>
      <header className="header"><Titulo step={step}/><br></br></header>
      <div style={{ visibility: taPrintando ? "hidden" : "visible "}}>
          <AudioPlayer></AudioPlayer>
        </div>
        <div className={`container container${step} ${fade}`}>  
        {step === 1 && (
          <main className="conteudo">
            <Neve></Neve>
            <img className={`jao1 ${desaparecendo ? "fade-out" : ""}`}
            src="umano/bases/bfundos/começo2.png"/>
            <br></br>
            <div className="botoes" style={{justifyContent:"center"}}>
              <button className={`botao botao${step}`} onClick={() => {
              setDesaparecendo(true);
              setTimeout(() => handleNext(), 500);
            }}>Começar</button>
            </div>
            
            </main>
        )
        }{step === 2 && (
          <main className="conteudo">
          <Nome dado={formData} updateCampo={updateCampo}/>
          <div className="botoes" style={{justifyContent:"center"}}>
            <button className={`botao botao${step}`} disabled={formData.nome.trim() === ""}  onClick={handleNext}>Continuar</button>
          </div>
          
          </main>
        )}{step === 3 && (
          <main className="conteudo">
            <Comodo nome={formData.nome} updateCampo={updateCampo}>
              <div className="botoes">
                <button className={`botao botao${step}`} onClick={handleBack}>Voltar</button>
              <button className={`botao botao${step}`} onClick={handleNext}>Continuar</button>
                </div>

              </Comodo>
          </main>
        )}{step === 4 && (
          <main className="conteudo">
            <Favorita updateCampo={updateCampo}><div className="botoes">
                <button className={`botao botao${step}`} onClick={handleBack}>Voltar</button>
              <button className={`botao botao${step}`} onClick={handleNext}>Continuar</button>
                </div></Favorita>
          </main>
        )}{step === 5 && (
          <main className="conteudo">
            <Figurinos updateCampo={updateCampo}><div className="botoes">
                <button className={`botao botao${step}`} onClick={handleBack}>Voltar</button>
              <button className={`botao botao${step}`} onClick={handleNext}>Continuar</button>
                </div></Figurinos>
          </main>
        )}{step === 6 && (
          <main className="conteudo">
            <Posicoes updateCampo={updateCampo}><div className="botoes">
                <button className={`botao botao${step}`} onClick={handleBack}>Voltar</button>
              <button className={`botao botao${step}`} onClick={handleNext}>Continuar</button>
                </div></Posicoes>
          </main>
        )
        }{step === 7 && (
          <main id="final" className="conteudo">
            <Final dadoNome={formData.nome} dadoComodo={formData.comodo} dadoMusica={formData.musica} dadoPijama={formData.pijama} dadoEstado={formData.cidade}>
            <button 
                  className={`botao botao${step} no-capture`} 
                  onClick={gerarImagem}
                  style={{ visibility: taPrintando ? "hidden" : "visible "}}
                  disabled={taPrintando}
              >
                  {taPrintando ? "Salvando..." : "Salvar"}
              </button>
            </Final>
          </main>
        )
        }
      </div>
      
    </div>
    
  );
}

export default App;
