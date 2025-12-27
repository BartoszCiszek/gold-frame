// /components/PartnersCarousel.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import CountUp from "./CountUp";

const partners = [
  {
    name: "Nicole Węcławiak",
    img: "/nicole.webp",
    yt: 973216,
    ig: 417672,
    tiktok: 1523479,
  },
];

export default function PartnersCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isSingle = partners.length === 1;

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-20 relative">
      {/* STRZAŁKI – tylko gdy >1 partner */}
      {!isSingle && (
        <>
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 items-center justify-center rounded-full
              bg-[#1a1a1b] border border-[#4a4e51]
              text-[#aa835c]
              hover:border-[#aa835c]
              hover:shadow-[0_0_22px_rgba(170,131,92,0.45)]
              transition"
            aria-label="Poprzedni"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 items-center justify-center rounded-full
              bg-[#1a1a1b] border border-[#4a4e51]
              text-[#aa835c]
              hover:border-[#aa835c]
              hover:shadow-[0_0_22px_rgba(170,131,92,0.45)]
              transition"
            aria-label="Następny"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* CONTAINER */}
      <div
        ref={scrollContainerRef}
        className={
          isSingle
            ? "flex justify-center px-4"
            : "flex overflow-x-auto gap-8 px-4 md:px-16 snap-x snap-mandatory scrollbar-hide"
        }
        style={isSingle ? undefined : { scrollbarWidth: "none" }}
      >
        {partners.map((p, idx) => (
          <motion.article
            key={`${p.name}-${idx}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              snap-center
              w-[300px] md:w-[340px]
              bg-[#222224]
              border border-[#4a4e51]
              rounded-2xl
              overflow-hidden
              shadow-[0_25px_80px_rgba(0,0,0,0.7)]
              hover:border-[#aa835c]
              hover:shadow-[0_30px_90px_rgba(0,0,0,0.75),0_0_32px_rgba(170,131,92,0.18)]
              transition-all
              duration-300
            "
          >
            {/* IMAGE */}
            <div className="relative aspect-[4/5]">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* NAME */}
            <div className="text-center py-4">
              <h3 className="text-xl font-semibold text-[#f4f4f4] tracking-tight">
                {p.name}
              </h3>
              <div className="mx-auto mt-2 h-[2px] w-12 bg-[#aa835c] shadow-[0_0_12px_rgba(170,131,92,0.45)]" />
            </div>

            {/* STATS */}
            <div className="px-6 pb-6 flex flex-col gap-3">
              <div className="flex items-center justify-center gap-3 text-[#e0e0e0]">
                <FaYoutube className="text-[#aa835c]" />
                <span className="font-mono font-semibold">
                  <CountUp to={p.yt} duration={2.5} separator="," />
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 text-[#e0e0e0]">
                <FaInstagram className="text-[#aa835c]" />
                <span className="font-mono font-semibold">
                  <CountUp to={p.ig} duration={2.5} separator="," />
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 text-[#e0e0e0]">
                <FaTiktok className="text-[#aa835c]" />
                <span className="font-mono font-semibold">
                  <CountUp to={p.tiktok} duration={2.5} separator="," />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
