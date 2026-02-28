import { useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";
import PageShell from "./_PageShell";
import { LEGACY_HELP, PREVIEW_TOOLS, TOOL_ALBUMS } from "../data/toolsData";

/* -----------------------------------------------------------------------------
 * TWEAKABLE UI CONFIG (centralized Tailwind knobs)
 * Change these strings to tune alignment, spacing, heights, etc. across the page.
 * --------------------------------------------------------------------------- */
const UI = {
    container: "w-full max-w-7xl mx-auto px-4 md:px-8", // overall padding + centering
    // Responsive grid for top area: stacks on mobile, 3 columns on md+
    topGrid: "grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-3",
    // Shared glass card shell
    panel:
        "glass rounded-3xl ring-1 ring-white/10 hover:ring-white/20 " +
        "bg-white/10 backdrop-blur-xl transition-all duration-500 " +
        // sizing/alignment you’ll likely tweak the most:
        "p-5 sm:p-8 flex flex-col items-stretch sm:items-center justify-center text-left sm:text-center " +
        "min-h-[180px] sm:min-h-[160px] md:min-h-[140px]",
    // Title inside panels
    panelTitle: "text-xl sm:text-3xl font-semibold mb-4",
    // Button row in the panels
    panelBtnRow: "grid gap-2 w-full sm:flex sm:flex-wrap sm:justify-center sm:gap-3", // mobile-safe stack
    // Individual button/link styles
    cta:
        "inline-flex items-center justify-between gap-2 rounded-xl px-5 py-3 " +
        "font-medium bg-white/10 text-sky-300 backdrop-blur-sm " +
        "ring-1 ring-white/10 hover:ring-white/30 hover:bg-white/20 hover:text-sky-200 " +
        "transition-all duration-300 ease-out hover:scale-105 " +
        "hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] active:scale-95 w-full sm:w-auto min-w-0",
    // Section wrappers (so spacing is consistent)
    section: "col-span-full w-full grid gap-6",
    // Photo grid
    albumGrid: "col-span-full w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
    // Card shell for an album
    albumCard:
        "group block overflow-hidden rounded-2xl ring-1 ring-white/10 " +
        "hover:ring-white/20 transition bg-white/5 backdrop-blur-md min-w-0",
};

/* -----------------------------------------------------------------------------
 * DATA
 * --------------------------------------------------------------------------- */
/* -----------------------------------------------------------------------------
 * SMALL, REUSABLE UI PRIMITIVES
 * --------------------------------------------------------------------------- */

/** External link button used in both panels */
function ButtonLink({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={UI.cta}
        >
            {children}
            <ExternalIcon />
        </a>
    );
}


/** DRY “glass” panel with title + list of links */
function LinkPanel({ title, items }) {
    return (
        <div className={UI.panel}>
            <h3 className={UI.panelTitle}>{title}</h3>

            {/* Wrap + center so buttons never overflow on phones */}
            <div className={UI.panelBtnRow}>
                {items.map((t) => (
                    <ButtonLink key={t.label} href={t.href}>
                        {t.label}
                    </ButtonLink>
                ))}
            </div>
        </div>
    );
}


/* -----------------------------------------------------------------------------
 * PAGE
 * --------------------------------------------------------------------------- */
export default function Tools() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <>
            <PageShell>
                {/* --- Top section: description + two “glass” panels --- */}
                <section className={`${UI.container} ${UI.section}`}>
                    <div className={UI.topGrid}>
                        {/* Left: Description (copy unchanged, just padding is governed by UI.container) */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold">ROMX</h2>
                            <p className="text-white/95 leading-relaxed text-glow">
                                One integrated solution for Maintenance Tracking (TLMC), Utilization,
                                Inventory Management (multi-site/owners), Airworthiness Directives
                                (Compliance), and reporting. Built for flight-grade reliability.
                            </p>
                        </div>

                        {/* Middle: Tools in Preview */}
                        <LinkPanel title="Tools in Preview" items={PREVIEW_TOOLS} />

                        {/* Right: Legacy Help */}
                        <LinkPanel title="Legacy Help" items={LEGACY_HELP} />
                    </div>
                </section>

                {/* --- Photo Gallery (Albums) --- */}
                <section className={`${UI.container} ${UI.section}`}>
                    <h3 className="col-span-full text-3xl font-semibold">Photo Gallery</h3>

                    <div className={UI.albumGrid}>
                        {TOOL_ALBUMS.map((a, index) => (
                            <article
                                key={a.slug}
                                className={UI.albumCard}
                            >
                                <div className="flex items-center gap-3 px-4 pt-4">
                                    <FolderIcon />
                                    <div className="font-semibold">{a.title}</div>
                                    <div className="ml-auto text-sm text-white/90 text-glow">{a.count} photos</div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedIndex(index)}
                                    className="relative w-full aspect-[4/3] mt-3 text-left"
                                    aria-label={`Preview ${a.title} cover`}
                                >
                                    <img
                                        src={a.cover}
                                        alt={`${a.title} cover`}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                                        <p className="text-white/90 text-sm">{a.blurb}</p>
                                    </div>
                                </button>

                                <div className="px-4 py-3 flex items-center gap-2 text-sky-300">
                                    <Link to={`/gallery/${a.slug}`} className="inline-flex items-center gap-2 hover:underline">
                                        Open album <ArrowRight />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </PageShell>

            <ImageLightbox
                src={selectedIndex !== null ? TOOL_ALBUMS[selectedIndex]?.cover : null}
                alt={selectedIndex !== null ? `${TOOL_ALBUMS[selectedIndex]?.title} cover` : ''}
                onClose={() => setSelectedIndex(null)}
                canNavigate={selectedIndex !== null && TOOL_ALBUMS.length > 1}
                onPrev={() => setSelectedIndex((current) => (current - 1 + TOOL_ALBUMS.length) % TOOL_ALBUMS.length)}
                onNext={() => setSelectedIndex((current) => (current + 1) % TOOL_ALBUMS.length)}
            />
        </>
    );
}

/* --- tiny inline icons --- */
function ExternalIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
            <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
            <path fill="currentColor" d="M5 5h5V3H3v7h2V5z" />
            <path fill="currentColor" d="M5 21h14a2 2 0 0 0 2-2v-8h-2v8H5V7H3v12a2 2 0 0 0 2 2z" />
        </svg>
    );
}
function FolderIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-yellow-300/90">
            <path fill="currentColor" d="M10 4l2 2h8a2 2 0 0 1 2 2v1H2V6a2 2 0 0 1 2-2h6zm12 6H2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8z" />
        </svg>
    );
}
function ArrowRight() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
            <path fill="currentColor" d="M10 17l5-5-5-5v10z" />
        </svg>
    );
}
