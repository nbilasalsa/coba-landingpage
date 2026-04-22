import * as React from "react";

export function Footer() {
  return (
    <footer className="bg-[#003366] text-white pt-12 pb-6 px-8 mt-auto border-t border-blue-800 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/logo-unhas.png" alt="Logo" className="w-8 h-8" />
            <p className="font-bold text-sm leading-tight">Teknik Informatika<br/>UNHAS</p>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Kampus Teknik Gowa, Jl. Poros Malino KM. 6, Bontomarannu, Gowa.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-4">Resources</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">Portal Akademik</li>
            <li className="hover:text-white cursor-pointer transition-colors">Digital Library</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-4">Contact</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>✉️ informatika@unhas.ac.id</li>
            <li>🕒 Senin - Jumat: 08.00 - 16.00</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-4">Location</h4>
          <div className="h-28 bg-blue-900/40 rounded-lg border border-blue-800 flex items-center justify-center text-[10px] text-blue-300">
            Google Maps Kampus Gowa
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-blue-900/50 text-center text-[10px] text-gray-500">
        © 2026 Teknik Informatika Universitas Hasanuddin
      </div>
    </footer>
  );
}