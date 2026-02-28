export default function Footer() {
    return (
        <footer className="mt-6">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
                <div className="glass rounded-2xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="w-full text-center text-white/90 text-sm text-glow">© {new Date().getFullYear()} Bell Aviation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}