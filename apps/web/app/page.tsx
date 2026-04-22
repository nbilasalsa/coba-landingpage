import { Navbar } from "@repo/ui/navbar";
import { Footer } from "@repo/ui/footer";

export default function Page() {
  return (
    // Container utama dengan latar belakang putih (bg-white) 
    // dan tinggi minimal layar (min-h-screen)
    <div className="bg-white min-h-screen flex flex-col">
      
      {/* Menampilkan Navbar di bagian atas */}
      <Navbar />

      {/* Bagian konten utama dibuat kosong (flex-grow agar footer tetap di bawah) */}
      <main className="flex-grow">
        {/* Anda bisa menambahkan konten di sini nanti */}
      </main>

      {/* Menampilkan Footer di bagian bawah */}
      <Footer />
      
    </div>
  );
}