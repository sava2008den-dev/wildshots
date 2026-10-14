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
    <a
      href="/prints/carpathian-encounters"
      className="relative overflow-hidden rounded-[2rem] group md:col-span-7 block"
    >
      <img
        src="/images/bear.jpg"
        alt="Born for Speed"
        className="h-[320px] md:h-[760px] w-full object-cover group-hover:scale-[1.03] transition duration-[1600ms]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 p-6 md:p-10">
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
          Born for Speed
        </h3>
        <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-white/90">
          Check Print Availability
        </p>
      </div>
    </a>

    <div className="flex flex-col gap-6 md:col-span-5">
      <a
        href="/prints/quiet-power"
        className="relative overflow-hidden rounded-[2rem] group block"
      >
        <img
          src="/images/mountains.jpg"
          alt="Quiet Power — bison"
          className="h-[160px] md:h-[367px] w-full object-cover group-hover:scale-[1.03] transition duration-[1600ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
            Quiet Power
          </h3>
          <p className="uppercase tracking-[0.25em] text-xs text-white/90">
            Check Print Availability
          </p>
        </div>
      </a>

      <a
        href="/prints/a-lone-shadow"
        className="relative overflow-hidden rounded-[2rem] group block"
      >
        <img
          src="/images/forest.jpg"
          alt="A Lone Shadow — black wolf"
          className="h-[160px] md:h-[367px] w-full object-cover group-hover:scale-[1.03] transition duration-[1600ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
            A Lone Shadow
          </h3>
          <p className="uppercase tracking-[0.25em] text-xs text-white/90">
            Check Print Availability
          </p>
        </div>
      </a>
    </div>
  </div>
</section>

);
}