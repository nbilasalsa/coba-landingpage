"use client";

import { useState, useEffect } from "react";

const photos = [
  "/images/Y-bridge.jpg",
  "/images/ritech-2025.jpg",
  "/images/APIE.jpg",
];

export function ProfileContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      
      {/* Section Banner Departemen */}
      <section className="relative w-full h-[242px] mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/Banner.png" 
            alt="Banner Departemen" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto h-full px-12 flex items-center">
          <div className="flex flex-col items-start">
            <img 
              src="/images/Logo-Resmi-Unhas-White-Version.png" 
              alt="Logo Unhas" 
              className="w-24 h-24 mb-2 object-contain brightness-0 invert opacity-100" 
            />
            
            <h1 className="text-4xl font-bold text-white tracking-tight leading-tight">
              Departemen
            </h1>
            
            <div className="flex items-center gap-2 text-[11px] text-white/70 tracking-widest mt-1 font-medium">
              <span>Home</span>
              <span className="text-[10px]">»</span>
              <span className="text-white">Departemen</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY CONTENT - Menggunakan max-w-7xl agar sejajar batas navbar */}
      <div className="max-w-7xl mx-auto px-12 py-20 space-y-24">
        
        {/* Sejarah - Layout Grid untuk menempatkan foto di samping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-[3px] h-8 bg-[#1a3a6b]/60" />
              <h2 className="text-2xl font-bold text-[#1a3a6b]">Sejarah</h2>
            </div>
            <div className="text-gray-700 leading-relaxed text-[15px] text-justify space-y-4 pr-4">
              <p>Sejarah pengembangan Kampus Teknik Gowa bermula dari visi besar Universitas Hasanuddin untuk menciptakan pusat keunggulan pendidikan teknik yang lebih modern dan terintegrasi di luar pusat kota Makassar. Kebutuhan akan ruang yang lebih luas bagi riset serta meningkatnya jumlah mahasiswa di Kampus Tamalanrea mendorong inisiatif pembangunan kawasan pendidikan baru yang mampu menampung inovasi teknologi masa depan.</p>
              <p>Langkah besar ini terealisasi melalui dukungan kemitraan internasional, di mana pembangunan infrastruktur megah di Kabupaten Gowa ini mendapat dukungan hibah dari pemerintah Jepang melalui JICA (Japan International Cooperation Agency). Kolaborasi ini tidak hanya menghasilkan gedung-gedung dengan arsitektur ikonik seperti Center of Technology (CoT), tetapi juga menyediakan fasilitas laboratorium dengan peralatan mutakhir yang setara dengan standar global.</p>
              <p>Proses migrasi basis pendidikan Fakultas Teknik dilakukan secara bertahap sejak tahun 2012. Departemen Teknik Informatika kini menempati fasilitas yang dirancang khusus untuk mendukung konsentrasi tinggi dalam pengembangan perangkat lunak dan riset digital.</p>
            </div>
          </div>

          {/* KOLOM KANAN: SWIPEABLE STACK FOTO SEJARAH */}
          <div className="lg:col-span-4 relative flex justify-center items-start pt-10">
            {photos.map((src, index) => {
              const offset = (index - currentIndex + photos.length) % photos.length;
              return (
                <div
                  key={src}
                  className="absolute w-full aspect-video rounded-xl overflow-hidden shadow-lg transition-all duration-1000 border-[6px] border-white"
                  style={{
                    zIndex: photos.length - offset,
                    transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.05})`,
                    opacity: 1 - offset * 0.40,
                  }}
                >
                  <img src={src} className="w-full h-full object-cover" alt="Visual" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Visi - Layout Full Width md:grid-cols-12 agar teks memanjang ke kanan */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-2 flex items-center gap-4">
            <div className="w-[3px] h-8 bg-[#1a3a6b]/60" />
            <h2 className="text-2xl font-bold text-[#1a3a6b]">Visi</h2>
          </div>
          <div className="md:col-span-10 relative">
            <div className="text-5xl text-[#1a3a6b] font-serif font-black leading-none mb-2">“</div>
            {/* text-lg untuk memperbesar font isi */}
            <p className="text-gray-800 text-lg leading-relaxed font-medium text-justify">
              <i>Pusat unggulan dalam pendidikan, penelitian dan penerapan teknologi informasi berbasis jaringan komputer dan sistem cerdas berlandaskan Benua Maritim Indonesia tahun 2025</i>
            </p>
          </div>
        </div>

        {/* Misi - Layout Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-2 flex items-center gap-4">
            {/* Persegi panjang biru ditambahkan di sini */}
            <div className="w-[3px] h-8 bg-[#1a3a6b]/60" />
            <h2 className="text-2xl font-bold text-[#1a3a6b]">Misi</h2>
          </div>
          <div className="md:col-span-10 relative">
            <div className="text-5xl text-[#1a3a6b] font-serif font-black leading-none mb-2">“</div>
            {/* text-lg untuk memperbesar font isi */}
            <ol className="space-y-4 text-gray-800 text-lg leading-relaxed pl-1 text-justify">
              <li className="flex gap-3">
                <span className="font-bold text-[#1a3a6b]">1.</span>
                <span>Menghasilkan lulusan yang memiliki sikap dan tata nilai yang baik, memiliki keterampilan umum, keterampilan khusus dan pengetahuan dalam bidang Informatika.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#1a3a6b]">2.</span>
                <span>Menghasilkan karya-karya ilmiah dibidang teknologi informasi berbasis jaringan komputer dan sistem cerdas berlandaskan Benua Maritim Indonesia.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#1a3a6b]">3.</span>
                <span>Menyebarluaskan teknologi berdaya guna bagi masyarakat yang mendukung peningkatan kualitas hidup masyarakat.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#1a3a6b]">4.</span>
                <span>Menjalin dan memperkuat kerjasama dengan institusi terkait, baik nasional maupun internasional guna mendukung peningkatan kualitas relevansi.</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Tujuan - Layout Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-2 flex items-center gap-4">
            {/* Persegi panjang biru ditambahkan di sini */}
            <div className="w-[3px] h-8 bg-[#1a3a6b]/60" />
            <h2 className="text-2xl font-bold text-[#1a3a6b]">Tujuan</h2>
          </div>
          <div className="md:col-span-10 relative">
            <div className="text-5xl text-[#1a3a6b] font-serif font-black leading-none mb-2">“</div>
            {/* text-lg untuk memperbesar font isi */}
            <ol className="space-y-4 text-gray-800 text-lg leading-relaxed pl-1 text-justify">
              <li className="flex gap-3">
                <span className="font-bold text-[#1a3a6b]">1.</span>
                <span>Tersedianya sumber daya manusia di bidang Informatika yang memiliki kemampuan berkompetisi mendapatkan lapangan pekerjaan.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#1a3a6b]">2.</span>
                <span>Terciptanya suasana akademik yang mendukung peningkatan pengetahuan di bidang Teknologi informasi khususnya dibidang teknologi berbasis jaringan komputer.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#1a3a6b]">3.</span>
                <span>Terwujudnya komitmen tanggung jawab sosial universitas dalam rangka pemberdayaan masyarakat.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#1a3a6b]">4.</span>
                <span>Menjalin dan memperkuat kerjasama dengan institusi terkait, baik nasional maupun internasional.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* VIDEO SECTION */}
      <section className="bg-white py-24 px-12 flex justify-center border-t border-gray-20">
        <div className="w-full max-w-5xl aspect-video bg-black relative overflow-hidden shadow-sm">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/TzUOPzaY_xs?rel=0"
            title="Profil Departemen Teknik Informatika"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}