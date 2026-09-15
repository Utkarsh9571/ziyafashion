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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff7d86] mb-1 block">
              EXPLORE OUR WORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight">
              Made for Every Occasion
            </h2>
            <p className="text-sm text-neutral-600 max-w-2xl mt-1.5 font-medium">
              From elegant everyday pieces to statement bridal and traditional wear, discover styles that can be personalised to suit you.
            </p>
            <div className="ref-divider !mx-0 mt-3">
              <span className="ref-dot" />
              <span className="ref-dot-lg" />
              <span className="ref-dot" />
            </div>
          </div>

          {/* Indicators on right */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wider text-neutral-400 absolute right-0 top-2">
            <span className="text-[#ff7d86] border-b-2 border-[#ff7d86] pb-0.5">01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
          </div>
        </div>

        {/* 6 Cards Grid: 1 col on mobile, 2 col on tablet, 3-6 col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-start">
          {OCCASION_STYLES.map((item) => {
            return (
              <Link
                key={item.id}
                href="/product-gallery/"
                className="group flex flex-col items-center text-center w-full focus:outline-none"
              >
                {/* Image Container with rounded borders */}
                <div className="relative w-full aspect-[3/3.8] rounded-[24px] overflow-hidden mb-3 shadow-sm bg-[#f4f4f4] transition-all duration-300 group-hover:shadow-md">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>

                <span className="inline-block bg-neutral-100 text-neutral-700 text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-1 group-hover:bg-[#ff7d86] group-hover:text-white transition-colors">
                  {item.categoryTag}
                </span>

                <h3 className="font-extrabold text-sm sm:text-base text-[#212529] group-hover:text-[#ff7d86] transition-colors leading-tight">
                  {item.title}
                </h3>
              </Link>
            );
          })}
        </div>

        {/* Bottom Right "VIEW PRODUCT CATALOGUE >" Link */}
        <div className="text-center sm:text-right mt-10">
          <Link
            href="/product-gallery/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ff7d86] hover:opacity-80 transition-opacity uppercase tracking-wider"
          >
            <span>VIEW PRODUCT CATALOGUE</span>
            <ChevronRight className="w-4 h-4 text-[#ff7d86]" />
          </Link>
        </div>

      </div>
    </section>
  );
}

