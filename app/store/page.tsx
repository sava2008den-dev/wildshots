"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function StorePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url('/images/mountains.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="uppercase tracking-[0.4em] text-xs text-neutral-500 mb-5">
            WildShots Prints
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] max-w-5xl">
            Fine Art Collection
          </h1>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-12 md:py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">

          {/* PRODUCT 1 */}
          <div className="group">
            <a
              href="/prints/carpathian-encounters"
              className="block overflow-hidden rounded-[2rem]"
            >
              <img
                src="/images/bear.jpg"
                className="h-[500px] w-full object-cover group-hover:scale-[1.02] transition duration-[1600ms]"
              />
            </a>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-600 mb-2">
                  Fine Art Print
                </p>

                <h2 className="text-lg font-semibold">
                  Into The Mist
                </h2>
              </div>

              <p className="text-neutral-400 text-sm">
                €120
              </p>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="group">
            <div
              className="overflow-hidden rounded-[2rem] cursor-pointer"
              onClick={() => setSelectedImage("/images/mountains.jpg")}
            >
              <img
                src="/images/mountains.jpg"
                className="h-[500px] w-full object-cover group-hover:scale-[1.02] transition duration-[1600ms]"
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-600 mb-2">
                  Landscape Collection
                </p>

                <h2 className="text-lg font-semibold">
                  Northern Peaks
                </h2>
              </div>

              <p className="text-neutral-400 text-sm">
                €95
              </p>
            </div>
          </div>

          {/* PRODUCT 3 */}
          <div className="group">
            <div
              className="overflow-hidden rounded-[2rem] cursor-pointer"
              onClick={() => setSelectedImage("/images/forest.jpg")}
            >
              <img
                src="/images/forest.jpg"
                className="h-[500px] w-full object-cover group-hover:scale-[1.02] transition duration-[1600ms]"
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-600 mb-2">
                  Wilderness Series
                </p>

                <h2 className="text-lg font-semibold">
                  Silent Forest
                </h2>
              </div>

              <p className="text-neutral-400 text-sm">
                €140
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-sm uppercase tracking-[0.3em]"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>

          <img
            src={selectedImage}
            className="max-w-full max-h-full rounded-[2rem] object-contain"
          />
        </div>
      )}

      <Footer />
    </main>
  );
}