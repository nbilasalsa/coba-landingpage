import { HeroSection } from "../components/hero-section";
import { NewsCarousel } from "../components/news-carousel"; 
import { AboutSection } from "../components/about-section"; 
import { LabSection } from "../components/lab-section"; 
import { AgendaSection } from "../components/agenda-section";
import { NewsSection } from "../components/news-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Header Utama */}
      <HeroSection />

      {/* 2. Section Carousel Berita (Melayang menimpa Hero) */}
      <NewsCarousel />

      {/* 3. Section Tentang Departemen */}
      <AboutSection />
      
      {/* 4. Lab Section */}
      <LabSection />

      {/* 5. Agenda Section */}
      <AgendaSection />

      {/* 6. Section Berita */}
      <NewsSection />
    </main>
  );
}