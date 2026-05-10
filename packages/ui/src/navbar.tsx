"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
  children?: { 
    label: string; 
    href?: string; 
    isHeader?: boolean; 
  }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Departemen",
    href: "#",
    children: [
      { label: "PROFIL", isHeader: true },
      { label: "Tentang Departemen", href: "/departemen/profil" },
      { label: "Struktur Organisasi", href: "/departemen/struktur" },
      { label: "Akreditasi & Kualitas", href: "/departemen/akreditasi" },
      
      { label: "SUMBER DAYA", isHeader: true },
      { label: "Daftar Dosen", href: "/departemen/dosen" },
      { label: "Tenaga Kependidikan", href: "/departemen/staff" },
      { label: "Fasilitas", href: "/departemen/fasilitas" },
      
      { label: "LAINNYA", isHeader: true },
      { label: "Prestasi", href: "/departemen/prestasi" },
      { label: "Kontak & Lokasi", href: "/departemen/kontak" },
    ],
  },
  {
    label: "Education",
    href: "#",
    children: [
      { label: "Program S1", href: "/education/s1" },
      { label: "Kurikulum", href: "/education/kurikulum" },
      { label: "Dosen", href: "/education/dosen" },
    ],
  },
  {
    label: "Community Service & Partnership",
    href: "#",
    children: [
      { label: "Pengabdian Masyarakat", href: "/community/pengabdian" },
      { label: "Kerjasama", href: "/community/kerjasama" },
    ],
  },
  {
    label: "Research & Innovation",
    href: "#",
    children: [
      { label: "Penelitian", href: "/research/penelitian" },
      { label: "Publikasi", href: "/research/publikasi" },
      { label: "Lab Riset", href: "/research/lab" },
    ],
  },
];

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

  // Mencegah scroll saat menu mobile terbuka
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a3a6b] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0 group">
            <Image
              src="/images/logo-unhas.png"
              alt="Logo Universitas Hasanuddin"
              width={46} 
              height={46}
              className="object-contain"
            />
            <div className="flex flex-col text-white">
              <span className="font-bold text-lg leading-tight">Teknik Informatika</span>
              <span className="text-white/60 text-[10px] uppercase tracking-widest font-medium">
                Universitas Hasanuddin
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center h-full">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 px-4 h-full text-[14px] font-bold transition-all relative ${
                    openMenu === item.label ? 'text-white' : 'text-white/80'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  
                  {openMenu === item.label && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-white z-50" 
                    />
                  )}
                </Link>

                {/* Dropdown Desktop */}
                <AnimatePresence>
                  {item.children && openMenu === item.label && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-[80px] left-0 w-72 bg-white shadow-2xl py-4 border-t border-gray-100 z-50"
                    >
                      {item.children.map((child, idx) => (
                        <div key={idx}>
                          {child.isHeader ? (
                            <div className="px-6 py-2 text-[11px] font-black text-[#1a3a6b]/40 uppercase tracking-widest mt-2">
                              {child.label}
                            </div>
                          ) : (
                            <Link
                              href={child.href || "#"}
                              className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a3a6b] transition-colors font-normal"
                            >
                              {child.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Hamburger Button Mobile */}
          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(true)}>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER SIDEBAR */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            {/* Backdrop dengan Fade transition */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />

            {/* Content Sidebar dengan Slide transition */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-[#1a3a6b] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-bold text-lg tracking-wider text-white">MENU</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-2">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-white/5">
                    <div 
                      className="flex items-center justify-between px-6 py-4 font-bold cursor-pointer hover:bg-white/5 text-white"
                      onClick={() => item.children ? setActiveMobileSub(activeMobileSub === item.label ? null : item.label) : setMobileOpen(false)}
                    >
                      <Link href={item.href} onClick={(e) => item.children && e.preventDefault()}>
                        {item.label}
                      </Link>
                      {item.children && (
                        <svg className={`w-4 h-4 transition-transform ${activeMobileSub === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>

                    {/* Smooth Accordion Submenu */}
                    <AnimatePresence>
                      {item.children && activeMobileSub === item.label && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-black/20 overflow-hidden"
                        >
                          <div className="pb-2">
                            {item.children.map((child, idx) => (
                              <div key={idx}>
                                {child.isHeader ? (
                                  <div className="px-10 py-2 text-[10px] font-black text-white/30 uppercase mt-2">
                                    {child.label}
                                  </div>
                                ) : (
                                  <Link
                                    href={child.href || "#"}
                                    className="block py-3 pl-10 pr-6 text-white/70 text-sm hover:text-white font-normal transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}