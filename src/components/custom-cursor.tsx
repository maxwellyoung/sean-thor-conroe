"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary mix-blend-difference pointer-events-none z-50"
      style={{
        transform: `translate(${mousePosition.x - 12}px, ${
          mousePosition.y - 12
        }px)`,
      }}
    />
  );
}
