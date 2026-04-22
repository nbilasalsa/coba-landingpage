import * as React from "react";

export function Navbar() {
  return (
    <nav className="bg-[#003366] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md w-full">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img src="/logo-unhas.png" alt="Logo" className="w-8 h-8 object-contain" />
        </div>
        <span className="text-xl font-bold tracking-tight">Teknik Informatika</span>
      </div>
      <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
        <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-colors">
          Profile
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-colors">
          Education
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </nav>
  );
}