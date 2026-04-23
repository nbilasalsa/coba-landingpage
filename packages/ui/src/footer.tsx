import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a3a6b] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-unhas.png"
                alt="Logo Unhas"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="leading-tight">
                <p className="text-xs text-white/60 uppercase tracking-widest">Universitas Hasanuddin</p>
                <p className="text-sm font-bold">Teknik Informatika</p>
              </div>
            </Link>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jln. Malino</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>admin.prodi@unhas.ac.id</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>07.00 - 16.00</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-base mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#" className="text-[#f97316] hover:text-orange-300 transition-colors">Overview</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Customer stories</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-base mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Guides & tutorials</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Help center</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-base mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Media kit</Link></li>
            </ul>
          </div>

          {/* Location Map */}
          <div>
            <h4 className="font-bold text-base mb-4">Location</h4>
            <div className="rounded overflow-hidden border border-white/20 w-full h-36">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.3!2d119.4833!3d-5.1478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDgnNTIuMSJTIDExOcKwMjgnNTkuOSJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Teknik Informatika Unhas"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
            <span>English ∨</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-white transition-colors">Terms & privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Security</Link>
            <Link href="#" className="hover:text-white transition-colors">Status</Link>
            <span>©2026 Teknik Informatika Unhas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}