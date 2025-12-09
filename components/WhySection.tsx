// /components/WhySection.tsx
import React from "react";

export default function WhySection() {
  const cards = [
    { title: "Pierwsze 30 sekund", text: "To kluczowy moment, który decyduje, czy widz zostanie na dłużej. Twój wstęp wciągnie od pierwszej sekundy materiału!" },
    { title: "Watchtime", text: "To czas, jaki użytkownicy spędzają na oglądaniu Twoich treści. Będziemy go analizować, aby jeszcze bardziej angażować odbiorców!" },
    { title: "Storytelling", text: "Dobra historia i budowanie napięcia sprawiają, że widzowie chcą oglądać całość filmu. Skupimy się na tworzeniu angażujących narracji." },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((c) => (
        <div className="card p-5" key={c.title}>
          <h4 className="kicker mb-2">{c.title}</h4>
          <p className="opacity-80">{c.text}</p>
        </div>
      ))}
    </div>
  );
}
