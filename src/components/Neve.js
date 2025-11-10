import "./Neve.css";

const Neve = () => {
  const flocos = Array.from({ length: 40 }); // quantidade de neve

  return (
    <div className="neve">
      {flocos.map((_, i) => (
        <span
          key={i}
          className="flocos"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${8 + Math.random() * 10}px`,
          }}
        >
          ❆
        </span>
      ))}
    </div>
  );
};

export default Neve;