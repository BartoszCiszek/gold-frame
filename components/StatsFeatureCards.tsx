// /components/StatsFeatureCards.tsx
"use client";

import React from "react";
import CountUp from "./CountUp";
import { FiCheckCircle, FiThumbsUp, FiPlay } from "react-icons/fi";

type Card = {
  icon: React.ReactNode;
  title: string;
  desc?: string;
  value: number;
  suffix?: string;
  duration?: number;
};

const CARDS: Card[] = [
  {
    icon: <FiCheckCircle />,
    title: "Zrealizowane projekty",
    desc: "Projekty od briefu po finalny export.",
    value: 150,
    suffix: "+",
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
    title: "Wyświetlenia projektów",
    desc: "Łączne wyświetlenia Twoich materiałów.",
    value: 1000000,
    suffix: "+",
    duration: 2.6,
  },
];

export default function StatsFeatureCards() {
  return (
    <section className="stats-features" aria-labelledby="stats-heading">
      <div className="heading">
        <h3 id="stats-heading" className="text-2xl neon">Na rynku działam</h3>
        <div className="sub">od 2 lat</div>
      </div>

      <div className="cards" role="list">
        {CARDS.map((c) => (
          <article key={c.title} className="feature-card" role="listitem" aria-label={c.title}>
            {/* ICON TOP */}
            <div className="icon-top" aria-hidden>
              {React.cloneElement(c.icon as React.ReactElement, { size: 28 })}
            </div>

            {/* TITLE + DESC */}
            <div className="meta">
              <h4 className="title">{c.title}</h4>
              {c.desc && <p className="desc">{c.desc}</p>}
            </div>

            {/* COUNT */}
            <div className="count" aria-hidden>
              <CountUp to={c.value} duration={c.duration} separator=" " className="inline-block" />
              <span className="suffix" aria-hidden>{c.suffix}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
