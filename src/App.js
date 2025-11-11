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

 // App.js


// ... outros imports

const gerarImagem = async () => {
    // 1. Opcional: Atraso para garantir que todas as animações/carregamentos terminem.
    await new Promise(r => setTimeout(r, 500)); 

    const elemento = document.getElementById("captura");
    
    // Configuração para garantir que CORS e estilos sejam embutidos
    const options = {
        // Usa a largura e altura reais do elemento para evitar cortes
        width: elemento.offsetWidth, 
        height: elemento.offsetHeight,
        quality: 1.0,
        // Garante que o CSS externo seja embutido no SVG
        cacheBust: true, 
        // Filtro opcional: apenas se você quiser ignorar certos elementos (ex: .no-capture)
        // filter: (node) => {
        //     return !node.classList?.contains('no-capture');
        // }
    };
    
    // 2. Converte o DOM para um Data URL contendo o SVG
    const svgDataUrl = await domtoimage.toSvg(elemento, options);

    // 3. Cria um Canvas para rasterizar o SVG em PNG
    const canvasOriginal = document.createElement("canvas");
    const ctx = canvasOriginal.getContext("2d");

    // Cria uma imagem a partir do SVG Data URL
    const img = new Image();
    // ESSENCIAL para evitar problemas de CORS ao desenhar no Canvas
    img.crossOrigin = 'anonymous'; 
    img.src = svgDataUrl;
    
    // Espera a imagem carregar antes de desenhar
    await new Promise(resolve => {
        img.onload = () => {
            canvasOriginal.width = img.width * 2; // Mantendo a lógica de escala
            canvasOriginal.height = img.height * 2; // Mantendo a lógica de escala
            
            // Desenha a imagem SVG no canvas
            ctx.drawImage(img, 0, 0, canvasOriginal.width, canvasOriginal.height);
            resolve();
        };
        img.onerror = (e) => {
             console.error("Erro ao carregar SVG como imagem:", e);
             resolve(); // Continua para evitar travamento total
        }
    });


    // --- Lógica de Corte (Baseada na sua implementação original) ---

    const isMobile = window.innerWidth <= 1024;

    let link;

    if (isMobile) {
        link = document.createElement("a");
        link.download = "jao-natal.png";
        link.href = canvasOriginal.toDataURL("image/png");
    } else {
        // Lógica de corte para desktop (apenas a coluna central)
        const larguraFinal = canvasOriginal.width * 0.33; 
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
            larguraFinal, alturaFinal,
        );

        link = document.createElement("a");
        link.download = "jao-natal.png";
        link.href = canvasCortado.toDataURL("image/png");
    }
    
    link.click();
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
    </div>
  );
}

export default App;
