import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Mail, ChevronDown } from "lucide-react";
import InstagramBar from "./InstagramBar";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo nulla pariatur.
            </p>

            {/* Contacts list under Column 1 matching Screenshot 090128.png */}
            <div className="space-y-2 pt-2 text-xs text-neutral-300">
              <h4 className="text-[#ff5252] font-bold text-sm mb-2.5">Contacts</h4>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>California - USA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>998-905-764</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Mon - Sun : 24:00 Hours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span className="break-all">info@mycompany.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Catalog */}
          <div className="space-y-4">
            <h3 className="text-[#ff5252] font-bold text-base tracking-wide">
              Catalog
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">• Home</Link></li>
              <li><Link href="/designs" className="hover:text-white transition-colors">• Shope</Link></li>
              <li><Link href="/#deals" className="hover:text-white transition-colors">• Deals</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">• About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">• Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">• Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div className="space-y-4">
            <h3 className="text-[#ff5252] font-bold text-base tracking-wide">
              Information
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300 font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">• About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">• Our Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">• FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">• Contacts</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">• Terms & Condition</Link></li>
              <li><Link href="/appointment" className="hover:text-white transition-colors">• Refund and Returns Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Your Account & Country Dropdown */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-[#ff5252] font-bold text-base tracking-wide">
                Your Account
              </h3>
              <ul className="space-y-2 text-xs text-neutral-300 font-medium">
                <li><Link href="/appointment" className="hover:text-white transition-colors">• My Account</Link></li>
                <li><Link href="/designs" className="hover:text-white transition-colors">• Wishlist</Link></li>
                <li><Link href="/appointment" className="hover:text-white transition-colors">• Cart</Link></li>
                <li><Link href="/appointment" className="hover:text-white transition-colors">• Checkout</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">• Maintenace Mode</Link></li>
                <li><Link href="/appointment" className="hover:text-white transition-colors">• Sign up</Link></li>
              </ul>
            </div>

            {/* Country Selector Pill matching Screenshot 090128.png */}
            <div className="pt-4 flex justify-start sm:justify-end">
              <div className="inline-flex items-center gap-2 bg-[#2b2f35] px-3.5 py-1.5 rounded-lg border border-neutral-600 text-xs font-bold text-white shadow-inner">
                <span>INDIA</span>
                <span className="text-sm">🇮🇳</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Socials, Payment Icons, and Copyright */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-neutral-600/60 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-neutral-400">
          
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#2b2f35] flex items-center justify-center text-white text-xs hover:bg-[#ff5252] transition-colors cursor-pointer">
              📷
            </span>
            <span className="w-8 h-8 rounded-full bg-[#2b2f35] flex items-center justify-center text-white text-xs hover:bg-[#ff5252] transition-colors cursor-pointer">
              f
            </span>
            <span className="w-8 h-8 rounded-full bg-[#2b2f35] flex items-center justify-center text-white text-xs hover:bg-[#ff5252] transition-colors cursor-pointer">
              🐦
            </span>
            <span className="w-8 h-8 rounded-full bg-[#2b2f35] flex items-center justify-center text-white text-xs hover:bg-[#ff5252] transition-colors cursor-pointer">
              💬
            </span>
          </div>

          {/* Payment Card Badges matching Screenshot 090128.png */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span className="bg-white text-blue-700 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">VISA</span>
            <span className="bg-white text-red-600 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">MasterCard</span>
            <span className="bg-white text-blue-900 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">PayPal</span>
            <span className="bg-white text-purple-700 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">Skrill</span>
            <span className="bg-white text-red-500 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">Maestro</span>
            <span className="bg-white text-blue-600 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">Visa Electron</span>
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
