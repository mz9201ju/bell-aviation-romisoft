import PageShell from './_PageShell';
export default function Contact() {
    return (
        <PageShell title="Contact" blurb="Ping us—wheels up within 24 hours.">
            <form className="glass rounded-2xl p-6 grid gap-4 max-w-xl">
                <input className="rounded-lg bg-white/10 border border-white/10 px-3 py-2" placeholder="Name" />
                <input className="rounded-lg bg-white/10 border border-white/10 px-3 py-2" placeholder="Email" />
                <textarea className="rounded-lg bg-white/10 border border-white/10 px-3 py-2" rows="4" placeholder="How can we help?" />
                <button type="button" className="rounded-xl bg-white/15 px-4 py-2 border border-white/10 hover:bg-white/25 transition">Send</button>
            </form>
        </PageShell>
    );
}