// /components/PartnersCarousel.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import CountUp from "./CountUp";

const partners = [
  {
    name: "Nicole Węcławiak",
    img: "/nicole.webp",
    yt: 959216,
    ig: 416672,
  },
];

export default function PartnersCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isSingle = partners.length === 1;

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -340 : 340;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-16 relative">
      {/* STRZAŁKI – tylko jeśli jest więcej niż 1 osoba */}
      {!isSingle && (
        <>
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-purple-600 text-white p-3 rounded-full backdrop-blur transition shadow-xl border border-white/10"
            aria-label="Przewiń w lewo"
          >
            <FaChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-purple-600 text-white p-3 rounded-full backdrop-blur transition shadow-xl border border-white/10"
            aria-label="Przewiń w prawo"
          >
            <FaChevronRight size={22} />
          </button>
        </>
      )}

      {/* KONTAINER */}
      <div
        ref={scrollContainerRef}
        className={
          isSingle
            ? "flex justify-center px-4"
            : "flex overflow-x-auto gap-6 md:gap-8 pb-8 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide"
        }
        style={
          isSingle
            ? undefined
            : { scrollbarWidth: "none", msOverflowStyle: "none" }
        }
      >
        {partners.map((p, idx) => (
          <motion.div
            key={`${p.name}-${idx}`}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-[280px] md:w-[320px] flex flex-col bg-[#101010] rounded-xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* ZDJĘCIE */}
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* IMIĘ */}
            <div className="bg-[#8b00ff] py-3 text-center">
              <h3 className="text-xl font-black text-white uppercase tracking-wide">
                {p.name}
              </h3>
            </div>

            {/* STATYSTYKI */}
            <div className="bg-[#151515] p-5 flex flex-col gap-3 items-center border-t border-white/10">
              <div className="flex items-center gap-3">
                <FaYoutube className="text-xl text-red-500" />
                <span className="text-lg font-bold text-white font-mono">
                  <CountUp to={p.yt} duration={2.5} separator="," />
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaInstagram className="text-xl text-pink-500" />
                <span className="text-lg font-bold text-white font-mono">
                  <CountUp to={p.ig} duration={2.5} separator="," />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
