"use client";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />
      <div className="flex-1 w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
