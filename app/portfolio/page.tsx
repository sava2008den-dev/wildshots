"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { photos } from "../data/photos";

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main
      className="bg-black text-white min-h-screen relative"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Navbar />

      {/* HERO */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url('/images/hero.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-5">
            WildShots Portfolio
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] max-w-5xl">
            Stories From The Wild
          </h1>
        </div>
      </section>

      {/* FADE OVERLAY */}
      <div className="absolute top-[60vh] left-0 right-0 h-96 bg-gradient-to-b from-transparent to-black pointer-events-none z-0"></div>

      {/* GALLERY */}
      <section
        id="gallery"
        className="relative z-10 py-8 md:py-16 px-6 md:px-8"
      >
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          {photos.map((photo) => (
            <div key={photo.slug}>
              <Image
                src={photo.preview}
                alt={photo.title}
                draggable="false"
                loading="lazy"
                onClick={() => setSelectedImage(photo.image)}
                className="w-full h-[260px] md:h-[520px] object-cover cursor-pointer select-none"
                width={2200}
                height={1400}
              />

              <div className="mt-5 flex items-center justify-between">
                <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-600">
                  {photo.title}
                </p>

                <a
                  href="/store"
                  className="uppercase tracking-[0.35em] text-[10px] text-neutral-500 hover:text-white transition"
                >
                  Available As Print
                </a>
              </div>
            </div>
          ))}
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
            CLOSE
          </button>

          <Image
            src={selectedImage}
            alt="WildShots image"
            draggable="false"
            className="max-w-full max-h-full object-contain select-none"
            width={2600}
            height={1800}
          />
        </div>
      )}

      <Footer />
    </main>
  );
}