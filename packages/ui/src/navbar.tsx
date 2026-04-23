"use client";

import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a3a6b] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/logo-unhas.png"
              alt="Logo Universitas Hasanuddin"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-white font-bold text-base leading-tight">
              Teknik Informatika
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-white/90 hover:text-white text-sm font-medium rounded transition-colors hover:bg-white/10"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openMenu === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded shadow-xl border border-gray-100 py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a3a6b] transition-colors"
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
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#152f58] border-t border-white/10">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-6 py-3 text-white/90 text-sm font-medium hover:bg-white/10 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block px-10 py-2 text-white/60 text-sm hover:text-white hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}