"use client";

import { OrganizationalStructure } from "@repo/ui";
// Impor Navbar dan Footer kamu jika perlu agar konsisten
// import { Navbar } from "@/components/navbar"; 
// import { Footer } from "@/components/footer";

export default function StrukturPage() {
  return (
    <main className="min-h-screen bg-white">
      
      
      <div className="pt-20"> 
        <OrganizationalStructure/>
      </div>

      
    </main>
  );
}