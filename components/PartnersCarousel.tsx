"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import CountUp from "./CountUp";

const partners = [
  {
    name: "Nicole Węcławiak",
    img: "/nicole.webp",
    yt: 993763,
    ytUrl: "https://www.youtube.com/@NicoleWeclawiak",
    ig: 418493,
    igUrl: "https://www.instagram.com/nicole.weclawiak", 
    tiktok: 1573267,
    tiktokUrl: "https://www.tiktok.com/@nicole_wec",
  },
  {
    name: "cZerni",
    img: "/czerni.webp",
    yt: 21842,
    ytUrl: "https://www.youtube.com/@kacper_czerniec",
    ig: 51217,
    igUrl: "https://www.instagram.com/czerni28",
    tiktok: 22936,
    tiktokUrl: "https://www.tiktok.com/@tonieczerni",
  },
];

export default function PartnersCarousel() {
  return (
    <section className="w-full py-20 relative">
      {/* CONTAINER */}
      <div className="flex flex-wrap justify-center gap-8 px-4 w-full max-w-7xl mx-auto">
        {partners.map((p, idx) => (
          <motion.article
            key={`${p.name}-${idx}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="
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

            {/* STATS - TERAZ KLIKALNE */}
            <div className="px-6 pb-6 flex flex-col gap-3">
              
              {/* YouTube */}
              <a 
                href={p.ytUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-[#e0e0e0] group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors"
              >
                <FaYoutube className="text-[#aa835c] group-hover:scale-110 transition-transform" />
                <span className="font-mono font-semibold group-hover:text-white transition-colors">
                  <CountUp to={p.yt} duration={2.5} separator="," />
                </span>
              </a>

              {/* Instagram */}
              <a 
                href={p.igUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-[#e0e0e0] group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors"
              >
                <FaInstagram className="text-[#aa835c] group-hover:scale-110 transition-transform" />
                <span className="font-mono font-semibold group-hover:text-white transition-colors">
                  <CountUp to={p.ig} duration={2.5} separator="," />
                </span>
              </a>

              {/* TikTok */}
              <a 
                href={p.tiktokUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-[#e0e0e0] group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors"
              >
                <FaTiktok className="text-[#aa835c] group-hover:scale-110 transition-transform" />
                <span className="font-mono font-semibold group-hover:text-white transition-colors">
                  <CountUp to={p.tiktok} duration={2.5} separator="," />
                </span>
              </a>

            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}