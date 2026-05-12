export default function Contact() {
  return (
    <section
  id="contact"
  className="relative py-52 overflow-hidden"
>
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/forest.jpg')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <p className="uppercase tracking-[0.5em] text-sm text-neutral-400 mb-6">
          Contact
        </p>

        <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10">
          Ready For The Next Adventure?
        </h2>

        <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-14">
          Book a wildlife photography experience, join a workshop or collaborate with WildShots for cinematic outdoor storytelling.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-white text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition duration-300">
            Book a Tour
          </button>

          <button className="border border-white/30 px-10 py-5 rounded-full hover:bg-white hover:text-black transition duration-300">
            @ssavaioan
          </button>
        </div>
      </div>
    </section>
  );
}