import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <img
          src="/images/mountains.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-5">
            Contact WildShots
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] max-w-5xl">
            Let’s Build An Outdoor Experience
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-600 mb-6">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-10">
            Tours, Mentoring & Collaborations
          </h2>

          <div className="space-y-8 text-neutral-400 leading-relaxed text-lg max-w-2xl mx-auto">
            <p>
              Interested in wildlife tours, outdoor mentoring, fine art prints or collaborations?
            </p>

            <p>
              WildShots focuses on authentic outdoor experiences, cinematic storytelling and remote expeditions through Romania’s wilderness.
            </p>

            <p>
              The fastest way to get in touch is through WhatsApp or Instagram.
            </p>
          </div>

          {/* CONTACT BUTTONS */}
          <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/+40740275555"
              target="_blank"
              className="border border-white/20 px-10 py-5 uppercase tracking-[0.3em] text-sm font-bold hover:bg-white hover:text-black transition"
            >
              WhatsApp
            </a>

            <a
              href="tel:+40740275555"
              className="border border-white/20 px-10 py-5 uppercase tracking-[0.3em] text-sm font-bold hover:bg-white hover:text-black transition"
            >
              Call Now
            </a>

            <a
              href="https://instagram.com/ssavaioan"
              target="_blank"
              className="border border-white/20 px-10 py-5 uppercase tracking-[0.3em] text-sm font-bold hover:bg-white hover:text-black transition"
            >
              Instagram
            </a>
          </div>

          {/* INFO */}
          <div className="mt-20 space-y-5 text-neutral-500">
            <p>Phone: +40 740275555</p>

            <p>Instagram: @ssavaioan</p>

            <p>Romania</p>

            <p>Outdoor Photography & Wildlife Experiences</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}