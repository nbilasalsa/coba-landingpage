"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Profile",
    href: "#",
    children: [
      { label: "Visi & Misi", href: "/profile/visi-misi" },
      { label: "Sejarah", href: "/profile/sejarah" },
      { label: "Struktur Organisasi", href: "/profile/organisasi" },
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

  // Mencegah scroll saat drawer terbuka
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
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0 group">
            <Image
              src="/images/logo-unhas.png"
              alt="Logo Universitas Hasanuddin"
              width={46} 
              height={46}
              className="object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">
                Teknik Informatika
              </span>
              <span className="text-white/60 text-[10px] uppercase tracking-widest font-medium">
                Universitas Hasanuddin
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 px-4 py-2 text-white/90 hover:text-white text-[15px] font-semibold rounded-md transition-all hover:bg-white/10"
                >
                  {item.label}
                  {item.children && (
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Desktop */}
                {item.children && openMenu === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-60 bg-white rounded-b-lg shadow-2xl border-t-2 border-[#f97316] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#1a3a6b] transition-colors font-medium"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER SIDEBAR */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-visibility duration-300 ${mobileOpen ? "visible" : "invisible"}`}
      >
        {/* Overlay gelap */}
        <div 
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        
        {/* Drawer Content */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-80 bg-[#1a3a6b] shadow-2xl transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full">
            {/* Header Drawer */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-white font-bold text-lg">Menu</span>
              <button 
                onClick={() => setMobileOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Items di Drawer */}
            <nav className="flex-1 overflow-y-auto py-4">
              {navItems.map((item) => (
                <div key={item.label} className="px-4">
                  <div className="py-2">
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-white font-bold text-base hover:bg-white/5 rounded"
                      onClick={() => !item.children && setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="mt-1 ml-4 border-l border-white/20 pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-white/70 text-sm hover:text-white"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </nav>

            {/* Footer Drawer */}
            <div className="p-6 border-t border-white/10">
              <p className="text-white/40 text-[10px] uppercase tracking-widest text-center">
                Teknik Informatika UNHAS
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}