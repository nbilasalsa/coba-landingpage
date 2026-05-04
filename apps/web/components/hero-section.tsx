"use client";

import Typewriter from 'typewriter-effect';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Y-bridge.jpg')" }}
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#1a3a6b]/65" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Logo Unhas Putih - Ukuran diperbesar ke w-48 h-48 */}
        <img
          src="/images/Logo-Resmi-Unhas-White-Version.png"
          alt="Logo Unhas"
          className="w-48 h-48 md:w-52 md:h-52 object-contain mb-8 opacity-80 drop-shadow-2xl transition-transform hover:scale-105 duration-300"
        />

        {/* Title w animation Typewriter */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold drop-shadow-lg min-h-[1.5em] leading-tight">
          <Typewriter
            options={{
              strings: [
                'Fakultas Teknik',
                'Departemen Teknik Informatika'
              ],
              autoStart: true,
              loop: true,
              delay: 65,
              deleteSpeed: 65,
              cursor: '|'
            }}
          />
        </h1>
      </div>
    </section>
  );
}