export default function PageShell({ title, blurb, children, align = "left" }) {
    const isCentered = align === "center";

    return (
        <section className="grid gap-6">
            <header className={`grid gap-2 ${isCentered ? "justify-items-center text-center" : ""}`}>
                <h1 className="text-3xl sm:text-4xl font-bold font-display text-glow">{title}</h1>
                {blurb && <p className={`text-white/90 max-w-2xl text-glow ${isCentered ? "mx-auto" : ""}`}>{blurb}</p>}
            </header>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {children ?? (
                    <div className="glass rounded-2xl p-6">Starter content goes here.</div>
                )}
            </div>
        </section>
    );
}