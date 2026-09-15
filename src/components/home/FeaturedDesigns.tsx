"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import { OCCASION_STYLES } from "@/data/referenceData";

const PAGES = ["01", "02", "03", "04"];
// Triple list for infinite continuous wrapping
const LOOP_ITEMS = [...OCCASION_STYLES, ...OCCASION_STYLES, ...OCCASION_STYLES];

export default function FeaturedDesigns() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isAdjustingRef = useRef(false);
  const [activePage, setActivePage] = useState(0);

  // Helper to compute width of 1 single set of 12 items
  const getSingleSetWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    return el.scrollWidth / 3;
  }, []);

  // Initialize scroll position to middle set
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const singleSet = el.scrollWidth / 3;
    if (singleSet > 0) {
      el.scrollLeft = singleSet;
    }
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || isAdjustingRef.current) return;

    const singleSet = el.scrollWidth / 3;
    if (singleSet <= 0) return;

    const currentLeft = el.scrollLeft;

    // Seamless infinite wrap around boundaries
    if (currentLeft < singleSet * 0.3) {
      isAdjustingRef.current = true;
      el.scrollLeft = currentLeft + singleSet;
      setTimeout(() => {
        isAdjustingRef.current = false;
      }, 50);
      return;
    } else if (currentLeft > singleSet * 1.7) {
      isAdjustingRef.current = true;
      el.scrollLeft = currentLeft - singleSet;
      setTimeout(() => {
        isAdjustingRef.current = false;
      }, 50);
      return;
    }

    // Compute normalized progress (0 to 1) within a single 12-item loop
    const normalized = ((currentLeft % singleSet) + singleSet) % singleSet;
    const progress = normalized / singleSet;
    const page = Math.min(PAGES.length - 1, Math.floor(progress * PAGES.length));
    setActivePage(page);
  };

  const scrollToPage = (pageIndex: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const singleSet = getSingleSetWidth();
    const targetLeft = singleSet + (pageIndex / PAGES.length) * singleSet;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });
    setActivePage(pageIndex);
  };

  const scrollByStep = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const singleSet = getSingleSetWidth();
    const stepAmount = singleSet / 4; // Step by 1 quadrant (3 items)
    el.scrollBy({
      left: direction === "left" ? -stepAmount : stepAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-5">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff7d86] mb-1 block">
              EXPLORE OUR WORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#212529] tracking-tight">
              Made for Every Occasion
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mt-1.5 font-medium">
              From elegant everyday pieces to statement bridal and traditional wear, discover styles that can be personalised to suit you.
            </p>
            <div className="ref-divider !mx-auto md:!mx-0 mt-3">
              <span className="ref-dot" />
              <span className="ref-dot-lg" />
              <span className="ref-dot" />
            </div>
          </div>

          {/* Interactive Navigation: Infinite Loop Arrows + Page Numbers */}
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 shrink-0">
            {/* Prev Arrow (Always active for infinite looping) */}
            <button
              onClick={() => scrollByStep("left")}
              type="button"
              aria-label="Previous occasion styles"
              className="w-9 h-9 rounded-full flex items-center justify-center border bg-white text-neutral-800 border-neutral-300 shadow-sm hover:bg-[#ff7d86] hover:text-white hover:border-[#ff7d86] active:scale-95 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Clickable Page Numbers (01, 02, 03, 04) */}
            <div className="flex items-center gap-4 sm:gap-5 text-sm font-bold tracking-wider">
              {PAGES.map((pageLabel, idx) => {
                const isActive = activePage === idx;
                return (
                  <button
                    key={pageLabel}
                    onClick={() => scrollToPage(idx)}
                    type="button"
                    aria-label={`Go to occasion styles page ${pageLabel}`}
                    className={`relative py-1 transition-colors ${
                      isActive
                        ? "text-[#ff7d86] font-extrabold"
                        : "text-neutral-400 hover:text-neutral-700 font-semibold"
                    }`}
                  >
                    <span>{pageLabel}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff7d86] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next Arrow (Always active for infinite looping) */}
            <button
              onClick={() => scrollByStep("right")}
              type="button"
              aria-label="Next occasion styles"
              className="w-9 h-9 rounded-full flex items-center justify-center border bg-white text-neutral-800 border-neutral-300 shadow-sm hover:bg-[#ff7d86] hover:text-white hover:border-[#ff7d86] active:scale-95 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Infinite Carousel Container */}
        <div className="relative group/carousel">
          {/* Subtle edge fades */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-12 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-12 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrollable track with seamless wrapping */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {LOOP_ITEMS.map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                href="/product-gallery/"
                className="group flex flex-col items-center text-center shrink-0 w-[46%] sm:w-[31%] md:w-[23%] lg:w-[15.4%] snap-start focus:outline-none"
              >
                {/* Image Container with rounded borders */}
                <div className="relative w-full aspect-[18/25] rounded-[24px] overflow-hidden mb-3 shadow-sm bg-[#f4f4f4] transition-all duration-300 group-hover:shadow-md border border-neutral-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>

                <span className="inline-block bg-neutral-100 text-neutral-700 text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-1 group-hover:bg-[#ff7d86] group-hover:text-white transition-colors whitespace-nowrap">
                  {item.categoryTag}
                </span>

                <h3 className="font-extrabold text-sm sm:text-base text-[#212529] group-hover:text-[#ff7d86] transition-colors leading-tight">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Right "VIEW PRODUCT CATALOGUE >" Link */}
        <div className="text-center sm:text-right mt-8 sm:mt-10">
          <Link
            href="/product-gallery/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ff7d86] hover:text-[#e85661] transition-colors uppercase tracking-wider group"
          >
            <span>VIEW PRODUCT CATALOGUE</span>
            <ArrowRight className="w-4 h-4 text-[#ff7d86] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}



