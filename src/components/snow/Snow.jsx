import './snow.css';

export default function Snow() {
  const drops = Array.from({ length: 30 });

  return (
    <div className="snow-overlay">
      {drops.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;

        return (
          <div
            key={i}
            className="snowdrop"
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
