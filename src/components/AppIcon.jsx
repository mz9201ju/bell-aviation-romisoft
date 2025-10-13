import { useEffect, useState } from "react";

// auto-discover everything under src/assets/icons
const iconModules = import.meta.glob("../assets/icons/*.{png,jpg,jpeg,webp,svg}", { eager: true });
const ICONS = Object.values(iconModules).map((m) => m.default || m);

export default function AppIcon({ intervalMs = 1000 }) {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (ICONS.length <= 1) return;
        const id = setInterval(() => setIdx((i) => (i + 1) % ICONS.length), intervalMs);
        return () => clearInterval(id);
    }, [intervalMs]);

    const src = ICONS[idx];

    return (
        <div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-white/10 bg-white/10 shrink-0">
            <img src={src} alt="Bell Aviation" className="h-full w-full object-cover" loading="lazy" />
        </div>
    );
}
