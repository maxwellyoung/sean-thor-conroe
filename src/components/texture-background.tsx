"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function TextureBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const noiseSvg = `
    <svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='fractalNoise' 
          baseFrequency='0.75' 
          numOctaves='3' 
          stitchTiles='stitch'
        />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
    </svg>
  `;

  const encodedNoise = encodeURIComponent(noiseSvg);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedNoise}")`,
          backgroundSize: "200px 200px",
          opacity: isDark ? 0.07 : 0.04,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
        }}
      />
    </div>
  );
}
