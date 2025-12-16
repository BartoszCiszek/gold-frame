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
import { FaInstagram, FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "VideoEdit — Bartosz Ciszek",
  description: "VideoEdit — montaż, content creation, storytelling",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#1d1d1d] text-white">
      {/* HERO Z WIDEO W TLE */}
      <section
        id="home"
        className="section relative overflow-hidden min-h-[85vh] flex items-center"
      >
        {/* BACKGROUND VIDEO */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/30" />
        </div>

        {/* TREŚĆ HERO — LOGO LEWO / HEROCLIENT PRAWO (zachowuje funkcje) */}
        <div className="container-max relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEWA KOLUMNA — CZYSTE LOGO (zero ramek / zero glass) */}
            <div className="flex justify-center md:justify-start">
              <div className="relative" style={{ width: 380 }}>
                <Image
                  src="/logo.webp"
                  alt="Logo"
                  width={800}
                  height={800}
                  className="object-contain w-[260px] md:w-[340px] lg:w-[380px] h-auto"
                  style={{ background: "transparent", display: "block" }}
                  priority
                />
              </div>
            </div>

            {/* PRAWA KOLUMNA — HEROCLIENT (używamy komponentu żeby zachować wszystkie efekty/CTA) */}
            <div className="flex flex-col justify-center items-start">
              {/* HeroClient powinien zawierać Twój nagłówek "Montaż. Kolor. Ruch.", opis i CTA.
                  Nie zmieniamy go — tylko osadzamy tutaj, więc wszystkie jego animacje zostają. */}
              <HeroClient />
            </div>
          </div>
        </div>
      </section>

      {/* --- SEPARATOR TYPOGRAFICZNY (ANIMOWANY) --- */}
      <div className="w-full bg-black py-16 flex justify-center items-center relative z-10 border-b border-white/5">
        <div className="text-center">
          <p className="text-sm text-cyan-400 font-bold tracking-[0.3em] uppercase mb-3">
            Production House
          </p>
          <DynamicTitle />
        </div>
      </div>
      {/* ------------------------------------------------------- */}

      {/* 1) O mnie */}
      <section id="about" className="section py-20 relative">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-cyan-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
            <div className="w-full h-80 md:h-[600px] card p-0 overflow-hidden rounded-xl relative">
              <Image
                src="/bartek.webp"
                alt="Bartek"
                width={1000}
                height={1200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[0.9] tracking-tighter font-sans">
              CZEŚĆ! <br />
              JESTEM{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                BARTEK
              </span>
            </h2>
            <p className="lead text-lg text-gray-300 mb-6 font-medium">
              Kocham robić wielkie rzeczy! Zajmuję się montażem, kreacją contentu i prowadzeniem projektów video dla twórców i marek.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Moim celem jest nie tylko "pocięcie filmu", ale stworzenie historii, która zatrzyma widza przed ekranem.
            </p>
          </div>
        </div>
      </section>

      {/* 2) Czym się zajmuję */}
      <ServicesSection />

      {/* 3) Partners */}
      <section id="partners" className="section py-20 bg-[#1d1d1d]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold uppercase mb-2 font-sans tracking-tighter">
              Współpracowałem z
            </h3>
            <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full" />
          </div>
          <PartnersCarousel />
        </div>
      </section>

      {/* 4) Stats */}
      <section id="stats" className="section py-20 bg-[#1d1d1d]">
        <StatsFeatureCards />
      </section>

      {/* 5) Work gallery */}
      <section id="work" className="section py-20">
        <div className="container-max">
          <div className="w-full flex flex-col items-center text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 font-sans tracking-tighter uppercase">
              Wybrane Projekty
            </h3>
            <p className="text-gray-400">Zobacz, co udało mi się stworzyć.</p>
          </div>
          <WorkGallery />
        </div>
      </section>

      {/* 6) Method */}
      <section id="method" className="section py-20 bg-[#1d1d1d]">
        <div className="container-max text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sans tracking-tighter uppercase">
            Moja filozofia pracy
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nie chodzi o to, żeby było "ładnie". Chodzi o to, żeby było skutecznie.
          </p>
        </div>
        <div className="container-max">
          <WhySection />
        </div>
      </section>

      {/* 7) CTA contact — poprawiona wersja (wyrównanie, spacing, line-height) */}
      <section id="contact" className="section py-32 relative overflow-hidden">
        {/* tło sekcji */}
        <div className="absolute inset-0 bg-[#1d1d1d]" />

        <div className="container-max text-center relative z-10">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter text-white">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-300 to-gray-500">
              ZRÓBMY RAZEM HAŁAS.
            </span>
          </h3>

          {/* poprawiony paragraf: bez <br/> wymuszeń, większy max-width i lepszy leading */}
          <p className="mx-auto text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Masz surowy materiał? A może tylko pomysł? Napisz do mnie — zamienimy to w viral.
          </p>

          {/* KONTAKT — MAIL + TEL Z GRADIENTEM */}
          <div className="flex flex-col items-center gap-5 mb-10 text-lg md:text-xl">

            {/* EMAIL */}
            <a
              href="mailto:bartosz.ciszek@videoedit.pl"
              className="contact-link flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <FaEnvelope className="w-5 h-5 opacity-80" />
              <span className="contact-gradient font-medium tracking-wide">
                bartosz.ciszek@videoedit.pl
              </span>
            </a>

            {/* TELEFON */}
            <a
              href="tel:+48603832422"
              className="contact-link flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 opacity-80"
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
          <div className="flex justify-center gap-8 text-neutral-400 mt-2">
            <a
              href="https://www.instagram.com/videoeditpl?igsh=MW1saXA4OHRkbmRkcg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition transform hover:-translate-y-1"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.youtube.com/@videoeditpl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition transform hover:-translate-y-1"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER — MINIMALNY & WYŚRODKOWANY */}
      <footer className="mt-8">
        <div className="bg-linear-to-t from-[#0b0b0b] to-transparent border-t border-white/5">
          <div className="container-max py-8 flex justify-center">
            <div className="text-sm text-neutral-400 text-center">
              © {new Date().getFullYear()} VideoEdit — Bartosz Ciszek. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
