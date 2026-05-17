export default function Footer() {
  return (
    <footer className="relative z-50 border-t border-white/10 mt-32 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-black tracking-[0.35em] uppercase text-white">
            WildShots
          </h2>

          <p className="text-neutral-500 text-sm mt-3">
            Wildlife Photography & Outdoor Expeditions
          </p>
        </div>

        {/* CENTER */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs uppercase tracking-[0.3em] text-neutral-500">

          <a
            href="/portfolio"
            className="px-4 py-2 hover:text-white transition"
          >
            Portfolio
          </a>

          <a
            href="/tours"
            className="px-4 py-2 hover:text-white transition"
          >
            Tours
          </a>

          <a
            href="/mentoring"
            className="px-4 py-2 hover:text-white transition"
          >
            Mentoring
          </a>

          <a
            href="/store"
            className="px-4 py-2 hover:text-white transition"
          >
            Prints
          </a>

          <a
            href="/about"
            className="px-4 py-2 hover:text-white transition"
          >
            About
          </a>

          <a
            href="/contact"
            className="px-4 py-2 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <a
            href="https://instagram.com/ssavaioan"
            target="_blank"
            className="border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>

          <a
            href="mailto:hello@wildshots.ro"
            className="border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition"
          >
            Email
          </a>

        </div>
      </div>
    </footer>
  );
}