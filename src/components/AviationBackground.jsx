// src/components/AviationBackground.jsx
import { useEffect, useState } from "react";

// ✅ Import images so Vite resolves them in dev & build
import img1 from "../assets/background/background1.jpg";
import img2 from "../assets/background/background2.jpg";
import img3 from "../assets/background/background3.jpg";
import img4 from "../assets/background/background4.jpg";

const IMAGES = [img1, img2, img3, img4];
const SLIDE_MS = 20000;   // time each image stays on
const FADE_MS = 1200;   // fade duration

export default function AviationBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Cross-fade layers with Ken Burns drift; object-cover keeps framing correct */}
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={[
            "absolute inset-0 w-full h-full",
            "transition-opacity ease-in-out",
            `duration-[${FADE_MS}ms]`,
            // remove motion-safe: if you ALWAYS want animation
            "animate-kenburns",
            i === index ? "opacity-100" : "opacity-0",
          ].join(" ")}
          // Tip: nudge the focal point if needed (e.g., raise the plane)
          style={{ objectPosition: "center 35%" }}
        />
      ))}

      {/* Gentle contrast overlay so text stays readable */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-black/5 to-black/50" />
    </div>
  );
}
