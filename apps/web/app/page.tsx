import React from "react";

export default function Page(): React.ReactNode { // Tambahkan tipe kembalian
  return (
    <div className="bg-white">
      {/* Hero Section sesuai Desain Anda */}
      <section className="bg-[#003366] text-white py-32 px-10 relative overflow-hidden flex items-center justify-center min-h-[600px]">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Teknik Informatika <br />
            <span className="text-[#FFD700]">Universitas Hasanuddin</span>
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed font-light">
            Membangun masa depan teknologi melalui inovasi riset, pendidikan unggul, 
            dan kolaborasi industri yang berdampak global.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#FFD700] text-[#003366] px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all shadow-xl">
              Lihat Program Studi
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#003366] transition-all">
              Portal Mahasiswa
            </button>
          </div>
        </div>
      </section>

      {/* Bagian Putih Kosong di Bawah Hero */}
      <section className="py-20 bg-white min-h-[400px]">
      </section>
    </div>
  );
}