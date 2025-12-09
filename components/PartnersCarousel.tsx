// /components/PartnersCarousel.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useRef } from "react";

const partners = [
  { name: "Influencer A", img: "/nicole.webp", yt: "120k", ig: "45k", tt: "300k" },
  { name: "Influencer B", img: "/nicole.webp", yt: "80k", ig: "30k", tt: "200k" },
  { name: "Influencer C", img: "/nicole.webp", yt: "60k", ig: "10k", tt: "90k" },
  { name: "Influencer D", img: "/nicole.webp", yt: "200k", ig: "120k", tt: "900k" },
];

export default function PartnersCarousel() {
  const ref = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: number) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: ref.current.clientWidth * dir, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="kicker">Partnerzy</div>
        <div>
          <button onClick={() => scroll(-1)} className="px-3 py-1 mr-2 border rounded">◀</button>
          <button onClick={() => scroll(1)} className="px-3 py-1 border rounded">▶</button>
        </div>
      </div>

      <div ref={ref} className="flex gap-6 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
        {partners.map((p) => (
          <div key={p.name} className="min-w-[300px] project-box" style={{ scrollSnapAlign: "start" }}>
            <div className="w-full h-40 relative mb-3 overflow-hidden rounded">
              <Image src={p.img} alt={p.name} fill sizes="300px" className="object-cover" />
            </div>
            <h4 className="kicker">{p.name}</h4>
            <div className="mt-2 text-sm opacity-80">
              <div>YT: <strong>{p.yt}</strong> • IG: <strong>{p.ig}</strong> • TT: <strong>{p.tt}</strong></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
