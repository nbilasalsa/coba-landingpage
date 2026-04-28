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
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false })
  ]);

  return (
    <section className="relative -mt-16 z-30 px-4">
      {/* - max-w-5xl: Dipersempit dari 6xl agar lebih ramping 
          - rounded-none: Sesuai tema sharp corners sebelumnya
          - shadow-sm: Shadow tipis agar tetap elegan
      */}
      <div 
        className="max-w-5xl mx-auto overflow-hidden rounded-none border border-gray-200 bg-white shadow-sm" 
        ref={emblaRef}
      >
        <div className="flex">
          {newsData.map((news) => (
            <div className="flex-[0_0_100%] min-w-0 flex flex-col md:flex-row" key={news.id}>
              
              {/* Bagian Gambar: Tinggi dikurangi dari 400px ke 320px */}
              <div className="md:w-5/12 h-[250px] md:h-[320px] relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 md:hidden" />
              </div>

              {/* Bagian Teks: Padding dikurangi dari p-12 ke p-8 */}
              <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-center bg-white">
                <span className="text-blue-900 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
                  {news.category}
                </span>
                
                {/* Judul dikecilkan dari text-4xl ke text-2xl/3xl */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  {news.title}
                </h2>
                
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-slate-400 text-xs font-medium">{news.date}</span>
                  <button className="text-[#1a3a6b] text-sm font-bold flex items-center gap-2 group transition-colors hover:text-blue-700">
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