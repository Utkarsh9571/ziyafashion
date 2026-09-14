"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingBag, Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, VERIFIED_CONTACT_INFO } from "@/data/referenceData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#ff5252]/95 backdrop-blur-md shadow-md py-1"
          : "bg-[#ff5252] py-2 sm:py-2.5"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo with Fashion emblem on the left */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-7 h-7 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white drop-shadow-sm">
              <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
            </svg>
          </div>
          <span className="font-bold text-xl sm:text-2xl tracking-tight font-sans text-white drop-shadow-sm whitespace-nowrap">
            Ziya Fashion
          </span>
        </Link>

        {/* Center Navigation links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[15px] font-medium tracking-normal text-white">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.name} className="relative flex flex-col items-center">
                <Link
                  href={item.href}
                  className="hover:opacity-90 transition-opacity drop-shadow-sm py-1 font-medium"
                >
                  {item.name}
                </Link>
                {isActive && (
                  <div className="absolute -bottom-1 w-6 h-[2.5px] bg-white rounded-full" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={`tel:${VERIFIED_CONTACT_INFO.phone.replace(/\s+/g, "")}`}
            className="hidden sm:inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/30 transition-all whitespace-nowrap"
            aria-label="Call Ziya Fashion"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          <Link
            href="/appointment"
            className="hidden md:inline-flex items-center gap-1.5 bg-white text-[#ff5252] text-xs font-bold px-4 py-2 rounded-full shadow-md hover:bg-neutral-100 transition-all whitespace-nowrap"
          >
            <span>Book Appointment</span>
          </Link>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-1.5 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f03e3e] px-6 py-5 space-y-3 border-t border-white/20 shadow-2xl animate-in slide-in-from-top duration-200">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-2 text-white hover:opacity-80"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            <Link
              href="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-white text-[#ff5252] py-3 rounded-full font-bold text-sm shadow-md"
            >
              Book Appointment
            </Link>
            <a
              href={`tel:${VERIFIED_CONTACT_INFO.phone.replace(/\s+/g, "")}`}
              className="block w-full text-center bg-white/20 text-white py-2.5 rounded-full font-bold text-xs border border-white/30"
            >
              Call {VERIFIED_CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
