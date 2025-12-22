// /components/DynamicTitle.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DynamicTitle() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        text-5xl
        md:text-7xl
        font-black
        tracking-tight
        uppercase
        text-[var(--text-light)]
        font-[var(--font-display)]
        relative
        inline-block
      "
    >
      {/* GOLD */}
      <span className="relative inline-block">
        <span className="relative z-10">Gold</span>

        {/* subtelny złoty highlight */}
        <span
          aria-hidden
          className="
            absolute
            inset-x-0
            bottom-0
            h-[0.35em]
            bg-[var(--gold)]
            opacity-20
            z-0
          "
        />
      </span>

      {/* FRAME */}
      <span className="ml-3 text-[#aa835c]">
        Frame
      </span>
    </motion.h2>
  );
}
