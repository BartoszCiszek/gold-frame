// /components/WorkGallery.tsx
"use client";

import React from "react";

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
];

export default function WorkGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((it) => (
        <div
          key={it.id}
          className="group relative rounded-xl overflow-hidden border border-white/5 bg-neutral-900"
        >
          {/* Neon glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 blur transition duration-500" />

          {/* VIDEO */}
          <div className="relative aspect-video z-10">
            <iframe
              src={it.src}
              title={it.title}
              className="w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition duration-500"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* TITLE BAR — STAŁA WYSOKOŚĆ */}
          <div className="z-10 flex items-center px-4 bg-black/80 backdrop-blur border-t border-white/5 min-h-[72px]">
            <p className="text-sm font-semibold text-gray-300 group-hover:text-cyan-300 transition line-clamp-2">
              {it.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
