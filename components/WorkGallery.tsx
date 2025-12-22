"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const items = [
  {
    id: "yt1",
    src: "https://www.youtube.com/embed/m9eO-5gCBtU",
    title:
      "Kanał Lexy — testowy montaż w ramach aplikacji na montażystę do zespołu Lexy. Materiał niewykorzystany oficjalnie",
  },
  {
    id: "yt2",
    src: "https://www.youtube.com/embed/zwzbvePCobk",
    title: "GRAMY W SIMSY! (nikt nie prosił, każdy potrzebował)",
  },
  {
    id: "yt3",
    src: "https://www.youtube.com/embed/sq7fKy3iz5w",
    title: "Short-form reel — testowy montaż aplikacyjny",
  },
  {
    id: "yt4",
    src: "https://www.youtube.com/embed/AGOluDK7QF0",
    title: "ROBIMY ANDZIAKS W SIMSACH! 💚🎮 IKONY VLOGMASU 2",
  },
];

export default function WorkGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -360 : 360;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* STRZAŁKI */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 items-center justify-center rounded-full
          bg-[#1a1a1b]/90 border border-[#4a4e51]
          text-[#e0e0e0] hover:text-white
          hover:border-[#aa835c]
          hover:shadow-[0_0_20px_rgba(170,131,92,0.4)]
          transition"
        aria-label="Poprzednie"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 items-center justify-center rounded-full
          bg-[#1a1a1b]/90 border border-[#4a4e51]
          text-[#e0e0e0] hover:text-white
          hover:border-[#aa835c]
          hover:shadow-[0_0_20px_rgba(170,131,92,0.4)]
          transition"
        aria-label="Następne"
      >
        <FaChevronRight />
      </button>

      {/* KARUZELA */}
      <div
        ref={scrollRef}
        className="
          flex gap-6 overflow-x-auto
          scroll-smooth
          scrollbar-hide
          px-2
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {items.map((it) => (
          <div
            key={it.id}
            className="
              min-w-[320px] max-w-[320px]
              group relative rounded-xl overflow-hidden
              bg-[#222224]
              border border-[#4a4e51]
              transition-all duration-300
              hover:border-[#aa835c]
              hover:shadow-[0_0_40px_rgba(170,131,92,0.25)]
            "
          >
            {/* GOLD GLOW */}
            <div
              className="
                pointer-events-none
                absolute -inset-1
                bg-gradient-to-r from-[#aa835c] via-[#d4af37] to-[#aa835c]
                opacity-0 group-hover:opacity-15
                blur
                transition duration-500
              "
            />

            {/* VIDEO */}
            <div className="relative aspect-video z-10 bg-black">
              <iframe
                src={it.src}
                title={it.title}
                className="
                  w-full h-full
                  grayscale-[0.4]
                  group-hover:grayscale-0
                  transition duration-500
                "
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* TITLE */}
            <div
              className="
                z-10 flex items-center px-4
                min-h-[72px]
                bg-[#1a1a1b]/95
                backdrop-blur
                border-t border-[#4a4e51]
              "
            >
              <p
                className="
                  text-sm font-semibold
                  text-[#e0e0e0]
                  group-hover:text-[#f4f4f4]
                  transition
                  line-clamp-2
                "
              >
                {it.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
