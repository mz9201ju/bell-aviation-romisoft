import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import PageShell from "../sections/_PageShell"; // <-- adjust this line if needed

const modules = import.meta.glob(
    "../assets/gallery/*/*.{png,jpg,jpeg,webp,svg}",
    { eager: true }
);

const grouped = Object.entries(modules).reduce((acc, [path, mod]) => {
    const parts = path.split("/");
    const album = parts[parts.indexOf("gallery") + 1];
    const url = mod.default || mod;
    (acc[album] ||= []).push({ src: url, alt: parts.at(-1) });
    return acc;
}, {});

Object.values(grouped).forEach(list => list.sort((a, b) => a.src.localeCompare(b.src)));

export default function GalleryPage() {
    const { slug = "" } = useParams();
    const normalized = slug.toLowerCase();
    const items = useMemo(() => grouped[normalized] ?? [], [normalized]);
    const title = normalized ? normalized[0].toUpperCase() + normalized.slice(1) : "Gallery";

    return (
        <PageShell title={`${title} Album`} blurb="Click any photo to view full size.">
            <div className="col-span-full mx-auto w-full grid gap-6 px-4
[grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
                <div className="mb-6">
                    <Link
                        to="/tools"
                        className="inline-block rounded-lg px-3 py-1.5 text-sky-300 ring-1 ring-white/10 hover:ring-white/30 hover:bg-white/10 transition"
                    >
                        ← Back to Tools
                    </Link>
                </div>

                {items.length === 0 ? (
                    <p className="text-white/80">No photos found for this album yet.</p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((m, i) => (
                            <a
                                key={i}
                                href={m.src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 hover:ring-white/20 bg-white/5 backdrop-blur-md transition"
                            >
                                <div className="relative w-full aspect-[4/3]">
                                    <img
                                        src={m.src}
                                        alt={m.alt}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                                        <span className="text-white/90 text-sm">{m.alt}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </PageShell>
    );
}
