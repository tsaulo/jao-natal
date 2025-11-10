import { useState } from 'react';
import './App.css';
import * as domtoimage from 'dom-to-image-more'
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
  await new Promise(resolve => setTimeout(resolve, 300));

  const elemento = document.getElementById("captura");
  if (!elemento) return;

  const dataURL = await domtoimage.toPng(elemento, { quality: 1, scale: 4, filter: (node) => {
    if (node.classList && node.classList.contains("no-capture")) return false;
    return true;
  } });

  const img = new Image();
  img.src = dataURL;

  img.onload = () => {

    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "turne-de-natal-2025.png";
      link.click();
      return;
    }

    const FINAL_WIDTH = 368; 
    const FINAL_HEIGHT = img.height;

    const canvas = document.createElement("canvas");
    canvas.width = FINAL_WIDTH;
    canvas.height = FINAL_HEIGHT;

    const ctx = canvas.getContext("2d");

    const cropX = (img.width - FINAL_WIDTH) / 2;
    const cropY = 0;

    ctx.drawImage(
      img,
      cropX, cropY, FINAL_WIDTH, FINAL_HEIGHT,  
      0, 0, FINAL_WIDTH, FINAL_HEIGHT           
    );

    const finalURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = finalURL;
    link.download = "turne-de-natal-2025.png";
    link.click();
  };
};


  return (
    <div id="captura" className={`tela tela${step}`}>
      <header className="header"><Titulo step={step}/><br></br></header>
      <div className="no-capture">
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
                  onClick={() => setTimeout(gerarImagem, 2000)}
              >
                  Salvar
              </button>
            </Final>
          </main>
        )

        }
        
      </div>
      <footer className={`footer footer${step}`}>
        <p>site feito por tsaulo (@guiltysanto)</p>
        </footer>
    </div>
  );
}

export default App;
