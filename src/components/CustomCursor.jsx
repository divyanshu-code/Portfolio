import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newParticle = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
      };
      setParticles((prev) => [...prev.slice(-40), newParticle]); 
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <div
  key={p.id}
  className="fixed text-yellow-500 text-2xl pointer-events-none"
  style={{
    top: p.y,
    left: p.x,
    transform: "translate(-50%, -50%)",
    animation: "fadeOut 1s linear forwards",
  }}
>
  ✦
</div>
      ))}

      <style>
        {`
          @keyframes fadeOut {
            to {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
