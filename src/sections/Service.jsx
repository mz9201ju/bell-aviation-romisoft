import PageShell from "./_PageShell";
import { SERVICES } from "../data/servicesData";

export default function Service() {
    return (
        <PageShell
            title="Serving the Greater Baltimore Area"
            blurb="We offer Inspections, Maintenance, Repairs, and Pre-Buy Reviews"
        >
            {/* ✅ Uniform responsive grid like Tools page */}
            <section className="col-span-full mx-auto w-full grid gap-6 px-4
[grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
                {SERVICES.map((s) => (
                    <div
                        key={s.id}
                        className="glass rounded-3xl p-5 sm:p-8 bg-white/10 backdrop-blur-xl 
            ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 
            flex flex-col items-center justify-center gap-4 text-center"
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold">{s.title}</h3>
                        <p className="text-white/80 leading-relaxed">{s.description}</p>
                    </div>
                ))}
            </section>
        </PageShell>
    );
}
