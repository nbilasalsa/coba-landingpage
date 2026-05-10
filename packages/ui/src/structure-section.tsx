"use client";

import React from "react";
import { motion } from "framer-motion";

export function OrganizationalStructure() {
  const popOut = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  const lineVertical = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* HEADER */}
        <div className="w-full flex items-center gap-3 mb-12">
          <div className="w-[4px] h-8 bg-[#1a3a6b]/50" />
          <h2 className="text-3xl font-bold text-[#1a3a6b]">Struktur Organisasi</h2>
        </div>

        {/* --- BAGIAN ATAS (FOTO PEJABAT) --- */}
        <div className="flex flex-col items-center w-full mb-12 space-y-10">
          <motion.div initial="hidden" whileInView="visible" variants={popOut} className="flex flex-col items-center">
            {/* Corner radius dihapus (rounded-none) & shadow ditipiskan (shadow-sm) */}
            <div className="w-40 h-52 rounded-none shadow-sm overflow-hidden mb-4 border-2 border-slate-100">
              <img src="/images/testing.jpg" alt="Ketua" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-[#1a3a6b] text-[16px] uppercase tracking-wide">Ketua Departemen</h3>
            <p className="text-[15px] text-slate-800 font-bold mt-1 text-center">Prof. Dr. Ir. Indrabayu, ST., MT., M.Bus.Sys.</p>
          </motion.div>

          <div className="grid grid-cols-4 gap-6 w-full max-w-6xl">
            {[
              { role: "Sekretaris Departemen", name: "Elly Warni, S.T., M.T." },
              { role: "Ketua Program Studi S1", name: "Lorem Ipsum" },
              { role: "Ketua Program Studi S2", name: "Dr. Ir. Zahir Zainuddin, M.Sc." },
              { role: "Ketua Program Studi S3", name: "Novy Nur R.A Mokobombang" },
            ].map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" variants={popOut} className="flex flex-col items-center">
                <div className="w-32 h-44 rounded-none shadow-sm overflow-hidden mb-4 border border-slate-100">
                  <img src="/images/testing.jpg" alt="Staff" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-[#1a3a6b] text-[12px] uppercase text-center min-h-[32px] flex items-center">{item.role}</h4>
                <p className="text-[13px] text-slate-700 font-bold mt-1 text-center">{item.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" variants={popOut} className="flex flex-col items-center">
            <div className="w-32 h-44 rounded-none shadow-sm overflow-hidden mb-4 border border-slate-100">
              <img src="/images/testing.jpg" alt="Staff" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-[#1a3a6b] text-[12px] uppercase">Sekretaris Kemahasiswaan</h4>
            <p className="text-[13px] text-slate-700 font-bold mt-1 text-center font-medium">Ir. Muhamman Alief Fahdal Imran Oemar, ST., M.Sc</p>
          </motion.div>
        </div>

        {/* --- BAGIAN BAWAH (BOX TAJAM & SHADOW TIPIS) --- */}
        <div className="relative flex flex-col items-center w-full max-w-4xl mt-6">
          
          <motion.div initial="hidden" whileInView="visible" variants={popOut} className="z-20 bg-[#e5e9f0] border-2 border-slate-200 px-16 py-4 rounded-none shadow-sm">
            <p className="text-[#1a3a6b] font-black text-[14px] uppercase text-center">Ketua Penjamin Mutu S1, S2, S3</p>
          </motion.div>

          <div className="relative flex flex-col items-center w-full pt-0">
            <motion.div initial="hidden" whileInView="visible" variants={lineVertical} className="w-[2px] h-[320px] bg-slate-400 origin-top z-0" />

            {/* Cabang Tenaga Pendidikan Administrasi */}
            <div className="absolute top-12 left-1/2 flex items-center">
               <div className="w-16 h-[2px] bg-slate-400" />
               <motion.div initial="hidden" whileInView="visible" variants={popOut} className="bg-[#e5e9f0] border-2 border-slate-200 px-6 py-3 rounded-none shadow-sm z-10">
                  <p className="text-[#1a3a6b] font-bold text-[11px] uppercase whitespace-nowrap">Tenaga Pendidikan Administrasi</p>
               </motion.div>
            </div>

            {/* Cabang Laboran */}
            <div className="absolute top-32 right-1/2 flex items-center">
               <motion.div initial="hidden" whileInView="visible" variants={popOut} className="bg-[#e5e9f0] border-2 border-slate-200 px-8 py-3 rounded-none shadow-sm z-10">
                  <p className="text-[#1a3a6b] font-bold text-[11px] uppercase">Laboran</p>
               </motion.div>
               <div className="w-16 h-[2px] bg-slate-400" />
            </div>

            {/* Stacked Box Bawah */}
            <div className="absolute top-[210px] flex flex-col items-center space-y-8 w-full">
               <motion.div initial="hidden" whileInView="visible" variants={popOut} className="bg-[#e5e9f0] border-2 border-slate-300 px-14 py-4 rounded-none shadow-sm min-w-[240px] text-center z-10">
                  <p className="text-[#1a3a6b] font-black text-[13px] uppercase tracking-widest">Laboratorium</p>
               </motion.div>

               <motion.div initial="hidden" whileInView="visible" variants={popOut} className="bg-[#e5e9f0] border-2 border-slate-300 px-20 py-4 rounded-none shadow-sm min-w-[300px] text-center z-10">
                  <p className="text-[#1a3a6b] font-black text-[15px] uppercase tracking-[0.4em]">Dosen dan Mahasiswa</p>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}