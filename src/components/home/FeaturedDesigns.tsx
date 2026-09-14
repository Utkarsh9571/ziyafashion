import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Plus, ChevronRight } from "lucide-react";
import { TRENDING_ITEMS } from "@/data/referenceData";

export default function FeaturedDesigns() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with 01 02 03 04 on right matching screenshot */}
        <div className="relative flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="mx-auto md:mx-0 md:flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ff5252] tracking-tight text-center">
              Trending a Top Sale
            </h2>
            <div className="ref-divider">
              <span className="ref-dot" />
              <span className="ref-dot-lg" />
              <span className="ref-dot" />
            </div>
          </div>

          {/* Number pagination indicators on right */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wider text-neutral-400 absolute right-0 top-2">
            <span className="text-[#ff5252] border-b-2 border-[#ff5252] pb-0.5">01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
          </div>
        </div>

        {/* 4 Cards Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          {TRENDING_ITEMS.map((item) => {
            const isFeatured = item.isSpotlight;

            return (
              <div key={item.id} className="flex flex-col items-center text-center w-full">
                
                {/* Image Container with rounded borders */}
                <div
                  className={`relative w-full aspect-[3/3.8] rounded-[28px] overflow-hidden mb-4 shadow-sm transition-all duration-300 ${
                    isFeatured ? "bg-[#ff5252] ring-4 ring-[#ff5252]/20" : "bg-[#f4f4f4]"
                  }`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-contain object-bottom hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Hot Badge & Info */}
                {item.badge && (
                  <span className="inline-block bg-[#ff5252] text-white text-[10px] font-bold px-3 py-0.5 rounded-full mb-1">
                    {item.badge}
                  </span>
                )}

                <h3 className="font-extrabold text-base text-[#212529]">
                  {item.title}
                </h3>

                <p className="font-bold text-sm text-[#ff5252] mt-0.5">
                  {item.priceDisplay}
                </p>

                {/* Card 3 action button row matching screenshot */}
                {isFeatured && (
                  <div className="mt-3 flex items-center justify-center">
                    <div className="inline-flex items-center bg-[#ff5252] text-white rounded-full px-4 py-1.5 text-xs font-bold shadow-md gap-2">
                      <span>Add to Cart</span>
                      <Heart className="w-3.5 h-3.5 stroke-[2]" />
                      <div className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center ml-1">
                        <Plus className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Right "See all products >" Link matching Screenshot 090043.png */}
        <div className="text-right mt-10">
          <Link
            href="/designs"
            className="inline-flex items-center gap-1 text-sm font-bold text-[#ff5252] hover:opacity-80 transition-opacity"
          >
            <span>See all products</span>
            <ChevronRight className="w-4 h-4 text-[#ff5252]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
