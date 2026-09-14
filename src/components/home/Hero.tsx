import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "../layout/Header";

export default function Hero() {
  return (
    <section className="w-full bg-[#ff5252] text-white overflow-hidden relative">
      {/* Full-width Top Navigation Header */}
      <Header />

      {/* Internal Constrained Content Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography and Action Elements */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left z-10">
            
            {/* Eyebrow Label */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/95 uppercase">
              THE ZIYA EXPERIENCE
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[56px] xl:text-[62px] font-extrabold tracking-tight leading-[1.1] text-white">
              Singapore&apos;s Destination for Bespoke Tailoring & Timeless Style
            </h1>

            {/* Supporting Text */}
            <p className="text-xs sm:text-sm md:text-base text-white/95 font-medium max-w-lg leading-relaxed">
              Custom-made garments designed around your measurements, style and occasion, crafted with care from consultation to final fitting.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#ff5252] hover:bg-neutral-50 px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 whitespace-nowrap uppercase tracking-wider"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 text-[#ff5252]" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm border border-white/30 transition-all uppercase tracking-wider whitespace-nowrap"
              >
                <span>OUR SERVICES</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Model Portrait framed with circular disk cutout */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            {/* Big circular background disc */}
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] xl:w-[500px] xl:h-[500px] rounded-full bg-[#ff7676] overflow-hidden flex items-end justify-center shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
                alt="Ziya Fashion Bespoke Tailoring Model"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 90vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
