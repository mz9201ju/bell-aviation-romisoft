import PageShell from './_PageShell';
import aircraft1 from "../assets/aircrafts/aircraft1.jpeg";
import aircraft2 from '../assets/aircrafts/aircraft2.jpeg';
import aircraft3 from '../assets/aircrafts/aircraft3.jpeg';
import aircraft4 from '../assets/aircrafts/aircraft4.jpg';
import aircraft5 from '../assets/aircrafts/aircraft5.jpeg';
import aircraft6 from '../assets/aircrafts/aircraft6.jpg';
import aircraft7 from '../assets/aircrafts/aircraft7.jpg';

const AIRCRAFT = [
  { id: 1, name: 'Cessna T-41 Mescalero (Trainer)', img: aircraft1 },
  { id: 2, name: 'Cessna 172 Cockpit Panel', img: aircraft2 },
  { id: 3, name: 'Cessna T-41B Military Trainer', img: aircraft3 },
  { id: 4, name: 'Avionics Upgrade Display', img: aircraft4 },
  { id: 5, name: 'In-Flight Training Session', img: aircraft5 },
  { id: 6, name: 'Cessna 150M (Light Sport Aircraft)', img: aircraft6 },
  { id: 7, name: 'Hangar Maintenance Bay', img: aircraft7 },
];

export default function Aircraft() {
    return (
        <PageShell
            title="Fleet"
            blurb="Pictures of our Airplanes"
        >
            {/* ✅ Responsive grid with a minimum card width so tiles don’t collapse */}
            <div className="col-span-full mx-auto w-full max-w-7xl grid gap-6
                      [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
                <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                    {AIRCRAFT.map((plane) => (
                        <a
                            key={plane.id}
                            href={plane.img}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block w-full rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm ring-1 ring-white/10 hover:ring-white/20 transition"
                        >
                            {/* ✅ Force a normal photo shape */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden">
                                <img
                                    src={plane.img}
                                    alt={plane.name}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* subtle gradient + title */}
                                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
                                    <span className="text-white font-semibold drop-shadow">{plane.name}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </PageShell>
    );
}
