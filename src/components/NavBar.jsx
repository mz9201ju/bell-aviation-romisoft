import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppIcon from "./AppIcon";

const nav = [
    { to: "/", label: "Home" },
    { to: "/news", label: "News" },
    { to: "/service", label: "Service" },
    { to: "/aircraft", label: "Aircraft" },
    { to: "/tools", label: "Tools" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);

    // 🎨 Easy color configuration
    const colors = {
        text: "text-white",
        textDim: "text-white/60",
        activeText: "text-sky-400",
        hoverText: "hover:text-sky-300",
        hoverBg: "hover:bg-white/5",
        activeBg: "bg-white/10",
    };

    // 🧠 Shared base style
    const base =
        "text-sm font-semibold tracking-wide px-3 py-2 rounded-xl transition-colors duration-300";

    // 🧭 Combine active/inactive logic
    const navClass = ({ isActive }) =>
        `${base} ${isActive
            ? `${colors.activeText} ${colors.activeBg}`
            : `${colors.text} ${colors.hoverText} ${colors.hoverBg}`
        }`;

    return (
        <header className="sticky top-0 z-20 text-glow">
            
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-3">
                <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 backdrop-blur-md">
                    {/* Brand */}
                    <Link to="/" className="flex items-center gap-3">
                        <AppIcon />
                        <div className="leading-tight">
                            <div className={`font-bold ${colors.text}`}>
                                <span className={colors.activeText}>Bell Aviation Services / ROMISOFT</span>
                            </div>
                            <div className={`text-xs ${colors.textDim}`}>
                                Flight-grade solutions
                            </div>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {nav.map((n) => (
                            <NavLink
                                key={n.to}
                                to={n.to}
                                className={navClass}
                                onClick={() => setOpen(false)}
                            >
                                {n.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Mobile burger */}
                    <button
                        className="md:hidden rounded-xl border border-white/10 bg-white/10 px-3 py-2"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 7h16M4 12h16M4 17h16"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {open && (
                <div className="md:hidden mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 pb-3">
                    <div className="glass rounded-2xl px-2 py-2">
                        {nav.map((n) => (
                            <NavLink
                                key={n.to}
                                to={n.to}
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl ${isActive
                                        ? `${colors.activeBg} ${colors.activeText}`
                                        : `${colors.text} ${colors.hoverText} ${colors.hoverBg}`
                                    }`
                                }
                                onClick={() => setOpen(false)}
                            >
                                {n.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
