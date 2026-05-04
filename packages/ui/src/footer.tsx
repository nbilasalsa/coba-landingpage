import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Clock, Link as LinkIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#003161] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Brand & Contact Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-unhas.png" // Pastikan logo sudah ada di folder public
                alt="Logo Unhas"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="leading-tight">
                <p className="text-[10px] text-white/70 uppercase tracking-widest">Universitas Hasanuddin</p>
                <p className="text-sm font-bold">Teknik Informatika</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-white/80">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-white/60" />
                <span>Jln. Malino</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-white/60" />
                <span>admin.prodi@unhas.ac.id</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-white/60" />
                <span>07.00 - 16.00</span>
              </div>
            </div>
          </div>

          {/* 2. Link Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-2">Link</h4>
            <div className="w-full h-[1px] bg-white/20 mb-4"></div>
            <ul className="space-y-3 text-xs text-white/90">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <LinkIcon size={12} className="text-blue-400" />
                  Hasanuddin University
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <LinkIcon size={12} className="text-blue-400" />
                  IT Helpdesk UNHAS
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <LinkIcon size={12} className="text-blue-400" />
                  Whistleblowing System UNHAS
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Link Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-2">Link</h4>
            <div className="w-full h-[1px] bg-white/20 mb-4"></div>
            <ul className="space-y-3 text-xs text-white/90">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <LinkIcon size={12} className="text-blue-400" />
                  APPS UNHAS
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <LinkIcon size={12} className="text-blue-400" />
                  Neosia
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Location Column */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-2xl mb-6">Location</h4>
            <div className="rounded-sm overflow-hidden w-full h-44 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.3!2d119.4833!3d-5.1478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDgnNTIuMSJTIDExOcKwMjgnNTkuOSJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Lokasi Teknik Informatika Unhas"
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}