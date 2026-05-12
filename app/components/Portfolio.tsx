export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 md:py-40 px-6 md:px-8 max-w-7xl mx-auto"
    >
      <div className="mb-16 max-w-3xl">
        <p className="uppercase tracking-[0.4em] text-sm text-neutral-500 mb-6">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-8xl font-black leading-[0.95] mb-8">
          Stories From The Wild.
        </h2>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          Cinematic wildlife and landscape photography captured through remote expeditions and authentic outdoor experiences.
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-12 gap-6">
        {/* BIG IMAGE */}
        <div className="relative overflow-hidden rounded-[2rem] group md:col-span-7">
          <img
            src="/images/bear.jpg"
            className="h-[320px] md:h-[760px] w-full object-cover group-hover:scale-[1.03] transition duration-[1600ms]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

          <div className="absolute bottom-0 p-6 md:p-10">
            <p className="uppercase tracking-[0.3em] text-xs text-neutral-300 mb-3">
              Wildlife
            </p>

            <h3 className="text-3xl md:text-5xl font-black">
              Carpathian Bear
            </h3>
          </div>
        </div>

        {/* SIDE COLUMN */}
        <div className="flex flex-col gap-6 md:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] group">
            <img
              src="/images/mountains.jpg"
              className="h-[160px] md:h-[367px] w-full object-cover group-hover:scale-[1.03] transition duration-[1600ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

            <div className="absolute bottom-0 p-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Wild Mountains
              </h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] group">
            <img
              src="/images/forest.jpg"
              className="h-[160px] md:h-[367px] w-full object-cover group-hover:scale-[1.03] transition duration-[1600ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

            <div className="absolute bottom-0 p-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Silent Forest
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}