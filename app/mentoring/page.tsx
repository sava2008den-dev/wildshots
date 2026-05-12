import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MentoringPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url('/images/forest.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-400 mb-6">
            WildShots Mentoring
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] max-w-5xl">
            Learn Outdoor Photography In The Field
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
              1-on-1 Experience
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              Outdoor Photography Mentoring
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Private mentoring sessions focused on wildlife, landscape and cinematic outdoor photography in real natural environments.
            </p>

            <p className="text-neutral-400 text-lg leading-relaxed">
              Learn camera technique, composition, storytelling, field workflow and how to build authentic outdoor imagery through practical experience in the wild.
            </p>
          </div>

          {/* RIGHT */}
          <div className="border border-white/10 rounded-[2rem] p-10 bg-neutral-950">
            <h3 className="text-3xl font-black mb-10">
              What You’ll Learn
            </h3>

            <div className="space-y-6 text-neutral-300">
              <div>• Wildlife photography fundamentals</div>

              <div>• Outdoor composition & storytelling</div>

              <div>• Landscape photography workflow</div>

              <div>• Camera settings in difficult conditions</div>

              <div>• Editing & cinematic color grading</div>

              <div>• Tracking light and atmosphere</div>

              <div>• Building a strong outdoor portfolio</div>
            </div>

            <button className="mt-12 w-full bg-white text-black py-5 rounded-full font-bold">
              Request Mentoring
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}