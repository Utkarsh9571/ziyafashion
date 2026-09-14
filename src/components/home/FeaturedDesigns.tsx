import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { OCCASION_STYLES } from "@/data/referenceData";

export default function FeaturedDesigns() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="relative flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="mx-auto md:mx-0 md:flex-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5252] mb-1 block">
              OUR STYLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight">
              Designed for Every Occasion
            </h2>
            <p className="text-sm text-neutral-600 max-w-2xl mt-1.5 font-medium">
              From everyday elegance to bridal and traditional wear, explore styles that can be adapted to your fit, occasion and personal taste.
            </p>
            <div className="ref-divider !mx-0 mt-3">
              <span className="ref-dot" />
              <span className="ref-dot-lg" />
              <span className="ref-dot" />
            </div>
          </div>

          {/* Indicators on right */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wider text-neutral-400 absolute right-0 top-2">
            <span className="text-[#ff5252] border-b-2 border-[#ff5252] pb-0.5">01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
          </div>
        </div>

        {/* 4 Cards Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {OCCASION_STYLES.map((item) => {
            return (
              <Link
                key={item.id}
                href="/designs"
                className="group flex flex-col items-center text-center w-full focus:outline-none"
              >
                {/* Image Container with rounded borders */}
                <div className="relative w-full aspect-[3/3.8] rounded-[28px] overflow-hidden mb-4 shadow-sm bg-[#f4f4f4] transition-all duration-300 group-hover:shadow-md">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <span className="inline-block bg-neutral-100 text-neutral-700 text-[11px] font-semibold px-3 py-0.5 rounded-full mb-1 group-hover:bg-[#ff5252] group-hover:text-white transition-colors">
                  {item.categoryTag}
                </span>

                <h3 className="font-extrabold text-base text-[#212529] group-hover:text-[#ff5252] transition-colors">
                  {item.title}
                </h3>
              </Link>
            );
          })}
        </div>

        {/* Bottom Right "Explore all styles >" Link */}
        <div className="text-right mt-10">
          <Link
            href="/designs"
            className="inline-flex items-center gap-1 text-sm font-bold text-[#ff5252] hover:opacity-80 transition-opacity"
          >
            <span>Explore all styles</span>
            <ChevronRight className="w-4 h-4 text-[#ff5252]" />
          </Link>
        </div>

      </div>
    </section>
  );
}

