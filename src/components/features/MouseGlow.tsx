import React, { useEffect, useState } from "react";

const MouseGlow: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-all duration-300"
      style={{
        background: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default MouseGlow;