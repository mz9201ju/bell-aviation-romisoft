// src/pages/Projects.jsx
import PageShell from './_PageShell';
import { Link } from "react-router-dom";
import { FolderIcon } from "lucide-react"; // same as gallery icons

const PROJECTS = [
    {
        slug: "comparison_module",
        title: "Comparison Module",
        description: "Summary, Range, Wizard",
        count: "3 Pictures",
    },
    {
        slug: "cost_analyzer",
        title: "Cost Analyzer",
        description: "Lone, Deprication Wizard, Reporting, Export, Summary Analysis",
        count: "5 Pictures",
    }
];

export default function Projects() {
    return (
        <PageShell
            title="Completed Project Gallery"
            blurb="Bootstrap CTO, Equity Partner"
        >
            {/* Responsive grid layout similar to Photo Gallery */}
            <div className="glass rounded-3xl p-8 bg-white/10 backdrop-blur-xl ring-1 ring-white/10 hover:ring-white/20 
transition-all duration-500 grid gap-6 items-center justify-center text-center 
col-span-full mx-auto w-full max-w-7xl [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">

                {PROJECTS.map((p) => (
                    <Link
                        key={p.slug}
                        to={`/projects/${p.slug}`}
                        className="group block overflow-hidden rounded-2xl ring-1 ring-white/10 hover:ring-white/20 transition
                       bg-white/5 backdrop-blur-md"
                    >
                        {/* Header row like folder */}
                        <div className="flex items-center gap-3 px-4 pt-4">
                            <FolderIcon />
                            <div className="font-semibold">{p.title}</div>
                            <div className="ml-auto text-sm text-white/70">{p.count}</div>
                        </div>

                        {/* Description */}
                        <div className="px-4 pb-4 pt-2 text-white/80 leading-relaxed">
                            {p.description}
                        </div>
                    </Link>
                ))}
            </div>
        </PageShell>
    );
}
