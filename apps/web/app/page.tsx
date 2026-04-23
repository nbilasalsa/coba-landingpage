import { HeroSection } from "../components/hero-section";
import { NewsCarousel } from "../components/news-carousel"; 
import { AboutSection } from "../components/about-section"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Header Utama */}
      <HeroSection />

      {/* 2. Section Carousel Berita (Melayang menimpa Hero) */}
      <NewsCarousel />

      {/* 3. Section Tentang Departemen */}
      <AboutSection />
      
      {/* Section lain seperti Galeri atau Kontak bisa ditambah di bawah sini */}
    </main>
  );
}