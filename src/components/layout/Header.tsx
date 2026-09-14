"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Sparkles } from "lucide-react";
import { NAV_LINKS } from "@/data/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#e84e4e] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-wide uppercase font-serif text-white">
                Ziya Fashion
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/80 font-sans font-medium -mt-1">
                Atelier & Couture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-all relative py-1 ${
                    isActive
                      ? "text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-white text-[#e84e4e] px-5 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-sm hover:bg-white/95 hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/appointment"
              className="bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              aria-label="Book Appointment"
            >
              <Calendar className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#dc4242] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-white text-[#e84e4e] font-bold shadow-sm"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-white text-[#e84e4e] px-5 py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
