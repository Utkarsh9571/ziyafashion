import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BrandBanner() {
  return (
    <section className="w-full bg-[#ff5252] text-white py-10 sm:py-14 lg:py-16 overflow-hidden my-8 sm:my-12">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Messaging Area */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Bespoke Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-extrabold tracking-tight leading-[1.1] text-white">
              Crafted Around You
            </h2>

            <p className="text-white/95 text-xs sm:text-sm md:text-base max-w-xl font-normal leading-relaxed">
              From custom-made garments to traditional and bridal wear, Ziya Fashion brings together personal fitting, thoughtful design and skilled tailoring to create pieces made for the individual.
            </p>

            <div className="pt-2 sm:pt-3">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-3 bg-white text-[#ff5252] hover:bg-neutral-50 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>BOOK AN APPOINTMENT</span>
                <div className="w-6 h-6 rounded-full bg-[#ff5252] text-white flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Model Photo */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            {/* Background layered decorative elements */}
            <div className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-40 sm:w-48 h-40 sm:h-48 rounded-full bg-[#e53e3e]/70 pointer-events-none" />
            <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-48 sm:w-56 h-48 sm:h-56 rounded-full bg-[#e89b38]/40 pointer-events-none" />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
              <Image
                src="/images/home/brand-banner-craftsman.jpg"
                alt="Ziya Fashion Bespoke Tailoring"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 30vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
