import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrintPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-36 pb-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* IMAGE */}
          <div>
            <img
              src="/images/bear.jpg"
              className="w-full h-[500px] md:h-[900px] object-cover"
            />
          </div>

          {/* INFO */}
          <div className="md:sticky md:top-32">
            <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-600 mb-5">
              Fine Art Print
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              Carpathian Encounters
            </h1>

            <p className="text-neutral-400 leading-relaxed text-lg mb-10">
              Captured deep in the Romanian wilderness after long hours of tracking through remote forest terrain.
            </p>

            {/* PRICES */}
            <div className="border-y border-white/10 py-8 space-y-5 mb-10">
              <div className="flex justify-between">
                <p className="text-neutral-500">Small Print</p>
                <p>€120</p>
              </div>

              <div className="flex justify-between">
                <p className="text-neutral-500">Medium Print</p>
                <p>€180</p>
              </div>

              <div className="flex justify-between">
                <p className="text-neutral-500">Large Print</p>
                <p>€260</p>
              </div>
            </div>

            {/* DETAILS */}
            <div className="space-y-5 text-neutral-500 text-sm leading-relaxed mb-12">
              <p>
                Museum-quality fine art print on premium matte paper.
              </p>

              <p>
                Printed in limited quantities with worldwide shipping available.
              </p>
            </div>

            {/* BUTTON */}
            <a
              href="https://wa.me/+40700000000?text=Hi!%20I'm%20interested%20in%20the%20Carpathian%20Encounters%20print."
              target="_blank"
              className="inline-block border border-white/20 px-10 py-5 uppercase tracking-[0.3em] text-sm font-bold hover:bg-white hover:text-black transition"
            >
              Order Print
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}