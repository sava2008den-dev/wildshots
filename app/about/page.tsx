import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <img
          src="/images/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-5">
            About WildShots
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] max-w-5xl">
            Outdoor Photography & Life In The Wild
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <img
              src="/images/forest.jpg"
              className="w-full h-[500px] md:h-[700px] object-cover"
            />
          </div>

          {/* RIGHT */}
          <div className="pt-2">
            <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-600 mb-6">
              Outdoor Photographer & Wildlife Guide
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-10">
              Authentic Stories From Remote Places
            </h2>

            <div className="space-y-8 text-neutral-400 leading-relaxed text-lg">
              <p>
                WildShots was created around a simple idea — documenting the raw atmosphere of nature through authentic outdoor experiences, wildlife encounters and cinematic landscape photography.
              </p>

              <p>
                Most of the work is created deep in the forests and mountains of Romania, spending long days tracking wildlife, waiting for light and exploring remote wilderness areas.
              </p>

              <p>
                Beyond photography, WildShots is also about sharing these experiences through expeditions, workshops and outdoor mentoring for people who want to connect with nature in a real way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="pb-24 md:pb-40 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-5xl font-black leading-[1.1] text-neutral-200">
            “Built around wilderness, atmosphere and authentic outdoor storytelling.”
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}