import RevealText from "./RevealText";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] md:h-screen bg-cover bg-center flex items-end overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/hero.jpg')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pb-20 md:pb-32">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.5em] text-sm text-neutral-300 mb-6">
            Outdoor Photographer & Wildlife Guide
          </p>

          <RevealText>
  <h1 className="text-5xl sm:text-6xl md:text-9xl font-black leading-[0.9] tracking-tight">
    WildShots
  </h1>
</RevealText>

          <p className="mt-4 text-sm uppercase tracking-[0.4em] text-neutral-400">
            by Sava Ioan
          </p>

          <p className="mt-10 text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-2xl">
            Wildlife expeditions, cinematic landscape photography and authentic outdoor experiences through the wild heart of Europe.
          </p>

          <div className="flex flex-wrap gap-4 mt-12">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Explore The Wild
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Book An Expedition
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 text-sm tracking-[0.3em] uppercase">
        Scroll
      </div>
    </section>
  );
}