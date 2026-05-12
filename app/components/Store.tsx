export default function Store() {
  return (
    <section
  id="store"
  className="py-40 px-8 max-w-7xl mx-auto"
>
      <div className="mb-20 max-w-4xl">
        <p className="uppercase tracking-[0.4em] text-sm text-neutral-500 mb-6">
          Fine Art Store
        </p>

        <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8">
          Prints Made For The Wild.
        </h2>

        <p className="text-xl text-neutral-400 leading-relaxed">
          Museum-quality wildlife prints and licensed full-resolution imagery for collectors, brands and storytellers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* PRODUCT 1 */}
        <div className="group">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/bear.jpg"
              className="h-[600px] w-full object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="pt-6">
            <div className="flex justify-between items-start gap-6">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-3">
                  Fine Art Print
                </p>

                <h3 className="text-3xl font-black">
                  Into The Mist
                </h3>
              </div>

              <p className="text-neutral-300">
                €120
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT 2 */}
        <div className="group">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/mountains.jpg"
              className="h-[600px] w-full object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="pt-6">
            <div className="flex justify-between items-start gap-6">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-3">
                  Landscape Collection
                </p>

                <h3 className="text-3xl font-black">
                  Northern Peaks
                </h3>
              </div>

              <p className="text-neutral-300">
                €95
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT 3 */}
        <div className="group">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/forest.jpg"
              className="h-[600px] w-full object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="pt-6">
            <div className="flex justify-between items-start gap-6">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-3">
                  Cinematic Wilderness
                </p>

                <h3 className="text-3xl font-black">
                  Silent Forest
                </h3>
              </div>

              <p className="text-neutral-300">
                €140
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}