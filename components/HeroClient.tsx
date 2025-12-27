"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const HeroClient: React.FC = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative"
    >
      {/* GLOW */}
      <div className="absolute -inset-2 rounded-3xl bg-[#aa835c]/10 blur-2xl -z-10" />

      {/* GLASS PANEL */}
      <div className="
        relative
        rounded-2xl
        p-8 md:p-10
        bg-black/55
        backdrop-blur-xl
        border border-white/10
        shadow-[0_30px_80px_rgba(0,0,0,0.8)]
        overflow-hidden
      ">

        {/* noise */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            backgroundImage: "url('/noise.png')",
            opacity: 0.06,
            mixBlendMode: "overlay",
          }}
        />

        <motion.h1
          className="hero-title neon h1 leading-tight"
          variants={item}
        >
          Montaż. <br />
          <span className="text-white">Kolor.</span> <br />
          <span className="neon-accent">Ruch.</span>
        </motion.h1>

        <motion.p
          className="mt-6 lead max-w-lg text-lg text-gray-300"
          variants={item}
        >
          Tworzę dynamiczne vlogi, reklamy i content video.
          <br />
          Sprawiam, że widzowie{" "}
          <span className="text-white font-semibold">nie przewijają</span>.
        </motion.p>

        <motion.div className="mt-8 flex gap-4" variants={item}>
          <motion.a
            href="#work"
            className="btn-primary relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Zobacz realizacje</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-2 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-white transition-colors duration-300 backdrop-blur-sm bg-black/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontakt
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroClient;
