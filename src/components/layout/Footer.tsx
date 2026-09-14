import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import InstagramBar from "./InstagramBar";
import { VERIFIED_CONTACT_INFO } from "@/data/referenceData";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3b4048] text-neutral-300 font-sans overflow-hidden">
      {/* Instagram 5-image mosaic strip */}
      <InstagramBar />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Logo + Description + Social Media Links */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#ff5252]">
                <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
              </svg>
              <span className="font-extrabold text-2xl tracking-tight text-[#ff5252]">
                Ziya Fashion
              </span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed font-normal">
              Singapore&apos;s destination for bespoke tailoring, traditional Indian &amp; Malay attire, bridal couture, and professional alterations. Crafted around your unique measurements.
            </p>

            {/* Social Media Links below logo and description */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/ziyaadmn?igsh=YXJyZnpuMWdiYnls"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#2b2f35] hover:bg-[#ff5252] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-600/50 hover:border-[#ff5252] shadow-sm hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/ziyafashionsingapore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#2b2f35] hover:bg-[#ff5252] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-600/50 hover:border-[#ff5252] shadow-sm hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@MrAnjumjh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-[#2b2f35] hover:bg-[#ff5252] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-600/50 hover:border-[#ff5252] shadow-sm hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Boutique (Navbar links only) */}
          <div className="space-y-4">
            <h3 className="text-[#ff5252] font-bold text-base tracking-wide">
              Boutique
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300 font-medium">
              <li><Link href="/services" className="hover:text-white transition-colors">• Our Services</Link></li>
              <li><Link href="/product-gallery/" className="hover:text-white transition-colors">• Product Catalogue</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">• About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">• Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">• Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h3 className="text-[#ff5252] font-bold text-base tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300 font-medium">
              <li><Link href="/services" className="hover:text-white transition-colors">• Bespoke Tailoring</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">• Bridal &amp; Wedding Wear</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">• Traditional Wear</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">• Alterations &amp; Fittings</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us + Location */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-[#ff5252] font-bold text-base tracking-wide">
                Contact Us
              </h3>
              
              <div className="space-y-2.5 text-xs text-neutral-300 font-medium">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span>
                    {VERIFIED_CONTACT_INFO.addressLine1},<br />
                    {VERIFIED_CONTACT_INFO.addressLine2}
                  </span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <a href="tel:+6583636036" className="hover:text-white transition-colors">
                    {VERIFIED_CONTACT_INFO.phone}
                  </a>
                </div>
                
                <div className="flex items-start gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <p>{VERIFIED_CONTACT_INFO.hoursWeekdays}</p>
                    <p>{VERIFIED_CONTACT_INFO.hoursSunday}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <a href={`mailto:${VERIFIED_CONTACT_INFO.email}`} className="break-all hover:text-white transition-colors">
                    {VERIFIED_CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Pill */}
            <div className="pt-3 flex justify-start">
              <div className="inline-flex items-center gap-2 bg-[#2b2f35] px-3.5 py-1.5 rounded-lg border border-neutral-600 text-xs font-bold text-white shadow-inner">
                <span>SINGAPORE</span>
                <span className="text-sm">🇸🇬</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-neutral-600/60 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-neutral-400">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            Bespoke Tailoring &amp; Custom Fashion in Singapore
          </div>

          <p className="text-neutral-400 text-center sm:text-right">
            © {new Date().getFullYear()} Ziya Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
