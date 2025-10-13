import { useEffect, useState } from "react";

// Put your images in /src/assets/news/*
import pic1 from "../assets/news/NEWS1.jpg";
import pic2 from "../assets/news/NEWS2.jpg";

/** Centralized UI config (easy to tweak later) */
const UI = {
    cls: {
        page: "grid gap-8",
        card: "glass rounded-2xl p-6 border border-white/10",
        h1: "text-3xl sm:text-4xl font-bold text-glow",
        h2: "text-2xl font-semibold text-glow",
        tag: "text-white/70 text-glow",
        body: "text-white/80 text-glow",
        small: "text-white/60 text-sm",
        input:
            "rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20",
        btn:
            "rounded-xl bg-white/15 px-4 py-2 border border-white/10 hover:bg-white/25 transition font-semibold",
        commentItem: "rounded-xl bg-white/5 border border-white/10 p-3",
    },
    img: {
        height: "h-56",
        wrapper:
            "group relative overflow-hidden rounded-xl border border-white/10 bg-black/20",
        img:
            "w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 cursor-zoom-in",
        grid: "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
    },
    fmtDate: (iso) =>
        new Date(iso).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        }),
};

const POSTS = [
    {
        id: "bell-aviation-services-llc",
        title: "BELL AVIATION SERVICES, LLC",
        date: "2025-06-29",
        body:
            "Opening Bell Aviation Services to provide aircraft flight endorsements: tailwheel, high performance,\
             and complex, and full service aircraft maintenance and inspections. We have 2 unique and beautifully \
             maintained airplanes for the adventurist in you. ",
        images: [pic1, pic2],
    },
];

export default function News() {
    return (
        <section className={UI.cls.page}>
            <header className="grid gap-2">
                <h1 className={UI.cls.h1}>News</h1>
                <p className={UI.cls.tag}>Press notes, product drops, and ops updates.</p>
            </header>

            {/* Posts */}
            <div className="grid gap-6">
                {POSTS.map((post) => (
                    <article key={post.id} className={UI.cls.card}>
                        <div className="flex items-baseline justify-between gap-4 flex-wrap">
                            <h2 className={UI.cls.h2}>{post.title}</h2>
                            <time className={`${UI.cls.small} text-glow`}>
                                {UI.fmtDate(post.date)}
                            </time>
                        </div>

                        <p className={`${UI.cls.body} mt-3`}>{post.body}</p>

                        {!!post.images?.length && <ImageGrid images={post.images} />}
                    </article>
                ))}
            </div>

            {/* Comments (UI-only, no persistence) */}
            <CommentSection postId="nbaa-2025" />
        </section>
    );
}

/** Reusable grid with hover-zoom images */
function ImageGrid({ images }) {
    return (
        <div className={UI.img.grid}>
            {images.map((src, i) => (
                <figure key={i} className={UI.img.wrapper} aria-label="News image">
                    <img src={src} alt="" className={`${UI.img.img} ${UI.img.height}`} />
                    {/* Subtle overlay for contrast on hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-black" />
                </figure>
            ))}
        </div>
    );
}

function CommentSection({ postId }) {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "done"
    const [comments, setComments] = useState([]); // [{ id, name, message, created_at }]

    // Placeholder: load comments later via Cloudflare
    // useEffect(() => {
    //   fetch(`/api/comments?postId=${postId}`)
    //     .then((r) => r.json())
    //     .then(setComments)
    //     .catch(() => {});
    // }, [postId]);

    async function onSubmit(e) {
        e.preventDefault();
        setStatus("submitting");

        const newComment = {
            id: Date.now(),
            name: form.name.trim(),
            message: form.message.trim(),
            created_at: new Date().toISOString(),
        };
        setComments((c) => [newComment, ...c]);

        // Placeholder: persist later with Cloudflare Pages Functions + D1
        // await fetch("/api/comments", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ postId, ...form }),
        // });

        setStatus("done");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 1200);
    }

    return (
        <div className={UI.cls.card}>
            <h3 className="text-xl font-semibold mb-2 text-glow">Leave a reply</h3>

            {/* Existing comments (session-only) */}
            <div className="mb-4">
                <p className={`${UI.cls.tag} text-sm`}>
                    {comments.length} comment{comments.length !== 1 ? "s" : ""}
                </p>
                <ul className="mt-2 grid gap-3">
                    {comments.map((c) => (
                        <li key={c.id} className={UI.cls.commentItem}>
                            <div className="text-sm text-white/70">
                                <strong className="text-white text-glow">{c.name}</strong>{" "}
                                <span>· {new Date(c.created_at).toLocaleString()}</span>
                            </div>
                            <p className="mt-1 text-glow">{c.message}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="grid gap-3 max-w-2xl">
                <label className="grid gap-1">
                    <span className={`${UI.cls.tag} text-sm`}>Name *</span>
                    <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={UI.cls.input}
                        placeholder="Your name"
                    />
                </label>

                <label className="grid gap-1">
                    <span className={`${UI.cls.tag} text-sm`}>E-mail *</span>
                    <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={UI.cls.input}
                        placeholder="you@example.com"
                    />
                </label>

                <label className="grid gap-1">
                    <span className={`${UI.cls.tag} text-sm`}>Enter your message</span>
                    <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={UI.cls.input}
                        placeholder="Say hello…"
                    />
                </label>

                <div className="flex items-center gap-3">
                    <button type="submit" className={UI.cls.btn} disabled={status === "submitting"}>
                        {status === "submitting" ? "Sending…" : "Add comment"}
                    </button>
                    {status === "done" && (
                        <span className={`${UI.cls.tag} text-sm`}>Added (not saved).</span>
                    )}
                </div>
            </form>
        </div>
    );
}
