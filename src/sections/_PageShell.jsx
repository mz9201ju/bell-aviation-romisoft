export default function PageShell({ title, blurb, children }) {
    return (
        <section className="grid gap-6">
            <header className="grid gap-2">
                <h1 className="text-3xl sm:text-4xl font-bold font-display">{title}</h1>
                {blurb && <p className="text-white/70 max-w-2xl text-glow">{blurb}</p>}
            </header>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {children ?? (
                    <div className="glass rounded-2xl p-6">Starter content goes here.</div>
                )}
            </div>
        </section>
    );
}