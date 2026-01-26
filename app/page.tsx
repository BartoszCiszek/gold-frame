// /app/page.tsx
import React from "react";
import Image from "next/image";
import HeroClient from "../components/HeroClient";
import PartnersCarousel from "../components/PartnersCarousel";
import StatsFeatureCards from "../components/StatsFeatureCards";
import WorkGallery from "../components/WorkGallery";
import WhySection from "../components/WhySection";
import ServicesSection from "../components/ServicesSection";
import DynamicTitle from "../components/DynamicTitle";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "GoldFrame — Bartosz Ciszek",
  description: "GoldFrame — cinematic post-production, color grading, storytelling",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#1a1a1b] text-[#e0e0e0] overflow-x-hidden">

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      >

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* SAFETY DARK LAYER */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* CONTENT */}
        <div className="container-max relative z-10 w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LOGO */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/Logo.webp"
                alt="GoldFrame Logo"
                width={380}
                height={380}
                priority
                className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[380px] drop-shadow-[0_0_20px_rgba(170,131,92,0.45)]"
              />
            </div>
              <HeroClient />
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <div className="w-full bg-[#151516] py-16 flex justify-center items-center border-b border-[#aa835c]/10">
        <div className="text-center">
          <p className="text-sm text-[#aa835c] font-bold tracking-[0.3em] uppercase mb-3">
            Cinematic Post-Production
          </p>
          <DynamicTitle />
        </div>
      </div>

    {/* ABOUT */}
    <section id="about" className="py-24 bg-[#1a1a1b] overflow-hidden">
      <div className="container-max grid md:grid-cols-2 gap-14 items-center px-6">

        {/* PHOTO */}
        <div className="relative order-2 md:order-1 flex justify-center">

          {/* CINEMATIC HALO */}
          <div className="
            absolute
            inset-0
            rounded-[2rem]
            bg-[radial-gradient(circle_at_center,rgba(170,131,92,0.45)_0%,rgba(170,131,92,0.28)_25%,rgba(170,131,92,0.12)_45%,rgba(0,0,0,0)_70%)]
            blur-[55px]
            scale-[1.05]
            sm:blur-[70px]
            sm:scale-[1.15]
            md:blur-[100px]
            md:scale-[1.25]
            pointer-events-none
          " />

          {/* IMAGE */}
          <Image
            src="/bartek.webp"
            alt="Bartek"
            width={1000}
            height={1200}
            className="
              relative z-10
              rounded-3xl
              object-cover
              grayscale hover:grayscale-0 transition
              w-[220px]
              sm:w-[300px]
              md:w-[380px]
              lg:w-[420px]
              shadow-[0_40px_140px_rgba(0,0,0,0.6)]
            "
          />
        </div>

        {/* TEXT */}
        <div className="order-1 md:order-2 text-center md:text-left max-w-xl mx-auto md:mx-0">
          <h2 className="
            font-black tracking-tight
            text-3xl sm:text-4xl md:text-6xl
            leading-[1.05] sm:leading-[1] md:leading-[0.9]
            mb-6
          ">
            CZEŚĆ! <br />
            JESTEM{" "}
            <span className="bg-gradient-to-r from-[#aa835c] to-[#f0d5b5] text-transparent bg-clip-text">
              BARTEK
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mb-5 leading-relaxed">
            Tworzę kinową jakość w formacie digital. Zajmuję się postprodukcją, color gradingiem i narracją wizualną dla marek premium.
          </p>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Projektuję emocje, które zatrzymują widza.
          </p>
        </div>

      </div>
    </section>

      {/* 2) Czym się zajmuję */}
      <ServicesSection />

      {/* 3) Partners */}
      <section id="partners" className="section py-20 bg-[#1a1a1b]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold uppercase mb-2 font-sans tracking-tighter text-white">
              WSPÓŁPRACE Z INFLUENCERAMI
            </h3>
            {/* Złota linia */}
            <div className="h-1 w-20 bg-[#aa835c] mx-auto rounded-full" />
          </div>
          <PartnersCarousel />
        </div>
      </section>

      {/* 4) Stats */}
      <section id="stats" className="section py-20 bg-[#1a1a1b]">
        <StatsFeatureCards />
      </section>

      {/* 5) Work gallery */}
      <section id="work" className="section py-20 bg-[#151516]">
        <div className="container-max">
          <div className="w-full flex flex-col items-center text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 font-sans tracking-tighter uppercase text-white">
              Wybrane Realizacje
            </h3>
            <p className="text-[#9ca3af]">Zobacz jakość GoldFrame.</p>
          </div>
          <WorkGallery />
        </div>
      </section>

      {/* 6) Method */}
      <section id="method" className="section py-20 bg-[#1a1a1b]">
        <div className="container-max text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sans tracking-tighter uppercase text-white">
            Filozofia Pracy
          </h3>
          <p className="text-[#9ca3af] max-w-2xl mx-auto">
            Precyzja. Estetyka. Skuteczność. Każdy kadr ma znaczenie.
          </p>
        </div>
        <div className="container-max">
          <WhySection />
        </div>
      </section>

      {/* 7) CTA contact */}
      <section id="contact" className="section py-32 relative overflow-hidden">
        {/* tło sekcji */}
        <div className="absolute inset-0 bg-[#1a1a1b]" />
        {/* Złota poświata w tle */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#aa835c]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-max text-center relative z-10">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aa835c] via-[#f0d5b5] to-[#aa835c] glow-text-gold">
              STWÓRZMY COŚ WYJĄTKOWEGO
            </span>
          </h3>

          <p className="mx-auto text-[#e0e0e0] text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Twój projekt zasługuje na złotą oprawę. 
            <br />
            Napisz do mnie — zamienimy wizję w rzeczywistość.
          </p>

          {/* KONTAKT — MAIL + TEL Z GRADIENTEM */}
          <div className="flex flex-col items-center gap-5 mb-10 text-lg md:text-xl">

            {/* EMAIL */}
            <a
              href="mailto:bartosz.ciszek@goldframe.pl"
              className="contact-link flex items-center gap-3 text-[#9ca3af] hover:text-white transition group"
            >
              <FaEnvelope className="w-5 h-5 opacity-80 group-hover:text-[#aa835c] transition" />
              <span className="contact-gradient font-medium tracking-wide">
                bartosz.ciszek@goldframe.pl
              </span>
            </a>

            {/* TELEFON */}
            <a
              href="tel:+48603832422"
              className="contact-link flex items-center gap-3 text-[#9ca3af] hover:text-white transition group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 opacity-80 group-hover:text-[#aa835c] transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a.75.75 0 00.75-.75v-3.615a.75.75 0 00-.56-.727l-3.09-.772a.75.75 0 00-.84.352l-.727 1.09a12.06 12.06 0 01-5.318-5.318l1.09-.727a.75.75 0 00.352-.84l-.772-3.09a.75.75 0 00-.727-.56H3a.75.75 0 00-.75.75v1.5z"
                />
              </svg>

              <span className="contact-gradient font-medium tracking-wide">
                +48 603 832 422
              </span>
            </a>
          </div>

          {/* SOCIAL IKONY */}
          <div className="flex justify-center gap-8 text-[#4a4e51] mt-2">
            <a
              href="https://www.instagram.com/goldframe.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#aa835c] transition transform hover:-translate-y-1"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.youtube.com/@videoeditpl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition transform hover:-translate-y-1"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-8">
        <div className="bg-gradient-to-t from-black to-transparent border-t border-[#aa835c]/10">
          <div className="container-max py-8 flex justify-center">
            <div className="text-sm text-[#4a4e51] text-center">
              © {new Date().getFullYear()} GoldFrame — Bartosz Ciszek. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}