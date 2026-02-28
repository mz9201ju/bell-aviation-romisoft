import { useState } from "react";
import ImageLightbox from "../components/ImageLightbox";
// Put your images in /src/assets/news/*
import pic1 from "../assets/about_us/image1.png";
import pic2 from "../assets/about_us/image2.png";
import pic3 from "../assets/about_us/image3.png";
import pic4 from "../assets/about_us/image4.png";

/** Centralized UI config (easy to tweak later) */
const UI = {
    cls: {
        page: "grid gap-8",
        card: "glass rounded-2xl p-6 border border-white/10",
        h1: "text-3xl sm:text-4xl font-bold text-glow",
        h2: "text-2xl font-semibold text-glow",
        tag: "text-white/70 text-glow",
        body: "text-white/80 text-glow",
    },
    img: {
        height: "h-56",
        wrapper:
            "group relative overflow-hidden rounded-xl border border-white/10 bg-black/20",
        img:
            "w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 cursor-zoom-in",
        grid: "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
    }
};

const POSTS = [
    {
        id: "bell-aviation-services-llc",
        title: "Legacy BDM",
        images: [pic1, pic2, pic3, pic4],
    },
];

export default function About() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const currentImages = POSTS[0]?.images ?? [];

    return (
        <>
            <section className={UI.cls.page}>
                <header className="grid gap-2">
                    <h1 className={UI.cls.h1}>About Us</h1>
                    <p className={UI.cls.tag}>The owner began his aircraft maintenance trade in the military working on Beechcraft King Air's
                     (C-12/U21) in Europe, later working heavy maintenance and then shifting to avionics on FAA Part 121 aircraft out of
                      Seattle Washington. After working at the airlines he went to Beechcraft Aerospace Services, Inc (BASI) and worked
                       Europe, Middle-East, and Africa. During this period he created a software suite to manage Beechcraft King Air's 
                       (C-12/U-21), and later Learjet's (35A) for all four United States military services: Air Force, Army, Navy, and 
                       Marines. The software he wrote first entered service in 1992 as a simple Time Limit Maintenance Check (TLMC) manager 
                       that helped track and forecast scheduled and unscheduled maintenance, and standardized all TLMC items across a fleet
                        that spanned hundreds of aircraft. Inventory management was later added to automate repetitive tasks needed to track 
                        and manage parts flowing into and out of field site across the globe. The final step was to enable bidirectional 
                        communication from site to home office; a very simple task today, but quite difficult in the mid 1990's with 
                        a geographically dispersed fleet using modems daisy-chained for communication routing. Along the way he earned 2 
                    degrees with Embry-Riddle Aeronautical University, a Bachelor of Science degree in Aircraft Maintenance, and a Masters
                     of Business Administration (MBA) degree, his Private Pilots ticket with endorsements for High Performance, Complex, 
                     and Tailwheel. Later, he bought two classic aircraft, a '47 Cessna 140 and a '48 Navion that he uses for FAA Part 
                     61 endorsement training. The owner is an A&P with IA privileges having been in the aircraft industry since '78. </p>
                 </header>

                {/* Posts */}
                <div className="grid gap-6">
                    {POSTS.map((post) => (
                        <article key={post.id} className={UI.cls.card}>
                            <div className="flex items-baseline justify-between gap-4 flex-wrap">
                                <h2 className={UI.cls.h2}>{post.title}</h2>
                            </div>

                            {!!post.images?.length && (
                                <ImageGrid images={post.images} onImageClick={setSelectedIndex} />
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <ImageLightbox
                src={selectedIndex !== null ? currentImages[selectedIndex] : null}
                alt={selectedIndex !== null ? `About image ${selectedIndex + 1}` : ''}
                onClose={() => setSelectedIndex(null)}
                canNavigate={selectedIndex !== null && currentImages.length > 1}
                onPrev={() => setSelectedIndex((current) => (current - 1 + currentImages.length) % currentImages.length)}
                onNext={() => setSelectedIndex((current) => (current + 1) % currentImages.length)}
            />
        </>
    );
}

/** Reusable grid with hover-zoom images */
function ImageGrid({ images, onImageClick }) {
    return (
        <div className={UI.img.grid}>
            {images.map((src, i) => (
                <button
                    type="button"
                    key={i}
                    className={`${UI.img.wrapper} w-full text-left`}
                    aria-label="Open about image"
                    onClick={() => onImageClick(i)}
                >
                    <img src={src} alt="" className={`${UI.img.img} ${UI.img.height}`} />
                    {/* Subtle overlay for contrast on hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-black" />
                </button>
            ))}
        </div>
    );
}
