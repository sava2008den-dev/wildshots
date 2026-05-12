import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ToursPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-400 mb-6">
            WildShots Expeditions
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] max-w-5xl">
            Wildlife & Landscape Tours Across Romania
          </h1>
        </div>
      </section>

      {/* TOURS */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* TOUR 1 */}
          <div className="border border-white/10 overflow-hidden">
            <img
              src="/images/bear.jpg"
              className="h-[500px] w-full object-cover"
            />

            <div className="p-8">
              <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
                Carpathian Wilderness
              </p>

              <h2 className="text-4xl font-black mb-6">
                Wildlife Photo Tour
              </h2>

              <p className="text-neutral-400 leading-relaxed mb-8">
                Multi-day wildlife photography experience focused on tracking, outdoor storytelling and authentic encounters in Romania’s remote forests.
              </p>

              <a
                href="https://wa.me/+40740275555?text=Hi!%20I'm%20interested%20in%20the%20Wildlife%20Photo%20Tour."
                target="_blank"
                className="inline-block bg-white text-black px-8 py-4 uppercase tracking-[0.3em] text-sm font-bold"
              >
                Request Expedition
              </a>
            </div>
          </div>

          {/* TOUR 2 */}
          <div className="border border-white/10 overflow-hidden">
            <img
              src="/images/mountains.jpg"
              className="h-[500px] w-full object-cover"
            />

            <div className="p-8">
              <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
                Romanian Mountains
              </p>

              <h2 className="text-4xl font-black mb-6">
                Landscape Expedition
              </h2>

              <p className="text-neutral-400 leading-relaxed mb-8">
                Cinematic landscape photography expedition through alpine terrain, remote ridges and wild camping locations.
              </p>

              <a
                href="https://wa.me/+40740275555?text=Hi!%20I'm%20interested%20in%20the%20Landscape%20Expedition."
                target="_blank"
                className="inline-block bg-white text-black px-8 py-4 uppercase tracking-[0.3em] text-sm font-bold"
              >
                Join Expedition
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}