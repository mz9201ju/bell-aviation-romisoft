import PageShell from './_PageShell';
import NBAA_LOGO from '../assets/nbaa.png';

export default function Home() {
    return (
        <PageShell
            title="Aviation Services & Software"
            blurb="for Aviation Professionals"
        >
            <div className="glass rounded-2xl p-6 sm:col-span-2 backdrop-blur-md bg-black/30 text-white shadow-lg">
                <h3 className="text-xl text-white font-semibold mb-2 text-glow">Aircraft Maintenance, Repair & Inspections</h3>
                <p className="text-white/80 mb-4 text-glow">Bell Aviation Services has a rich history in Aircraft Maintenance,
                    Repair, Operations, Worldwide Recovery,
                    Avionics, Fleet Maintenance & Logistics. Building on foundational services, the software arm
                    of this business is ROMISOFT supporting both commercial and military aircraft mixed fleet operations.
                    We also offer individualized FAA part 61 training for High Performance, Complex, and Tail Wheel
                    endorsements using our own classic airplanes. We are a small business and veteran owned.</p>
                <a
                    href="https://www.romisoft.aero/products/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xl bg-white/15 px-4 py-2 border border-white/10 hover:bg-white/25 transition text-white font-semibold"
                >
                    Book Today!
                </a>
                <img
                    src={NBAA_LOGO}
                    alt="NBAA"
                    className="h-8 sm:h-15 w-auto opacity-90 hover:opacity-100 transition ml-auto"
                />

            </div>
        </PageShell>
    );
}