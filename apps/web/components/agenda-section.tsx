"use client";

import React from "react";
import Link from "next/link";

const agendaData = [
  {
    id: 1,
    category: "Seminar",
    title: "Implementasi Artificial Intelligence dalam Transformasi Digital Berkelanjutan di Sektor Publik",
    date: "25 September 2025",
  },
  {
    id: 2,
    category: "Sempro",
    title: "Rancang Bangun Sistem Monitoring Kualitas Udara Berbasis IoT dan Edge Computing",
    date: "28 September 2025",
  },
  {
    id: 3,
    category: "Sempro",
    title: "Analisis Sentimen Data Twitter Menggunakan Algoritma Deep Learning untuk Deteksi Cyberbullying",
    date: "30 September 2025",
  },
];

export function AgendaSection() {
  return (
    <section className="bg-white pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Judul Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a3a6b] inline-block relative">
            Agenda
            <span className="absolute -bottom-4 left-0 w-full h-1.5 bg-[#1a3a6b]/50"></span>
          </h2>
        </div>

        {/* Daftar Agenda */}
        <div className="flex flex-col gap-y-10 mb-12">
          {agendaData.map((item) => (
            <div key={item.id} className="group cursor-pointer border-b border-gray-100 pb-8 last:border-0">
              <div className="flex flex-col md:flex-row md:items-baseline">
                <h3 className="text-lg md:text-xl font-medium text-[#1a3a6b] leading-tight group-hover:text-blue-700 transition-colors">
                  <span className="font-bold uppercase">{item.category}</span> "{item.title}"
                </h3>
              </div>
              <p className="mt-3 text-sm text-gray-400 font-semibold tracking-widest uppercase">
                {item.date}
              </p>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="flex justify-center">
          <Link 
            href="/agenda"
            className="inline-block bg-[#1a3a6b] text-white px-20 py-4 rounded-none text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#152f58] hover:shadow-lg"
          >
            Lihat Semua
          </Link>
        </div>
      </div>
    </section>
  );
}