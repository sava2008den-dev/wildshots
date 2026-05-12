export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-14 mb-20">
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-black tracking-[0.35em] uppercase mb-5">
              WildShots
            </h2>

            <p className="text-neutral-500 leading-relaxed">
              Cinematic wildlife photography, immersive expeditions and outdoor storytelling by Sava Ioan.
            </p>
          </div>

          {/* NAV */}
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-6">
              Navigation
            </p>

            <div className="space-y-4 text-neutral-300">
              <p>Portfolio</p>
              <p>Tours</p>
              <p>Mentoring</p>
              <p>Prints</p>
              <p>About</p>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-6">
              Services
            </p>

            <div className="space-y-4 text-neutral-300">
              <p>Wildlife Workshops</p>
              <p>Photography Tours</p>
              <p>Outdoor Mentoring</p>
              <p>Fine Art Prints</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-6">
              Contact
            </p>

            <div className="space-y-4 text-neutral-300">
              <p>@ssavaioan</p>
              <p>Romania</p>
              <p>Outdoor Photography</p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-500">
          <p>© 2026 WildShots by Sava Ioan</p>

          <p>Built for the wild.</p>
        </div>
      </div>
    </footer>
  );
}