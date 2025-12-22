// /components/ServicesSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiScissors,
  FiFilm,
  FiMonitor,
  FiVolume2,
  FiActivity,
  FiLayers,
} from "react-icons/fi";
import { IconBaseProps } from "react-icons";

type Service = {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactElement<IconBaseProps>;
};

const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Montaż Dynamiczny (YouTube / Vlog)",
    desc: "Krótka forma cięta pod algorytm. Flow, rytm i storytelling, który trzyma widza do samego końca. Memy, pacing, captions i efekty — wszystko po coś. Zero pustych przebitek. Retention robi robotę.",
    icon: <FiScissors />,
  },
  {
    id: "s2",
    title: "Reklamy & Social Media (Reels / Shorts)",
    desc: "Formaty 9:16 robione pod wynik, nie pod sztukę. Mocny pierwszy sekundowy hook, wyraźny CTA, rytm dopasowany do algorytmów TikToka/Instagrama. Treści, które zatrzymują i konwertują.",
    icon: <FiFilm />,
  },
  {
    id: "s3",
    title: "Color Grading & Korekcja",
    desc: "Filmowy look dopasowany do historii. Od czyszczenia balansu i ekspozycji po budowanie nastroju za pomocą LUT-ów i ręcznej kolorki. Każda scena wygląda jak część większej opowieści.",
    icon: <FiMonitor />,
  },
  {
    id: "s4",
    title: "Sound Design & Mix Audio",
    desc: "Muzyka, SFX i dialogi doprowadzone do czystości. Buduję emocje dźwiękiem — od subtelnych detali po pełny, kinowy charakter. Dźwięk to 50% efektu końcowego, więc nie idę na skróty.",
    icon: <FiVolume2 />,
  },
  {
    id: "s5",
    title: "Motion & Animacja",
    desc: "Intro/outro, 3D, kinetic typography, paski dolne — wszystko dopasowane do charakteru marki. Animacje, które wyglądają jak naturalna część historii, a nie wrzucony efekt.",
    icon: <FiLayers />,
  },
  {
    id: "s6",
    title: "Konsultacje & Strategia Wideo",
    desc: "Pomagam poukładać content tak, żeby zaczął robić wyniki. Analiza Twoich materiałów, wskazanie błędów, plan na poprawę jakości i spójność wizualną. Konkrety, nie lanie wody.",
    icon: <FiActivity />,
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="
        group
        relative
        rounded-2xl
        bg-[#222224]
        border border-[#4a4e51]
        p-10
        text-center
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        transition-all
        duration-300
        hover:border-[#aa835c]
        hover:shadow-[0_30px_90px_rgba(0,0,0,0.75),0_0_28px_rgba(170,131,92,0.18)]
      "
    >
      {/* ICON — CENTERED + GOLD GLOW */}
      <div className="flex justify-center mb-6">
        <div
          className="
            w-16 h-16
            rounded-xl
            flex items-center justify-center
            bg-[#1a1a1b]
            border border-[#4a4e51]
            text-[#aa835c]
            transition-all
            duration-300
            group-hover:border-[#aa835c]
            group-hover:shadow-[0_0_22px_rgba(170,131,92,0.45)]
            group-hover:scale-110
          "
        >
          {React.cloneElement(service.icon, { size: 28 })}
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold text-[#f4f4f4] mb-3">
        {service.title}
      </h3>

      {/* DESC */}
      <p className="text-[#e0e0e0]/80 leading-relaxed text-sm">
        {service.desc}
      </p>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#1a1a1b]">
      <div className="container-max">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f4f4f4] mb-4 tracking-tight">
            CZYM SIĘ <span className="text-[#aa835c] drop-shadow-[0_0_12px_rgba(170,131,92,0.35)]">ZAJMUJĘ?</span>
          </h2>

          <p className="text-[#e0e0e0]/80 max-w-2xl mx-auto">
            Kompleksowa postprodukcja wideo zaprojektowana pod jakość,
            spójność i realny efekt.
          </p>

          <div className="mt-8 mx-auto h-[2px] w-20 bg-[#aa835c] shadow-[0_0_16px_rgba(170,131,92,0.45)]" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
