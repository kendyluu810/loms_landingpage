"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { menuItems } from "../menuItem";
import { usePathname } from "next/navigation";

const underlineHover =
  "bg-transparent text-lg font-medium hover:text-green-600 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed bg-white shadow-md text-black"
          : "absolute bg-transparent text-white"
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/kflv.jpg" alt="Logo" width={107} height={60} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, idx) => {
            const isParentActive = item.children?.some(
              (child) => child.href === pathname
            );
            const isActive = pathname === item.href || isParentActive;

            return (
              <li key={idx} className="relative">
                {item.children ? (
                  <div className="group relative">
                    <button
                      className={`${underlineHover} ${
                        isActive
                          ? "border-b-2 border-green-500 text-green-600"
                          : ""
                      }`}
                    >
                      {item.label}
                    </button>
                    <div className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 top-full mt-2 bg-white text-black shadow-lg rounded-md z-50">
                      <ul className="py-2 min-w-[200px]">
                        {item.children.map((child, cidx) => (
                          <li key={cidx}>
                            <Link
                              href={child.href}
                              className={`block px-4 py-2 hover:bg-gray-100 ${
                                pathname === child.href
                                  ? "text-green-600 font-medium"
                                  : ""
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className={`${underlineHover} ${
                      isActive
                        ? "border-b-2 border-green-500 text-green-600"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <Search className="h-5 w-5 text-gray-600" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Lang */}
          <div className="hidden md:flex items-center space-x-2 text-sm font-medium">
            <button className="hover:text-green-600 transition">VI</button>
            <span>|</span>
            <button className="hover:text-green-600 transition">EN</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white text-black shadow-lg">
          <ul className="flex flex-col p-4 space-y-3">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                {item.children ? (
                  <details>
                    <summary className="cursor-pointer font-medium">
                      {item.label}
                    </summary>
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.children.map((child, cidx) => (
                        <li key={cidx}>
                          <Link href={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href!}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
