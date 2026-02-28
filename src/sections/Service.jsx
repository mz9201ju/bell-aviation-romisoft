import { useEffect, useMemo, useState } from "react";
import PageShell from "./_PageShell";
import { SERVICES } from "../data/servicesData";

export default function Service() {
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    const selectedService = useMemo(
        () => SERVICES.find((service) => service.id === selectedServiceId) ?? null,
        [selectedServiceId]
    );

    useEffect(() => {
        if (!selectedServiceId) {
            return;
        }

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedServiceId(null);
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [selectedServiceId]);

    return (
        <>
            <PageShell
                title="Serving the Greater Baltimore Area"
                blurb="We offer Inspections, Maintenance, Repairs, and Pre-Buy Reviews"
            >
                {/* ✅ Uniform responsive grid like Tools page */}
                <section className="col-span-full mx-auto w-full grid gap-6 px-4
[grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
                    {SERVICES.map((s) => (
                        <button
                            type="button"
                            key={s.id}
                            onClick={() => setSelectedServiceId(s.id)}
                            aria-pressed={selectedService?.id === s.id}
                            className={`glass rounded-3xl p-5 sm:p-8 bg-white/10 backdrop-blur-xl 
            ring-1 transition-all duration-500 flex flex-col items-center justify-center gap-4 text-center ${selectedService?.id === s.id
                                    ? "ring-sky-300/80"
                                    : "ring-white/10 hover:ring-white/20"
                                }`}
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold">{s.title}</h3>
                            <p className="text-white/80 leading-relaxed">{s.description}</p>
                        </button>
                    ))}
                </section>
            </PageShell>

            {selectedService?.details && (
                <div
                    className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedService.title} details`}
                    onClick={() => setSelectedServiceId(null)}
                >
                    <article
                        className="w-full max-w-5xl rounded-3xl bg-white/90 p-6 sm:p-8 text-slate-800 shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-4 flex items-center justify-end">
                            <button
                                type="button"
                                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                                onClick={() => setSelectedServiceId(null)}
                            >
                                Close
                            </button>
                        </div>

                        <h2 className="text-center text-3xl font-semibold text-slate-900">{selectedService.details.heading}</h2>

                        {selectedService.details.paragraphs?.length > 0 && (
                            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                                {selectedService.details.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        )}

                        {selectedService.details.includedTitle && (
                            <h3 className="mt-8 text-2xl font-semibold text-slate-900">{selectedService.details.includedTitle}</h3>
                        )}

                        {selectedService.details.includedItems?.length > 0 && (
                            <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-slate-700">
                                {selectedService.details.includedItems.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {selectedService.details.note && (
                            <p className="mt-8 text-base text-slate-700">
                                <span className="font-semibold text-slate-900">Note:</span> {selectedService.details.note}
                            </p>
                        )}

                        {selectedService.details.ratesTable && (
                            <div className="mt-8 overflow-x-auto">
                                <table className="w-full min-w-[720px] border-collapse text-left text-base text-slate-700">
                                    <thead>
                                        <tr className="border-b border-slate-300">
                                            {selectedService.details.ratesTable.headers.map((header, index) => (
                                                <th key={`${header}-${index}`} className="px-3 py-3 font-semibold text-slate-900">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedService.details.ratesTable.rows.map((row, index) => (
                                            <tr key={`${row[0]}-${index}`} className="border-b border-slate-200">
                                                {row.map((cell, cellIndex) => (
                                                    <td key={`${cell}-${cellIndex}`} className="px-3 py-3 align-top">
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </article>
                </div>
            )}
        </>
    );
}
