import PageShell from "./_PageShell";

const SERVICES = [
    { id: "inspections", title: "Inspections", description: "Comprehensive annual, 100-hour, and progressive inspections for piston and turbine aircraft. We ensure FAA compliance, detailed reporting, and transparent service history tracking." },
    { id: "maintenance", title: "Maintenance", description: "Full-spectrum maintenance including airframe, powerplant, avionics troubleshooting, and component replacements — all handled by certified technicians with precision and care." },
    { id: "prebuy", title: "Pre-Buy", description: "Expert pre-purchase evaluations that highlight potential airworthiness issues, maintenance forecasting, and value optimization — confidence before any acquisition." },
    { id: "rates", title: "Rates", description: "Competitive, transparent, and scalable for owners and fleets. Ask for tailored packages and labor rates." },
];

export default function Service() {
    return (
        <PageShell
            title="Serving the greater Baltimore Area"
            blurb="We offer Inspections, Maintenance, Repairs, and Pre-Buy Reviews"
        >
            {/* ✅ Full-width, responsive grid with a sane min card width */}
            <div className="glass rounded-3xl p-8 bg-white/10 backdrop-blur-xl ring-1 ring-white/10 hover:ring-white/20 
transition-all duration-500 grid gap-6 items-center justify-center text-center 
col-span-full mx-auto w-full max-w-7xl [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">

                {SERVICES.map((s) => (
                    <div
                        key={s.id}
                        className="glass rounded-2xl p-6 sm:p-7 text-glow transition
                       hover:scale-[1.02] hover:bg-white/10 h-full"
                    >
                        <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
                        <p className="text-white/90 leading-relaxed">{s.description}</p>
                    </div>
                ))}
            </div>
        </PageShell>
    );
}
