import './Rain.css';

export default function Rain() {
  const drops = Array.from({ length: 30 });

  return (
    <div className="rain-overlay">
      {drops.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;

        return (
          <div
            key={i}
            className="raindrop"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
