"use client";

import React from "react";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    category: "KEGIATAN",
    title: "RITECH 2025: 1st International Conference dilaksanakan di Swissbell Hotel",
    date: "6-7 September 2025",
    image: "/images/ritech-2025.jpg", 
  },
  { id: 2, category: "KEGIATAN", title: "RITECH 2025: 1st International Conference dilaksanakan di Swissbell Hotel", date: "6-7 September 2025", image: "/images/ritech-2025.jpg" },
  { id: 3, category: "KEGIATAN", title: "RITECH 2025: 1st International Conference dilaksanakan di Swissbell Hotel", date: "6-7 September 2025", image: "/images/ritech-2025.jpg" },
  { id: 4, category: "KEGIATAN", title: "RITECH 2025: 1st International Conference dilaksanakan di Swissbell Hotel", date: "6-7 September 2025", image: "/images/ritech-2025.jpg" },
  { id: 5, category: "KEGIATAN", title: "RITECH 2025: 1st International Conference dilaksanakan di Swissbell Hotel", date: "6-7 September 2025", image: "/images/ritech-2025.jpg" },
  { id: 6, category: "KEGIATAN", title: "RITECH 2025: 1st International Conference dilaksanakan di Swissbell Hotel", date: "6-7 September 2025", image: "/images/ritech-2025.jpg" },
];

export function NewsSection() {
  return (
    <section className="bg-white pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Judul Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a3a6b] inline-block relative">
            Berita
            <span className="absolute -bottom-4 left-0 w-full h-1.5 bg-[#1a3a6b]/50"></span>
          </h2>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsData.map((news) => (
            <div 
              key={news.id} 
              className="group cursor-pointer bg-white border border-gray-100 rounded-none transition-all duration-300 hover:border-[#1a3a6b] hover:shadow-sm flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Icon Panah di Pojok Gambar dengan Efek Hover */}
                <div className="absolute bottom-0 right-0 bg-white p-3 border-t border-l border-gray-50 transition-colors duration-300 group-hover:bg-[#1a3a6b]">
                  <img 
                    src="/images/icons/arrow.svg" 
                    alt="Arrow Icon" 
                    className="w-5 h-5 object-contain transition-all duration-300 group-hover:invert group-hover:brightness-200" 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  {news.category}
                </span>
                <h3 className="text-md font-bold text-[#1a3a6b] leading-snug mb-6 line-clamp-3 group-hover:text-blue-700 transition-colors">
                  {news.title}
                </h3>
                
                {/* Footer dengan Tanggal */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-gray-400 gap-2">
                  <img 
                    src="/images/icons/date.svg" 
                    alt="Calendar Icon" 
                    className="w-4 h-4 object-contain opacity-60" 
                  />
                  <span className="text-xs font-medium">{news.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Berita Lainnya */}
        <div className="flex justify-end">
          <Link 
            href="/berita"
            className="border border-[#1a3a6b] text-[#1a3a6b] px-8 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all hover:bg-[#1a3a6b] hover:text-white"
          >
            Berita Lainnya
          </Link>
        </div>
      </div>
    </section>
  );
}