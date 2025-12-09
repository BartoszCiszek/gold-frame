// /components/PartnersCarousel.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import CountUp from "./CountUp"; // Importujemy Twój komponent licznika

// Dane na podstawie Twojego zdjęcia
const partners = [
  { 
    name: "FRIZ", 
    img: "/bartek.webp", // Zmień na zdjęcie Friza (wgraj do /public)
    yt: 5000000, 
    ig: 4000000 
  },
  { 
    name: "WERSOW", 
    img: "/nicole.webp", // Zmień na zdjęcie Wersow
    yt: 2670000, 
    ig: 3600000 
  },
  { 
    name: "PATEC", 
    img: "/bartek.webp", // Zmień na zdjęcie Pateca
    yt: 1580000, 
    ig: 2200000 
  },
];

export default function PartnersCarousel() {
  return (
    <div className="w-full py-10">
      {/* Grid: 1 kolumna na mobilkach, 3 na desktopie - idealnie jak na zdjęciu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {partners.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="flex flex-col bg-[#111] rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-2xl border border-white/5"
          >
            {/* 1. Zdjęcie */}
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image 
                src={p.img} 
                alt={p.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Cień wewnętrzny na dole zdjęcia dla lepszego przejścia */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* 2. Pasek z imieniem (Fioletowy) */}
            <div className="bg-[#8b00ff] py-3 text-center relative z-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-wider font-display">
                {p.name}
              </h3>
            </div>

            {/* 3. Statystyki */}
            <div className="bg-[#1a1a1a] p-5 flex flex-col gap-3 items-center justify-center border-t border-white/10">
              
              {/* YouTube */}
              <div className="flex items-center gap-3 w-full justify-center">
                <div className="p-1.5 bg-white/10 rounded-lg">
                  <FaYoutube className="text-2xl text-white" />
                </div>
                <div className="text-lg font-bold text-white font-mono tracking-tight">
                  <CountUp 
                    to={p.yt} 
                    duration={2.5} 
                    separator="," 
                    className="tabular-nums" 
                  />
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3 w-full justify-center">
                <div className="p-1.5 bg-white/10 rounded-lg">
                  <FaInstagram className="text-2xl text-white" />
                </div>
                <div className="text-lg font-bold text-white font-mono tracking-tight">
                  <CountUp 
                    to={p.ig} 
                    duration={2.5} 
                    separator="," 
                    className="tabular-nums" 
                  />
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}