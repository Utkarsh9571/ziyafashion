import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, Clock, Camera, Globe, MessageCircle } from "lucide-react";
import { BRAND_CONTACT_INFO, NAV_LINKS, SERVICES_DATA } from "@/data/siteData";
import InstagramBar from "./InstagramBar";

export default function Footer() {
  return (
    <footer className="bg-[#24292e] text-neutral-300">
      {/* Instagram mosaic preview */}
      <InstagramBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#e84e4e] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-2xl tracking-wide uppercase font-serif text-white">
                Ziya Fashion
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              A bespoke fashion house and custom tailoring studio dedicated to thoughtful silhouettes, handcrafted precision, and personalized design.
            </p>
            <div className="pt-2">
              <Link
                href="/appointment"
                className="inline-block bg-[#e84e4e] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d83c3c] transition-all"
              >
                Book An Atelier Visit
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase font-serif border-b border-neutral-700 pb-2 inline-block">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-[#e84e4e] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#e84e4e] text-xs">▪</span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/appointment"
                  className="text-neutral-400 hover:text-[#e84e4e] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#e84e4e] text-xs">▪</span>
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase font-serif border-b border-neutral-700 pb-2 inline-block">
              Atelier Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href="/services"
                    className="text-neutral-400 hover:text-[#e84e4e] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#e84e4e] text-xs">▪</span>
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Atelier Details */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase font-serif border-b border-neutral-700 pb-2 inline-block">
              Atelier Location
            </h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#e84e4e] shrink-0 mt-1" />
                <span>{BRAND_CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#e84e4e] shrink-0" />
                <span>{BRAND_CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#e84e4e] shrink-0" />
                <span>{BRAND_CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#e84e4e] shrink-0" />
                <span>{BRAND_CONTACT_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Socials */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-4">
            <a
              href={BRAND_CONTACT_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-[#e84e4e] hover:bg-neutral-700 transition-all"
              aria-label="Instagram"
            >
              <Camera className="w-4 h-4" />
            </a>
            <a
              href={BRAND_CONTACT_INFO.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-[#e84e4e] hover:bg-neutral-700 transition-all"
              aria-label="Facebook"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={BRAND_CONTACT_INFO.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-[#e84e4e] hover:bg-neutral-700 transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} Ziya Fashion. All rights reserved. Bespoke fashion & design showcase.
          </p>
        </div>
      </div>
    </footer>
  );
}
