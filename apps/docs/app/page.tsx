import Image from "next/image";
// Hapus import Navbar manual yang panjang

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 text-center">
      <h1 className="text-4xl font-bold text-[#003366] mb-4">
        Dokumentasi Teknik Informatika UNHAS
      </h1>
      <p className="text-gray-600 max-w-lg mb-8">
        Halaman ini digunakan untuk mengelola seluruh dokumen akademik dan panduan teknis.
      </p>
      {/* Gunakan button tanpa appName */}
      <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
        Baca Panduan
      </button>
    </main>
  );
}