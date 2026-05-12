export default function Tours() {
  return (
    <section
  id="tours"
  className="py-40 bg-neutral-950 border-y border-white/10"
>
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-500 mb-6">
            Wildlife Tours
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8">
            Expeditions Into Untamed Places.
          </h2>

          <p className="text-xl text-neutral-400 leading-relaxed">
            Guided wildlife photography experiences through remote forests,
            mountain landscapes and authentic nature habitats.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/images/bear.jpg"
                className="h-[550px] w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-700"></div>

              <div className="absolute bottom-0 p-8">
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-300 mb-3">
                  Carpathian Wilderness
                </p>

                <h3 className="text-4xl font-black leading-tight">
                  Wildlife Photo Tours
                </h3>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/images/mountains.jpg"
                className="h-[550px] w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-700"></div>

              <div className="absolute bottom-0 p-8">
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-300 mb-3">
                  Romanian Mountains
                </p>

                <h3 className="text-4xl font-black leading-tight">
                  Landscape Expeditions
                </h3>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/images/forest.jpg"
                className="h-[550px] w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-700"></div>

              <div className="absolute bottom-0 p-8">
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-300 mb-3">
                  Remote Forests
                </p>

                <h3 className="text-4xl font-black leading-tight">
                  Private Wildlife Guiding
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}