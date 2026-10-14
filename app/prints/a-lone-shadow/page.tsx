"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrintPage() {
const [imageOpen, setImageOpen] = useState(false);

return (
<main className="bg-black text-white min-h-screen">
<Navbar />

  <section className="pt-36 pb-20 px-6 md:px-8">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
      <div>
        <img
          src="/images/forest.jpg"
          alt="A Lone Shadow — black wolf in an open landscape"
          onClick={() => setImageOpen(true)}
          className="w-full h-[500px] md:h-[900px] object-cover cursor-zoom-in"
        />
      </div>

      <div className="md:sticky md:top-32">
        <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-600 mb-5">
          Fine Art Print
        </p>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
          A Lone Shadow
        </h1>

        <p className="text-neutral-400 leading-relaxed text-lg mb-10">
          A solitary wolf moving through an open landscape, captured in a moment of quiet presence and wild freedom.
        </p>

        <div className="border-y border-white/10 py-8 space-y-5 mb-10">
          <div className="flex justify-between">
            <p className="text-neutral-500">Small Print</p>
            <p>€95</p>
          </div>
          <div className="flex justify-between">
            <p className="text-neutral-500">Medium Print</p>
            <p>€150</p>
          </div>
          <div className="flex justify-between">
            <p className="text-neutral-500">Large Print</p>
            <p>€220</p>
          </div>
        </div>

        <div className="space-y-5 text-neutral-500 text-sm leading-relaxed mb-12">
          <p>Museum-quality fine art print on premium matte paper.</p>
          <p>Printed in limited quantities with worldwide shipping available.</p>
        </div>

        <a
          href="https://wa.me/40740275555?text=Hi%21%20I%27m%20interested%20in%20the%20A%20Lone%20Shadow%20print."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white/20 px-10 py-5 uppercase tracking-[0.3em] text-sm font-bold hover:bg-white hover:text-black transition"
        >
          Order Print
        </a>
      </div>
    </div>
  </section>

  {imageOpen && (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={() => setImageOpen(false)}
    >
      <button
        type="button"
        onClick={() => setImageOpen(false)}
        className="absolute top-5 right-6 text-white text-4xl leading-none"
        aria-label="Close image"
      >
        &times;
      </button>

      <img
        src="/images/forest.jpg"
        alt="A Lone Shadow — full-size photograph"
        className="absolute inset-0 w-full h-full object-contain cursor-zoom-out"
        onClick={() => setImageOpen(false)}
      />
    </div>
  )}

  <Footer />
</main>

);
}