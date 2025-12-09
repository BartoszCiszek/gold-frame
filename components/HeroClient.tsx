// /components/HeroClient.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroClient: React.FC = () => {
  return (
    <div>
      <motion.h1
        className="hero-title neon h1"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.5 }}
      >
        Montaż. <br /> Kolor. Ruch.
      </motion.h1>

      <motion.p
        className="mt-4 lead max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.45 }}
      >
        Tworzę dynamiczne vlogi, reklamy i content video — szybki i efektowny montaż z neonowym klimatem.
      </motion.p>

      <div className="mt-6 flex gap-3">
        <a href="#work" className="btn-primary">Zobacz projekty</a>
        <a href="#contact" className="px-4 py-2 rounded-full border border-neutral-700 hover:border-white transition">Kontakt</a>
      </div>
    </div>
  );
};

export default HeroClient;
