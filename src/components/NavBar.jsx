import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppIcon from "./AppIcon";
import { NAV_ITEMS } from "../data/navigation";

const COLORS = {
    text: "text-white",
    textDim: "text-white/85",
    activeText: "text-sky-400",
    hoverText: "hover:text-sky-300",
    hoverBg: "hover:bg-white/5",
    activeBg: "bg-white/10",
};

const BASE_NAV_CLASS =
    "text-sm font-semibold tracking-wide px-3 py-2 rounded-xl transition-colors duration-300";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const navClass = ({ isActive }) =>
        `${BASE_NAV_CLASS} ${isActive
            ? `${COLORS.activeText} ${COLORS.activeBg}`
            : `${COLORS.text} ${COLORS.hoverText} ${COLORS.hoverBg}`
        }`;

    return (
        <header className="sticky top-0 z-20 text-glow">
            
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-3">
                <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 backdrop-blur-md">
                    {/* Brand */}
                    <Link to="/" className="flex min-w-0 items-center gap-3">
                        <AppIcon />
                        <div className="leading-tight min-w-0">
                            <div className={`font-bold ${COLORS.text} text-sm sm:text-base truncate`}>
                                <span className={COLORS.activeText}>Bell Aviation Services / ROMISOFT</span>
                            </div>
                            <div className={`text-xs ${COLORS.textDim} truncate`}>
                                Flight-grade solutions
                            </div>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((n) => (
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
                        {NAV_ITEMS.map((n) => (
                            <NavLink
                                key={n.to}
                                to={n.to}
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl ${isActive
                                        ? `${COLORS.activeBg} ${COLORS.activeText}`
                                        : `${COLORS.text} ${COLORS.hoverText} ${COLORS.hoverBg}`
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
