import React, {useRef, useEffect, useState} from 'react';

const largura = "90%";
const altura = "10%";
const listras = "umano/bases/bfundos/padrao.png";

const Loading = ({progresso}) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [padrao, setPadrao] = useState(null);
    const [dimensoes, setDimensoes] = useState({width: 0, height: 0});

    useEffect(() => {
        const img = new Image();
        img.src = listras;
        img.onload = () => setPadrao(img);
        img.onerror = () => console.error ("Erro ao carregar a imagem do padrão");
    }, []);

    useEffect(() => {
        const atualizarDimensoes = () => {
            if (containerRef.current) {
                setDimensoes({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                });
            }
        };

        const observando = new ResizeObserver(atualizarDimensoes);
        if(containerRef.current){
            observando.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observando.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const {width, height} = dimensoes;

        if (!padrao || width === 0 || height === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        ctx.clearRect(0, 0, width, height);

        const preenchido = (width * progresso) / 100;

        // Fundo (área não preenchida)
        ctx.fillStyle = "#c4c4c4ff";
        ctx.fillRect(0, 0, width, height);

        // Preenchimento do progresso com o padrão
        const pattern = ctx.createPattern(padrao, 'repeat');
        
        ctx.fillStyle = pattern;
    
        ctx.beginPath();
        ctx.rect(0, 0, preenchido, height);
        ctx.clip(); 

        ctx.fillRect(0, 0, width, height);

        ctx.restore(); 

    });
    
    return (
        <div ref={containerRef} style={{ width: largura, height: altura }}>
            <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
        </div>
    );
}

export default Loading;