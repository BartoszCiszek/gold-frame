// /components/WorkGallery.tsx
"use client";

import React from "react";

const items = [
  { id: "yt1", type: "youtube", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "ig1", type: "ig", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // placeholder
  { id: "tt1", type: "tiktok", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // placeholder
];

export default function WorkGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.id} className="card overflow-hidden rounded-lg">
          <div style={{ aspectRatio: "16/9" }}>
            <iframe src={it.src} title={it.id} className="w-full h-full" allowFullScreen />
          </div>
        </div>
      ))}
    </div>
  );
}
