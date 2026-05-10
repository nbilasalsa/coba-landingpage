import type { Metadata } from "next";
import "./globals.css";
// Gabungkan import agar rapi dan tidak duplikat
import { Navbar, Footer, ScrollToTop } from "@repo/ui";

export const metadata: Metadata = {
  title: "Departemen Teknik Informatika - Universitas Hasanuddin",
  description: "Portal resmi Departemen Teknik Informatika Universitas Hasanuddin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased text-slate-900 bg-white">
        <Navbar />
        
        {/* Memberi min-h agar footer tetap di bawah jika konten sedikit */}
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        
        {/* ScrollToTop diletakkan di paling bawah body */}
        <ScrollToTop />
      </body>
    </html>
  );
}