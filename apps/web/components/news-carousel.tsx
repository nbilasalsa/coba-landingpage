"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const newsData = [
  {
    id: 1,
    category: "Conference, International Event",
    title: "RITECH 2025: 1st International Conference",
    date: "6 - 7 September 2025",
    image: "/images/ritech-2025.jpg", 
  },
  {
    id: 2,
    category: "Achievement",
    title: "UNHAS is hosting the 4th Asia Pacific Internet Engineering (APIE) Camp",
    date: "12-16 August 2024",
    image: "/images/APIE.jpg",
  },
];

export function NewsCarousel() {
  // Autoplay disetel 8 detik sesuai kode awalmu
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false })
  ]);

  return (
    <section className="relative -mt-24 z-30 px-4">
      {/* PENJELASAN PERUBAHAN:
          - rounded: Sudut lengkung kecil (4px) agar tidak terlalu corner/bulat.
          - border border-gray-200: Memberikan outline tipis yang halus.
          - shadow-none: Memastikan tidak ada bayangan sama sekali.
      */}
      <div 
        className="max-w-6xl mx-auto overflow-hidden rounded border border-gray-200 bg-white shadow-none" 
        ref={emblaRef}
      >
        <div className="flex">
          {newsData.map((news) => (
            <div className="flex-[0_0_100%] min-w-0 flex flex-col md:flex-row" key={news.id}>
              
              {/* Bagian Gambar */}
              <div className="md:w-1/2 h-[300px] md:h-[400px] relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay tipis agar gambar tidak terlalu terang jika menabrak teks */}
                <div className="absolute inset-0 bg-black/5 md:hidden" />
              </div>

              {/* Bagian Teks */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                <span className="text-blue-900 font-bold text-xs uppercase tracking-widest mb-3">
                  {news.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  {news.title}
                </h2>
                
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                  <span className="text-slate-400 text-sm font-medium">{news.date}</span>
                  <button className="text-[#1a3a6b] font-bold flex items-center gap-2 group transition-colors hover:text-blue-700">
                    Selengkapnya 
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}