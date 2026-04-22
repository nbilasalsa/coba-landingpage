import React from "react";
// @ts-ignore: Memaksa TypeScript mengabaikan error pembacaan file CSS
import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@repo/ui";

export const metadata: Metadata = {
  title: "Teknik Informatika Unhas",
  description: "Portal resmi Teknik Informatika Universitas Hasanuddin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}