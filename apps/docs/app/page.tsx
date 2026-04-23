export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-24">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Dokumentasi <span className="text-[hsl(280,100%,70%)]">Teknik Informatika</span> UNHAS
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Halaman ini digunakan untuk mengelola seluruh dokumen akademik dan panduan teknis.
        </p>
        <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-black hover:bg-gray-200">
          Baca Panduan
        </button>
      </div>
    </main>
  );
}