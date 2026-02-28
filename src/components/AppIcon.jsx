import { useEffect, useState } from "react";

const iconModules = import.meta.glob("../assets/icons/*.{png,jpg,jpeg,webp,svg}");
const iconPaths = Object.keys(iconModules).sort();

export default function AppIcon({ intervalMs = 10000 }) {
    const [idx, setIdx] = useState(0);
    const [src, setSrc] = useState("");

    useEffect(() => {
        let active = true;

        async function loadIcon(indexToLoad) {
            if (!iconPaths.length) return;
            const loader = iconModules[iconPaths[indexToLoad]];
            const mod = await loader();
            if (active) {
                setSrc(mod.default || mod);
            }
        }

        loadIcon(idx);

        return () => {
            active = false;
        };
    }, [idx]);

    useEffect(() => {
        if (iconPaths.length <= 1) return;
        const id = setInterval(() => {
            setIdx((i) => (i + 1) % iconPaths.length);
        }, intervalMs);

        return () => clearInterval(id);
    }, [intervalMs]);

    return (
        <div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-white/10 bg-white/10 shrink-0">
            {src && (
                <img
                    src={src}
                    alt="Bell Aviation"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
            )}
        </div>
    );
}
