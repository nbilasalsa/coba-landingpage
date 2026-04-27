"use client";

import React from "react";
import Link from "next/link";

const labData = [
  {
    id: 1,
    title: "Artificial Intelligence",
    image: "/images/AI.png",
    description: "Fokus pada pengembangan sistem cerdas yang mampu belajar dari data, mengenali pola, serta memberikan solusi otomatis untuk berbagai permasalahan.",
    href: "/research/lab/ai",
  },
  {
    id: 2,
    title: "Cloud Computing",
    image: "/images/CC.png",
    description: "Berfokus pada pemanfaatan teknologi komputasi awan untuk menyediakan layanan yang fleksibel, efisien, dan mudah diakses dalam pengelolaan data serta aplikasi.",
    href: "/research/lab/cloud",
  },
  {
    id: 3,
    title: "Internet of Things",
    image: "/images/IoT.png",
    description: "Mengembangkan teknologi yang menghubungkan berbagai perangkat fisik melalui internet untuk menciptakan sistem yang terintegrasi dan meningkatkan efisiensi kehidupan sehari-hari.",
    href: "/research/lab/iot",
  },
];

export function LabSection() {
  return (
    <section className="bg-white pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Judul Section Utama */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a3a6b] inline-block relative">
            Lab Kami
            <span className="absolute -bottom-4 left-0 w-full h-1.5 bg-[#1a3a6b]/50"></span>
          </h2>
          <p className="mt-8 text-gray-500 max-w-2xl text-sm md:text-base">
            Laboratorium kami menyediakan fasilitas riset modern untuk mendukung inovasi mahasiswa dan dosen di bidang teknologi terkini.
          </p>
        </div>

        {/* Grid Card Lab dengan Margin Kanan-Kiri Rata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labData.map((lab) => (
            <div 
              key={lab.id} 
              className="flex flex-col items-center p-8 border border-gray-200 rounded-none text-center bg-white shadow-sm transition-colors duration-300 ease-in-out hover:border-[#1a3a6b]"
            >
              {/* Icon Lab */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <img 
                  src={lab.image} 
                  alt={lab.title}
                  className="max-w-full max-h-full object-contain grayscale transition-all duration-300 hover:grayscale-0" 
                />
              </div>

              {/* Nama Lab */}
              <h3 className="text-lg font-bold text-[#1a3a6b] mb-3 leading-tight">
                {lab.title}
              </h3>

              {/* Deskripsi */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow text-justify md:text-center">
                {lab.description}
              </p>

              {/* Tombol Pelajari Lebih Lanjut */}
              <Link 
                href={lab.href}
                className="w-full bg-[#1a3a6b] text-white py-2.5 rounded-none text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-[#152f58] text-center"
              >
                pelajari lebih lanjut
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}