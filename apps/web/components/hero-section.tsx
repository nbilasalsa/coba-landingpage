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
        {/* Logo / emblem */}
        <img
          src="/images/Logo-Resmi-Unhas-White-Version.png"
          alt="Logo Unhas"
          className="w-32 h-32 object-contain mb-6 opacity-90 drop-shadow-lg"
        />

        {/* Title */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-md">
          Departemen Teknik Informatika
        </h1>
      </div>
    </section>
  );
}