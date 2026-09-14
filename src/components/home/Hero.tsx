"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceSelectDropdown from "@/components/common/ServiceSelectDropdown";

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] bg-gradient-to-r from-[#ff4d4d] via-[#ff5858] to-[#ff4d4d] text-white flex flex-col justify-end relative overflow-hidden">
      {/* Constrained Content Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 lg:pt-6 pb-0 h-full flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-end">
          
          {/* Left Column: Typography, Interactive Bar & Social Proof */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 text-left z-10 flex flex-col justify-center py-8 sm:py-12 lg:py-14">
            
            {/* Eyebrow Label */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/95 uppercase">
              Exclusive Bespoke Tailoring in Singapore
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-[52px] lg:text-[54px] xl:text-[64px] font-extrabold tracking-tight leading-[1.08] text-white">
              Stylish Female &amp; Custom Clothes
            </h1>

            {/* Supporting Text */}
            <p className="text-xs sm:text-sm md:text-base text-white/95 font-medium max-w-lg leading-relaxed">
              Made with exceptional craftsmanship, precision fitting, and premium fabrics tailored around your unique style and occasion.
            </p>

            {/* 1. CTA Buttons Row + Pill Dropdown */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#ff5252] hover:bg-neutral-50 px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 uppercase tracking-wider whitespace-nowrap"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 text-[#ff5252]" />
              </Link>

              {/* Compact Pill-shaped Dropdown next to primary CTA */}
              <ServiceSelectDropdown redirectPrefix="/services" />

              <Link
                href="/product-gallery/"
                className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm border border-white/30 transition-all uppercase tracking-wider whitespace-nowrap"
              >
                <span>PRODUCT CATALOGUE</span>
              </Link>
            </div>

            {/* 2. "Our Happy Customers" Trust Strip */}
            <div className="pt-2 flex items-center gap-3.5">
              <div className="flex -space-x-2.5 shrink-0">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src="/images/home/hero-avatar-1.jpg"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src="/images/home/hero-avatar-2.jpg"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src="/images/home/hero-avatar-3.jpg"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-xs text-white/95 font-medium flex items-center gap-2">
                <span className="font-bold">Our Happy Customers</span>
                <span className="text-white/60">•</span>
                <span className="text-yellow-300 font-semibold tracking-tighter">★★★★★</span>
                <span className="font-semibold">4.9 (500+ Tailored Creations)</span>
              </div>
            </div>

            {/* 3. One-line Prompt */}
            <div className="text-xs sm:text-sm text-white/95 font-medium pt-1">
              <span>First time here? </span>
              <Link
                href="/appointment"
                className="font-bold underline underline-offset-4 text-white hover:text-white/80 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>

          </div>

          {/* Right Column: Large Circle Backdrop (NOT a clip mask) + Cutout Subject Breaking Frame */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-end w-full h-[380px] sm:h-[500px] md:h-[580px] lg:h-[640px] xl:h-[700px] 2xl:h-[760px]">
            
            {/* 1. Backdrop Circle: Pure background shape, NOT a clipping mask */}
            <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-2 xl:right-6 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] xl:w-[580px] xl:h-[580px] 2xl:w-[640px] 2xl:h-[640px] rounded-full bg-[#ff7b7b]/90 shadow-2xl z-0 pointer-events-none" />

            {/* 2. Cutout photo: subject silhouette overflowing the circle and bleeding to the bottom edge */}
            <div className="relative z-10 w-[300px] h-[380px] sm:w-[420px] sm:h-[500px] md:w-[480px] md:h-[580px] lg:w-[540px] lg:h-[640px] xl:w-[600px] xl:h-[700px] 2xl:w-[660px] 2xl:h-[760px] flex items-end justify-center">
              <Image
                src="/images/hero-cutout-reference-model.png"
                alt="Ziya Fashion Bespoke Tailoring"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl select-none"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
