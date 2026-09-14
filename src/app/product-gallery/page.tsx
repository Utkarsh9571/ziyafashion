import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PRODUCT_CATALOGUE_ITEMS, CATALOGUE_BENEFITS } from "@/data/referenceData";
import { Scissors, Palette, Sparkles, ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalogue — Ziya Fashion Singapore",
  description:
    "Explore our tailoring services and bespoke garments: bridal lehengas, suits, baju kahwin, jubah, sarees, kurung, abayas, and alterations.",
};

const benefitIcons = {
  Scissors: Scissors,
  Palette: Palette,
  Sparkles: Sparkles,
};

export default function ProductCataloguePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* 1. Full-Width Hero */}
      <section className="w-full bg-[#ff5252] text-white">
        <Header />
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-16 sm:pb-20 text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-white/95 uppercase mb-2 block">
            OUR PRODUCT CATALOGUE
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Explore Our Tailoring Services
          </h1>
          <p className="mt-4 text-xs sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed">
            From bridal and traditional wear to tailored suits and professional alterations, explore the garments and tailoring services available at Ziya Fashion.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-white text-[#ff5252] hover:bg-neutral-50 px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK AN APPOINTMENT</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Intro / Benefits: 3 Features Layout */}
      <section className="w-full py-12 sm:py-16 bg-[#f9fafb] border-b border-neutral-200/80">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATALOGUE_BENEFITS.map((benefit, index) => {
              const IconComp = benefitIcons[benefit.iconName as keyof typeof benefitIcons] || CheckCircle2;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[28px] p-6 sm:p-8 border border-neutral-200/70 shadow-sm flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ff5252]/10 text-[#ff5252] flex items-center justify-center mb-1">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-[#212529]">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Catalogue Grid: 12 Exact Tailoring Entries (3-Column Grid) */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5252] mb-1 block">
            TAILORING OFFERINGS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#212529] tracking-tight">
            Our Garment &amp; Tailoring Catalogue
          </h2>
          <div className="ref-divider">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRODUCT_CATALOGUE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[32px] overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[3/3.8] w-full overflow-hidden bg-[#f4f4f4]">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-neutral-900 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {item.itemNumber}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#ff5252] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-2">
                  <h3 className="font-extrabold text-xl text-[#212529] group-hover:text-[#ff5252] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5252] hover:text-[#e04545] transition-colors uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  <span>{item.ctaText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Book Appointment */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#ff5252] via-[#ff5f5f] to-[#ff7373] text-white rounded-[32px] p-8 sm:p-12 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Need a Custom Design or Measurement?
          </h3>
          <p className="mt-2 text-xs sm:text-base text-white/95 max-w-xl mx-auto">
            Book an appointment with our Singapore boutique team to discuss your bespoke garment, fabrics, and personalized fitting.
          </p>
          <div className="mt-6">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-white text-[#ff5252] hover:bg-neutral-50 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
