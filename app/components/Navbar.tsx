"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
          {/* LOGO */}
          <a href="/">
            <h1 className="text-xl font-black tracking-[0.35em] uppercase text-white">
              WildShots
            </h1>

            <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 mt-1">
              by Sava Ioan
            </p>
          </a>

          {/* DESKTOP */}
          <nav className="hidden md:flex items-center text-xs uppercase tracking-[0.3em] text-neutral-300">
            <a
              href="/portfolio"
              className="px-5 py-3 hover:text-white transition"
            >
              Portfolio
            </a>

            <a
              href="/tours"
              className="px-5 py-3 hover:text-white transition"
            >
              Tours
            </a>

            <a
              href="/mentoring"
              className="px-5 py-3 hover:text-white transition"
            >
              Mentoring
            </a>

            <a
              href="/store"
              className="px-5 py-3 hover:text-white transition"
            >
              Prints
            </a>

            <a
              href="/about"
              className="px-5 py-3 hover:text-white transition"
            >
              About
            </a>

            <a
              href="/contact"
              className="px-5 py-3 hover:text-white transition"
            >
              Contact
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white uppercase tracking-[0.3em] text-xs"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open ? (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-10 text-2xl uppercase tracking-[0.3em] text-white">
          <a
            href="/portfolio"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </a>

          <a
            href="/tours"
            onClick={() => setOpen(false)}
          >
            Tours
          </a>

          <a
            href="/mentoring"
            onClick={() => setOpen(false)}
          >
            Mentoring
          </a>

          <a
            href="/store"
            onClick={() => setOpen(false)}
          >
            Prints
          </a>

          <a
            href="/about"
            onClick={() => setOpen(false)}
          >
            About
          </a>

          <a
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>

          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 right-8 text-sm"
          >
            CLOSE
          </button>
        </div>
      ) : null}
    </>
  );
}