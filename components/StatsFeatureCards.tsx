"use client";

import React from "react";
import CountUp from "./CountUp";
import { FiCheckCircle, FiThumbsUp, FiPlay } from "react-icons/fi";
import { IconBaseProps } from "react-icons";
import { motion } from "framer-motion";

type Card = {
  icon: React.ReactElement<IconBaseProps>;
  title: string;
  desc?: string;
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

const CARDS: Card[] = [
  {
    icon: <FiCheckCircle />,
    title: "Zrealizowane projekty",
    desc: "Projekty od briefu po finalny export.",
    value: 89,
    prefix: "+",
    duration: 2,
  },
  {
    icon: <FiThumbsUp />,
    title: "Zadowolenie klientów",
    desc: "Satysfakcja klienta przy każdym zleceniu.",
    value: 100,
    suffix: "%",
    duration: 2,
  },
  {
    icon: <FiPlay />,
    title: "Wyświetlenia",
    desc: "Łączne wyświetlenia materiałów.",
    value: 671584,
    prefix: "+",
    duration: 2.5,
  },
];

export default function StatsFeatureCards() {
  return (
    <section className="w-full py-16 bg-[#1a1a1b]">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h3 className="text-3xl md:text-4xl font-bold text-[#f4f4f4] mb-2">
          Na rynku działam <span className="gold-glow">od 2 lat</span>
        </h3>
        <p className="text-[#e0e0e0]/70">
          Liczby mówią same za siebie
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {CARDS.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.45 }}
            className="
              flex flex-col items-center text-center
              bg-[#222224]
              border border-[#4a4e51]
              p-8 rounded-2xl
              shadow-lg
              transition-all duration-300
              hover:border-[#aa835c]
              hover:shadow-[0_0_40px_rgba(170,131,92,0.25)]
              group
            "
          >
            {/* ICON */}
            <div
              className="
                mb-6
                w-14 h-14
                rounded-xl
                flex items-center justify-center
                bg-[#1a1a1b]
                border border-[#4a4e51]
                text-[#aa835c]
                group-hover:shadow-[0_0_20px_rgba(170,131,92,0.45)]
                transition-all duration-300
              "
            >
              {React.cloneElement(c.icon, { size: 28 })}
            </div>

            {/* TITLE + DESC */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-[#f4f4f4] mb-2">
                {c.title}
              </h4>
              {c.desc && (
                <p className="text-sm text-[#e0e0e0]/70 leading-relaxed">
                  {c.desc}
                </p>
              )}
            </div>

            {/* COUNTER */}
            <div className="mt-auto pt-4 border-t border-[#4a4e51]/50 w-full">
              <div className="flex justify-center items-end gap-1 text-[#aa835c] font-black">
                {c.prefix && (
                  <span className="text-3xl md:text-4xl gold-glow">
                    {c.prefix}
                  </span>
                )}

                <CountUp
                  to={c.value}
                  duration={c.duration}
                  separator=" "
                  className="text-4xl md:text-5xl gold-glow tabular-nums"
                />

                {c.suffix && (
                  <span className="text-3xl md:text-4xl gold-glow">
                    {c.suffix}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
