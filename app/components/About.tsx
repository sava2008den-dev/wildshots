export default function About() {
  return (
    <section
  id="about"
  className="py-40 bg-neutral-950 border-y border-white/10"
>
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        {/* IMAGE */}
        <div className="relative">
          <img
            src="/images/hero.jpg"
            className="rounded-[2rem] h-[800px] w-full object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-transparent rounded-b-[2rem]">
            <p className="uppercase tracking-[0.4em] text-xs text-neutral-300 mb-3">
              WildShots
            </p>

            <h3 className="text-4xl font-black">
              Stories From The Carpathian Wilderness
            </h3>
          </div>
        </div>

        {/* TEXT */}
        <div>
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-500 mb-6">
            About
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10">
            Chasing Light Through Untamed Landscapes.
          </h2>

          <div className="space-y-8 text-lg text-neutral-300 leading-relaxed">
            <p>
              WildShots by Sava Ioan is a cinematic wildlife photography project focused on authentic outdoor experiences, nature conservation and visual storytelling.
            </p>

            <p>
              Through remote expeditions, wildlife encounters and immersive workshops, WildShots documents the raw beauty of the natural world and creates experiences for people who want to reconnect with the wild.
            </p>

            <p>
              From the Carpathian Mountains to hidden forests and remote landscapes, every frame is built around atmosphere, emotion and respect for nature.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6 mt-16">
            <div className="border border-white/10 rounded-[2rem] p-8">
              <div className="text-6xl font-black mb-3">
                120+
              </div>

              <div className="uppercase tracking-[0.3em] text-xs text-neutral-500">
                Tours Guided
              </div>
            </div>

            <div className="border border-white/10 rounded-[2rem] p-8">
              <div className="text-6xl font-black mb-3">
                15K+
              </div>

              <div className="uppercase tracking-[0.3em] text-xs text-neutral-500">
                Photos Captured
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}