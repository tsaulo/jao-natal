import { useState, useRef, useEffect } from 'react';
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


function App() {
  const capturaRef = useRef(null);
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

const createHorizontalStripedPattern = (ctx, color1, length1, color2, length2) => {
    const patternWidth = 1920 * 2.5;
    const repeatLength = length1 + length2;
    const basePatternCanvas = document.createElement('canvas');
    basePatternCanvas.width = patternWidth; 
    basePatternCanvas.height = repeatLength;
    const bpc_ctx = basePatternCanvas.getContext('2d');

    bpc_ctx.fillStyle = color1;
    bpc_ctx.fillRect(0, 0, repeatLength, length1);
    bpc_ctx.fillStyle = color2;
    bpc_ctx.fillRect(0, length1, repeatLength, length2);

    const pattern = ctx.createPattern(basePatternCanvas, 'repeat');
    return pattern;
};

const gerarImagem = async () => {

    setTaPrintando(true); 

    try {
        await new Promise(r => setTimeout(r, 500)); 

        const elemento = document.getElementById("captura");
        const isMobile = window.innerWidth <= 1024;
        let link;
        
        const pngDataUrl = await domToPng(elemento, {
            scale: window.devicePixelRatio * 1.5,
            fetchExternalStyles: true,
        });

        if (isMobile) {
            
            const img = new Image();
            img.src = pngDataUrl;
            await new Promise(resolve => img.onload = resolve);

            const larguraOriginal = img.naturalWidth;
            const alturaOriginal = img.naturalHeight;
            const larguraDesejadaStory = 1080;
            const alturaDesejadaStory = 1920;

            const proporcaoOriginal = larguraOriginal / alturaOriginal;
            let scaleRatio = Math.min(larguraDesejadaStory / larguraOriginal, alturaDesejadaStory / alturaOriginal);
            let imgWidthScaled = larguraOriginal * scaleRatio;
            let imgHeightScaled = alturaOriginal * scaleRatio;

            let xPos = (larguraDesejadaStory - imgWidthScaled) / 2;
            let yPos = (alturaDesejadaStory - imgHeightScaled) / 2;

            const canvasFinalStory = document.createElement("canvas");
            canvasFinalStory.width = larguraDesejadaStory;
            canvasFinalStory.height = alturaDesejadaStory;
            const ctxFinalStory = canvasFinalStory.getContext("2d");


            ctxFinalStory.save(); 

            ctxFinalStory.translate(larguraDesejadaStory / 2, alturaDesejadaStory / 2);
            ctxFinalStory.rotate(40 * Math.PI / 180); 
            ctxFinalStory.translate(-larguraDesejadaStory / 2, -alturaDesejadaStory / 2);

            const pattern = createHorizontalStripedPattern(
                ctxFinalStory, 
                '#ddd6c0', 100,
                '#8D1023', 100 
            );

            ctxFinalStory.fillStyle = pattern;
            const coverSize = Math.max(larguraDesejadaStory, alturaDesejadaStory) * 2;
            ctxFinalStory.fillRect(-coverSize / 2, -coverSize / 2, coverSize, coverSize);
            
            ctxFinalStory.restore(); 

            ctxFinalStory.drawImage(img, xPos, yPos, imgWidthScaled, imgHeightScaled);

            link = document.createElement("a");
            link.download = "jao-natal-story.png";
            link.href = canvasFinalStory.toDataURL("image/png");

        } else {
            const img = new Image();
            img.src = pngDataUrl;

            await new Promise(resolve => img.onload = resolve);

            const canvasOriginal = document.createElement("canvas");
            canvasOriginal.width = img.naturalWidth;
            canvasOriginal.height = img.naturalHeight;

            const ctxOriginal = canvasOriginal.getContext("2d");
            ctxOriginal.drawImage(img, 0, 0);

            const larguraFinal = canvasOriginal.width * 0.25; 
            const alturaFinal = canvasOriginal.height;

            const inicioX = (canvasOriginal.width - larguraFinal) / 2;

            const canvasCortado = document.createElement("canvas");
            canvasCortado.width = larguraFinal;
            canvasCortado.height = alturaFinal;

            const ctxCortado = canvasCortado.getContext("2d");

            ctxCortado.drawImage(
                canvasOriginal,
                inicioX, 0,
                larguraFinal, alturaFinal, 
                0, 0,
                larguraFinal, alturaFinal  
            );

            link = document.createElement("a");
            link.download = "jao-natal.png";
            link.href = canvasCortado.toDataURL("image/png");
        }

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
