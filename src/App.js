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
import Loading from './components/Loading';


function App() {
  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  const preloadVideo = (src) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.preload = "auto";
      video.src = src;
      video.addEventListener("canplaythrough", resolve);
      video.addEventListener("error", reject);
      document.body.appendChild(video);
      video.remove();
    });
  };

  const [carregando, setCarregando] = useState(true);
  const [progressoCarregamento, setProgressoCarregamento] = useState(0);
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
      preloadImage("umano/bases/blocais/bbanheiro.png"),
      preloadImage("umano/bases/blocais/bporta.png"),
      preloadImage("umano/bases/blocais/bsala.png"),
      preloadImage("umano/bases/blocais/bquarto.png"),
      preloadImage("umano/bases/bfundos/btitulo.png"),
      preloadImage("umano/bases/bfundos/começo.jpeg"),
      preloadImage("umano/bases/bfundos/começo.png"),
      preloadImage("umano/bases/bfundos/começo1.png"),
      preloadImage("umano/bases/bfundos/começo2.png"),
      preloadImage("umano/bases/bfundos/final.jpeg"),
      preloadImage("umano/bases/bfundos/jaofinal.png"),
      preloadImage("umano/bases/bfundos/padrao.png"),

      preloadVideo("umano/bases/bestados/videos/bbh.mp4"),
      preloadVideo("umano/bases/bestados/videos/bbsb.mp4"),
      preloadVideo("umano/bases/bestados/videos/bcuritiba.mp4"),
      preloadVideo("umano/bases/bestados/videos/bmaceio.mp4"),
      preloadVideo("umano/bases/bestados/videos/bpoa.mp4"),
      preloadVideo("umano/bases/bestados/videos/brecife.mp4"),
      preloadVideo("umano/bases/bestados/videos/bribeirao.mp4"),
      preloadVideo("umano/bases/bestados/videos/brio.mp4"),
      preloadVideo("umano/bases/bestados/videos/bsp.mp4"),
      preloadVideo("umano/bases/bestados/videos/bvitoria.mp4"),

      preloadImage("umano/bases/bmusicas/bacontece.png"),
      preloadImage("umano/bases/bmusicas/balinhamento.png"),
      preloadImage("umano/bases/bmusicas/bclarao.png"),
      preloadImage("umano/bases/bmusicas/bcovers.png"),
      preloadImage("umano/bases/bmusicas/bdoce.png"),
      preloadImage("umano/bases/bmusicas/benquanto.png"),
      preloadImage("umano/bases/bmusicas/bessa.png"),
      preloadImage("umano/bases/bmusicas/beuquero.png"),
      preloadImage("umano/bases/bmusicas/bidiota.png"),
      preloadImage("umano/bases/bmusicas/bjulho.png"),
      preloadImage("umano/bases/bmusicas/blabia.png"),
      preloadImage("umano/bases/bmusicas/blambe.png"),
      preloadImage("umano/bases/bmusicas/blobos.png"),
      preloadImage("umano/bases/bmusicas/blocadora.png"),
      preloadImage("umano/bases/bmusicas/bmem.png"),
      preloadImage("umano/bases/bmusicas/bmodo.png"),
      preloadImage("umano/bases/bmusicas/bolhos.png"),
      preloadImage("umano/bases/bmusicas/bradio.png"),
      preloadImage("umano/bases/bmusicas/breligiao.png"),
      preloadImage("umano/bases/bmusicas/bsanto.png"),
      preloadImage("umano/bases/bmusicas/btempos.png"),
      preloadImage("umano/bases/bmusicas/btriste.png"),
      preloadImage("umano/bases/bmusicas/bultima.png"),
      preloadImage("umano/bases/bpijamas/brazul.png"),
      preloadImage("umano/bases/bpijamas/brosa.png"),
      preloadImage("umano/bases/bpijamas/bverde.png"),
      preloadImage("umano/locais/banheiro.png"),
      preloadImage("umano/locais/porta.png"),
      preloadImage("umano/locais/sala.png"),
      preloadImage("umano/locais/quarto.png"),
      preloadImage("umano/estados/bh.png"),
      preloadImage("umano/estados/brasilia.png"),
      preloadImage("umano/estados/curitiba.png"),
      preloadImage("umano/estados/maceio.png"),
      preloadImage("umano/estados/poa.png"),
      preloadImage("umano/estados/recife.png"),
      preloadImage("umano/estados/rp.png"),
      preloadImage("umano/estados/rio.png"),
      preloadImage("umano/estados/sp.png"),
      preloadImage("umano/estados/vitoria.png"),
      preloadImage("umano/musicas/acontece.png"),
      preloadImage("umano/musicas/alinhamento.png"),
      preloadImage("umano/musicas/clarao.png"),
      preloadImage("umano/musicas/covers.png"),
      preloadImage("umano/musicas/doce.png"),
      preloadImage("umano/musicas/enquanto.png"),
      preloadImage("umano/musicas/essa.png"),
      preloadImage("umano/musicas/quero.png"),
      preloadImage("umano/musicas/idiota.png"),
      preloadImage("umano/musicas/julho.png"),
      preloadImage("umano/musicas/labia.png"),
      preloadImage("umano/musicas/lambe.png"),
      preloadImage("umano/musicas/lobos.png"),
      preloadImage("umano/musicas/locadora.png"),
      preloadImage("umano/musicas/mem.png"),
      preloadImage("umano/musicas/modo.png"),
      preloadImage("umano/musicas/vermelhos.png"),
      preloadImage("umano/musicas/radio.png"),
      preloadImage("umano/musicas/religiao.png"),
      preloadImage("umano/musicas/santo.png"),
      preloadImage("umano/musicas/tempos.png"),
      preloadImage("umano/musicas/triste.png"),
      preloadImage("umano/musicas/ultima.png"),
      preloadImage("umano/pijamas/azul.png"),
      preloadImage("umano/pijamas/rosa.png"),
      preloadImage("umano/pijamas/verde.png"),
    ];

    let carregados = 0;
    const totalCarregar = imagensCarregar.length;

    const handleCarregar = () => {
      carregados++;
      const progresso = Math.min(100, Math.round((carregados/totalCarregar) * 100));
      setProgressoCarregamento(progresso);

      if (carregados = totalCarregar) {
        setTimeout(() => setCarregando(true), 300);
      }
    }

    Promise.all(imagensCarregar.map(promise => promise.then(handleCarregar))).catch(error => {
      console.error("Erro ao carregar recursos:", error);
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
  return (
    <div className="tela7">
      <Loading></Loading>
    </div>
  );
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
