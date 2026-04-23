import type { Metadata } from "next";
import "./globals.css"
import { Navbar } from "@repo/ui";
import { Footer } from "@repo/ui";

export const metadata: Metadata = {
  title: "Departemen Teknik Informatika - Universitas Hasanuddin",
  description: "Portal resmi Departemen Teknik Informatika Universitas Hasanuddin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}