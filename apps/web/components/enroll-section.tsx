"use client";

import React from "react";
import Link from "next/link";

export function EnrollSection() {
  return (
    /* pb-48 memberikan jarak yang pas dan lega ke arah footer */
    <section className="relative bg-white pt-24 pb-48 overflow-hidden">
      
      {/* 1. Background Video - Tinggi dikunci agar tetap proporsional (Stay) */}
      <div className="absolute top-0 right-0 left-0 md:left-1/3 z-10 h-[500px] md:h-[600px]">
        <div className="relative h-full w-full">
          
          {/* GRADIENT OVERLAYS (Ultra Smooth) */}
          {/* Gradasi Kiri: Menutup sisi video agar teks terbaca jelas */}
          <div className="absolute inset-y-0 left-0 w-2/3 z-20 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent pointer-events-none"></div>
          
          {/* Gradasi Atas: Memudarkan bagian atas video */}
          <div className="absolute top-0 left-0 right-0 h-40 z-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          
          {/* Gradasi Bawah: Membuat ekor video memudar halus ke background putih */}
          <div className="absolute bottom-0 left-0 right-0 h-64 z-20 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"></div>
          
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="h-full w-full object-cover grayscale-[10%]"
          >
            <source src="/videos/hero-informatika.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* 2. Container Teks (Sejajar sempurna dengan News Section) */}
      <div className="max-w-6xl mx-auto relative z-30 pointer-events-none">
        <div className="w-full md:w-1/2 pt-20 pb-10 pointer-events-auto px-4 sm:px-0">
          
          {/* Judul dengan pemenggalan baris sesuai permintaan */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a6b] leading-[1.2] mb-6">
            Wujudkan Inovasimu <br />
            di    Informatika <br />
            Universitas Hasanuddin!
          </h2>
          
          <p className="text-lg text-[#1a3a6b]/80 mb-10 leading-relaxed max-w-md">
            Bergabunglah dalam perjalanan transformatif menuju penguasaan teknologi masa depan. 
            Saatnya mulai langkahmu.
          </p>
          
          <Link 
            href="/daftar"
            className="inline-block bg-[#1a3a6b] text-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-all hover:bg-[#152f58] hover:shadow-xl active:scale-95 shadow-lg"
          >
            Mulai Perjalananmu!
          </Link>
        </div>
      </div>
    </section>
  );
}