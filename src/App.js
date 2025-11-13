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
  const [step, setStep] = useState(1);
  const containerRef = useRef(null);
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
    
    setTimeout(() => {
        setStep(prev => prev + 1);
         setFade("fade-enter-active");
    }, 500);

  }
  const handleBack = () => {
    setFade("fade-exit-active");
    
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


        const pngDataUrl = await domToPng(elemento, {
            scale: window.devicePixelRatio * 1.5,
            fetchExternalStyles: true,
        });

        const isMobile = window.innerWidth <= 1024;
        let link;

       

        if (isMobile) {
            
            link = document.createElement("a");
            link.download = "jao-natal-story.png";
            link.href = pngDataUrl;

        } 
        
        else {
            const img = new Image();
            img.src = pngDataUrl;

            await new Promise(resolve => img.onload = resolve);

            const canvasOriginal = document.createElement("canvas");
            canvasOriginal.width = img.naturalWidth;
            canvasOriginal.height = img.naturalHeight;

            const ctxOriginal = canvasOriginal.getContext("2d");
            ctxOriginal.drawImage(img, 0, 0);

            const larguraFinal = canvasOriginal.width * 0.22; 
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

useEffect(() => {

    const timer = setTimeout(() => {
        if (containerRef.current) {

            containerRef.current.scrollTop = 0;
        }
    }, 1000); 

    return () => clearTimeout(timer);
    
  }, [step]);

  return (
    <div id="captura" className={`tela tela${step}`}>
      <header className="header"><Titulo step={step}/><br></br></header>
      <div style={{ visibility: taPrintando ? "hidden" : "visible "}}>
          <AudioPlayer></AudioPlayer>
        </div>
        <div className={`container container${step} ${fade}`}>  
        {step === 1 && (
          <main ref={containerRef} className="conteudo">
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
          <main ref={containerRef} className="conteudo">
          <Nome dado={formData} updateCampo={updateCampo}/>
          <div className="botoes" style={{justifyContent:"center"}}>
            <button className={`botao botao${step}`} disabled={formData.nome.trim() === ""}  onClick={handleNext}>Continuar</button>
          </div>
          
          </main>
        )}{step === 3 && (
          <main ref={containerRef} className="conteudo">
            <Comodo nome={formData.nome} updateCampo={updateCampo}>
              <div className="botoes">
                <button className={`botao botao${step}`} onClick={handleBack}>Voltar</button>
              <button className={`botao botao${step}`} onClick={handleNext}>Continuar</button>
                </div>

              </Comodo>
          </main>
        )}{step === 4 && (
          <main ref={containerRef} className="conteudo">
            <Favorita updateCampo={updateCampo}><div className="botoes">
                <button className={`botao botao${step}`} onClick={handleBack}>Voltar</button>
              <button className={`botao botao${step}`} onClick={handleNext}>Continuar</button>
                </div></Favorita>
          </main>
        )}{step === 5 && (
          <main ref={containerRef} className="conteudo">
            <Figurinos updateCampo={updateCampo}><div className="botoes">
                <button className={`botao botao${step}`} onClick={handleBack}>Voltar</button>
              <button className={`botao botao${step}`} onClick={handleNext}>Continuar</button>
                </div></Figurinos>
          </main>
        )}{step === 6 && (
          <main ref={containerRef} className="conteudo">
            <Posicoes updateCampo={updateCampo}><div className="botoes">
                <button className={`botao botao${step}`} onClick={handleBack}>Voltar</button>
              <button className={`botao botao${step}`} onClick={handleNext}>Continuar</button>
                </div></Posicoes>
          </main>
        )
        }{step === 7 && (
          <main ref={containerRef} id="final" className="conteudo">
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
