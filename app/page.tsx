// /app/page.tsx
import React from "react";
import Image from "next/image";
import HeroClient from "../components/HeroClient";
import PartnersCarousel from "../components/PartnersCarousel";
import StatsFeatureCards from "../components/StatsFeatureCards";
import WorkGallery from "../components/WorkGallery";
import WhySection from "../components/WhySection";
import { FaInstagram, FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "VideoEdit — Bartosz Ciszek",
  description: "VideoEdit — montaż, content creation, storytelling",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="header-compact">
        <div className="container-max flex items-center justify-between">
          <div className="h-8">
            <span className="h1 neon">VideoEdit</span>
          </div>

          <nav className="site-nav text-sm opacity-80">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">O mnie</a></li>
              <li><a href="#services">Czym się zajmuję</a></li>
              <li><a href="#partners">Współpracowałem z</a></li>
              <li><a href="#stats">Na rynku</a></li>
              <li><a href="#work">Praca</a></li>
              <li><a href="#method">Metoda</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="section">
        <div className="container-max hero-grid relative">
          <div>
            <HeroClient />
          </div>

          <div className="relative hidden md:block">
            <div className="card p-4 neon-card" style={{ width: 360 }}>
              <div className="w-full h-56 md:h-96 bg-neutral-900 rounded-lg overflow-hidden">
                <Image src="/bartek.webp" alt="Bartek" width={800} height={1000} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1) O mnie - duża sekcja z obrazem i tekstem */}
      <section id="about" className="section">
        <div className="container-max grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="w-full h-80 md:h-96 card p-0 overflow-hidden rounded-lg">
              <Image src="/bartek.webp" alt="Bartek" width={1200} height={1200} className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl neon mb-4">CZEŚĆ! <br/> JESTEM</h2>
            <h3 className="text-2xl neon-accent mb-4">BARTOSZ CISZEK</h3>
            <p className="lead mb-4">Kocham robić wielkie rzeczy! Zajmuję się montażem, kreacją contentu i prowadzeniem projektów video dla twórców i marek.</p>
          </div>
        </div>
      </section>

      {/* 2) Czym się zajmuję - left image, right two boxes */}
      <section id="services" className="section">
        <div className="container-max grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-full h-80 card overflow-hidden rounded-lg">
              <Image src="/montaz.webp" alt="Montaż" width={1200} height={800} className="object-cover w-full h-full" />
            </div>
          </div>

          <div>
            <div className="grid gap-6">
              <div className="card p-6">
                <h4 className="kicker mb-2">MONTAŻYSTA</h4>
                <p>Jeśli szukasz profesjonalisty, który nie tylko zrealizuje Twoją wizję w filmie, ale także wzbogaci ją o wyjątkową jakość i kreatywność, to trafiłeś w odpowiednie miejsce.</p>
              </div>

              <div className="card p-6">
                <h4 className="kicker mb-2">CONTENT CREATOR</h4>
                <p>Z pasją i kreatywnością zajmę się wykreowaniem oraz prowadzeniem Twojego profilu na różnych platformach społecznościowych. Razem zbudujemy inspirującą narrację, która przyciągnie uwagę i wzmocni Twoją markę.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Partners carousel */}
      <section id="partners" className="section">
        <div className="container-max">
          <h3 className="text-2xl neon-accent mb-6">Współpracowałem z</h3>
          <PartnersCarousel />
        </div>
      </section>

      {/* 4) Stats */}
      <section id="stats" className="section">
        <div className="container-max text-center">
          <h3 className="text-3xl neon mb-4">Na rynku działam</h3>
          <p className="lead mb-8">od 2 lat</p>

          <StatsFeatureCards />
        </div>
      </section>

      {/* 5) Work gallery */}
      <section id="work" className="section">
        <div className="container-max">
          <h3 className="text-2xl neon-accent mb-6">Kawałek mojej pracy</h3>
          <WorkGallery />
        </div>
      </section>

      {/* 6) Method / Value propositions */}
      <section id="method" className="section">
        <div className="container-max">
          <h3 className="text-2xl neon-accent mb-6">Pierwsze 30 sekund • Watchtime • Storytelling</h3>
          <WhySection />
        </div>
      </section>

      {/* 7) CTA contact */}
      <section id="contact" className="section relative overflow-hidden">
        {/* Ozdobne tło tylko dla tej sekcji */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-black pointer-events-none" />

        <div className="container-max text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Zróbmy razem hałas.
            </span>
          </h3>
          <p className="lead mb-8 max-w-xl mx-auto">
            Masz surowy materiał? A może tylko pomysł? <br/>
            Napisz do mnie, zamienimy to w złoto.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <a href="mailto:bartosz.ciszek@videoedit.pl" className="btn-primary flex items-center gap-2 px-8 py-3 text-lg">
              <FaEnvelope /> Napisz e-mail
            </a>
          </div>

          <div className="flex justify-center gap-6 text-neutral-500">
            <a href="#" className="hover:text-cyan-400 transition transform hover:scale-110"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-red-500 transition transform hover:scale-110"><FaYoutube size={24} /></a>
            <a href="#" className="hover:text-pink-500 transition transform hover:scale-110"><FaTiktok size={24} /></a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center opacity-60">© {new Date().getFullYear()} VideoEdit — Bartosz Ciszek</footer>
    </main>
  );
}
