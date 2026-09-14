"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingBag, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/referenceData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-transparent text-white z-30">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
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
            const isActive = item.name === "Home" && pathname === "/";
            return (
              <div key={item.name} className="relative flex flex-col items-center">
                <Link
                  href={item.href}
                  className="hover:opacity-90 transition-opacity drop-shadow-sm py-1"
                >
                  {item.name}
                </Link>
                {isActive && (
                  <div className="absolute -bottom-1 w-6 h-[2.5px] bg-black rounded-full" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/appointment"
            className="hidden sm:inline-flex items-center gap-1.5 bg-white text-[#ff5252] text-xs font-bold px-4 py-2 rounded-full shadow-md hover:bg-neutral-100 transition-all whitespace-nowrap"
          >
            <span>Book Appointment</span>
          </Link>

          <Link href="/designs" className="relative text-white hover:opacity-80 transition-opacity p-1.5" aria-label="Favorites">
            <Heart className="w-5 h-5 stroke-[1.8]" />
            <span className="absolute 0 top-0.5 right-0 bg-[#fef08a] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          <Link href="/appointment" className="text-white hover:opacity-80 transition-opacity p-1.5" aria-label="Atelier">
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
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
          <div className="pt-2">
            <Link
              href="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-white text-[#ff5252] py-3 rounded-full font-bold text-sm shadow-md"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
