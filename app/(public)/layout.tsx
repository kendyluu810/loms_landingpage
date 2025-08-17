"use client";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-full h-screen flex flex-col">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
