"use client";

import React from "react";

export function AboutSection() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Judul Section dengan Garis Bawah Khas - Tanpa Shadow */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#1a3a6b] inline-block relative">
            About
            <span className="absolute -bottom-4 left-0 w-full h-1.5 bg-[#043873]/70"></span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Sisi Kiri: Foto & Nama Jabatan */}
          <div className="lg:w-1/3 w-full flex flex-col items-center">
            <div className="w-full max-w-[350px] aspect-[4/5] relative mb-6">
              {/* Foto dengan rounded kecil dan tanpa shadow */}
              <img
                src="/images/siluet.png" 
                alt="Prof. Dr. Ir. Indrabayu"
                className="w-full h-full object-cover rounded border border-gray-100"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-[#1a3a6b] leading-tight mb-1">
                Prof. Dr. Ir. Indrabayu, ST., MT., M.Bus.Sys., IPM, ASEAN. Eng.
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                Ketua Departemen Teknik Informatika
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Konten Teks */}
          <div className="lg:w-2/3 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a6b] mb-10 leading-tight">
              Program Studi Teknik Informatika
            </h1>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
              <p>
                Departemen Teknik Informatika Universitas Hasanuddin merupakan pusat unggulan pendidikan teknologi di Indonesia Timur. Berlokasi di Kampus Gowa yang modern, kami berkomitmen untuk mencetak lulusan yang tidak hanya menguasai teori ilmu komputer, tetapi juga memiliki kemampuan analitis yang tajam dalam memecahkan masalah kompleks melalui inovasi perangkat lunak dan sistem cerdas.
              </p>
              
              <p>
                Dengan kurikulum yang adaptif terhadap perkembangan industri global, kami fokus pada pengembangan keahlian di bidang kecerdasan buatan (AI), data science, rekayasa perangkat lunak, hingga keamanan siber. Sebagai bagian dari Fakultas Teknik UNHAS, kami menjunjung tinggi integrasi antara riset akademis dan implementasi teknologi berkelanjutan demi kemajuan masyarakat.
              </p>

              <p>
                Lulusan kami dipersiapkan untuk menjadi pemimpin masa depan dalam ekosistem digital, mulai dari teknokrat, peneliti, hingga pengusaha teknologi (technopreneur) yang berlandaskan pada integritas, profesionalisme, dan nilai-nilai luhur Universitas Hasanuddin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}