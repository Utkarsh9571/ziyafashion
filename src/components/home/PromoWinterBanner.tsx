import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromoWinterBanner() {
  return (
    <section className="w-full bg-[#ff5252] text-white py-10 sm:py-14 lg:py-16 overflow-hidden my-8 sm:my-12">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & CTA */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left z-10">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-white/95 uppercase">
              Grab it Fast
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-extrabold tracking-tight leading-[1.1] text-white">
              Winter Sale <br />
              Discount up 70% – 80%
            </h2>

            <div className="pt-2 sm:pt-3">
              <Link
                href="/designs"
                className="inline-flex items-center gap-3 bg-white text-[#ff5252] hover:bg-neutral-50 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Start Shopping</span>
                <div className="w-6 h-6 rounded-full bg-[#ff5252] text-white flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Model Photo with Circle Graphics and Wow emojis */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            
            {/* Background layered circles matching screenshot */}
            <div className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-40 sm:w-48 h-40 sm:h-48 rounded-full bg-[#e53e3e]/70 pointer-events-none" />
            <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-48 sm:w-56 h-48 sm:h-56 rounded-full bg-[#e89b38]/40 pointer-events-none" />

            {/* Model Cutout Image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
              <Image
                src="/images/home/winter-promo-banner.jpg"
                alt="Winter Sale Fashion Model"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 30vw"
              />
            </div>

            {/* Reaction Pill Badge (Like, Wow, Heart) */}
            <div className="absolute bottom-4 sm:bottom-6 left-2 sm:left-10 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-white/40 z-10">
              <span className="text-[9px] font-bold text-neutral-800 uppercase mr-1">wow</span>
              <span className="text-sm">👍</span>
              <span className="text-sm">😮</span>
              <span className="text-sm">❤️</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
