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
          
          {/* Column 1: Brand Logo + Description + Contacts */}
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

            {/* Contacts list under Column 1 */}
            <div className="space-y-2 pt-2 text-xs text-neutral-300">
              <h4 className="text-[#ff5252] font-bold text-sm mb-2.5">Contact Us</h4>
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

          {/* Column 2: Collections */}
          <div className="space-y-4">
            <h3 className="text-[#ff5252] font-bold text-base tracking-wide">
              Collections
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300 font-medium">
              <li><Link href="/designs" className="hover:text-white transition-colors">• Indo-Western Collection</Link></li>
              <li><Link href="/designs" className="hover:text-white transition-colors">• Pakistani Collection</Link></li>
              <li><Link href="/designs" className="hover:text-white transition-colors">• Signature Collection</Link></li>
              <li><Link href="/designs" className="hover:text-white transition-colors">• Women&apos;s Wear</Link></li>
              <li><Link href="/designs" className="hover:text-white transition-colors">• Men&apos;s Wear</Link></li>
              <li><Link href="/designs" className="hover:text-white transition-colors">• Kids&apos; Wear</Link></li>
            </ul>
          </div>

          {/* Column 3: Tailoring Services */}
          <div className="space-y-4">
            <h3 className="text-[#ff5252] font-bold text-base tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300 font-medium">
              <li><Link href="/services" className="hover:text-white transition-colors">• Alterations &amp; Fittings</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">• Women&apos;s Tailoring</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">• Bridal Wear</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">• Indian &amp; Malay Wear</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">• Bespoke Consultation</Link></li>
              <li><Link href="/appointment" className="hover:text-white transition-colors">• Book an Appointment</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Location */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-[#ff5252] font-bold text-base tracking-wide">
                Boutique
              </h3>
              <ul className="space-y-2 text-xs text-neutral-300 font-medium">
                <li><Link href="/" className="hover:text-white transition-colors">• Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">• About Ziya Fashion</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">• Tailoring Process</Link></li>
                <li><Link href="/designs" className="hover:text-white transition-colors">• Style Showcase</Link></li>
                <li><Link href="/appointment" className="hover:text-white transition-colors">• Schedule Fitting</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">• Store Location</Link></li>
              </ul>
            </div>

            {/* Location Pill */}
            <div className="pt-4 flex justify-start sm:justify-end">
              <div className="inline-flex items-center gap-2 bg-[#2b2f35] px-3.5 py-1.5 rounded-lg border border-neutral-600 text-xs font-bold text-white shadow-inner">
                <span>SINGAPORE</span>
                <span className="text-sm">🇸🇬</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Socials and Copyright */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-neutral-600/60 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-neutral-400">
          
          {/* Tagline */}
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            Bespoke Tailoring &amp; Custom Fashion in Singapore
          </div>

          {/* Copyright */}
          <p className="text-neutral-400 text-center sm:text-right">
            © {new Date().getFullYear()} Ziya Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

