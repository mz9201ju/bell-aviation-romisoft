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
  const [prevIndex, setPrevIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((currentIndex) => {
        setPrevIndex(currentIndex);
        setIsFading(true);
        return (currentIndex + 1) % IMAGES.length;
      });
    }, SLIDE_MS);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!isFading) return;

    const id = setTimeout(() => {
      setIsFading(false);
      setPrevIndex(null);
    }, FADE_MS);

    return () => clearTimeout(id);
  }, [isFading]);

  useEffect(() => {
    const preload = new Image();
    const nextIndex = (index + 1) % IMAGES.length;
    preload.src = IMAGES[nextIndex];
  }, [index]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <img
          key={`active-${index}`}
          src={IMAGES[index]}
          alt=""
          className="absolute inset-0 w-full h-full animate-kenburns"
          style={{ objectPosition: "center 35%" }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
      />

      {prevIndex !== null && (
        <img
          key={`prev-${prevIndex}`}
          src={IMAGES[prevIndex]}
          alt=""
          className={[
            "absolute inset-0 w-full h-full",
            "transition-opacity ease-in-out",
            "animate-kenburns",
            isFading ? "opacity-0" : "opacity-100",
          ].join(" ")}
          style={{ objectPosition: "center 35%", transitionDuration: `${FADE_MS}ms` }}
          loading="eager"
          decoding="async"
        />
      )}

      {/* 🩶 Stronger contrast overlay for better text readability on all pages */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/55 via-black/70 to-black/78" />
      <div className="absolute inset-0 pointer-events-none bg-black/20" />

    </div>
  );
}
