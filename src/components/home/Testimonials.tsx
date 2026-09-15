import React from "react";
import Image from "next/image";
import { REFERENCE_TESTIMONIALS } from "@/data/referenceData";

export default function Testimonials() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f4f5f0] overflow-hidden border-t border-neutral-200/50">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#ff7d86] tracking-tight uppercase">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2.5 font-medium">
            We&apos;re proud to create beautifully tailored pieces and experiences for our customers.
          </p>
          <div className="ref-divider mt-3.5">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
        </div>

        {/* 3 Review Cards matching Reference Layout with compact, proportionate size */}
        <div className="max-w-4xl lg:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {REFERENCE_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between h-full group"
            >
              <div>
                {/* 1. Customer Image (Compact balanced portrait aspect) */}
                <div className="relative w-full aspect-[4/5] max-w-[240px] sm:max-w-[260px] lg:max-w-[280px] mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, 280px"
                  />
                </div>

                {/* 2. 5 Star Gold Rating */}
                <div className="flex justify-center items-center gap-1 text-[#eab308] text-xs sm:text-sm mt-3.5 mb-2 select-none">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                {/* 3. Testimonial Quote Text */}
                <p className="text-center text-xs sm:text-[12.5px] text-neutral-600 italic leading-relaxed px-2 font-normal max-w-[300px] mx-auto">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* 4. Customer Location / Attribution */}
              <div className="mt-3.5 text-center">
                <span className="inline-block text-sm sm:text-base font-serif text-[#2f4858] font-medium tracking-normal">
                  — {item.name}, {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel pagination indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-12 sm:mt-14">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <span className="w-3 h-3 rounded-full bg-[#ff7d86]" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        </div>

      </div>
    </section>
  );
}
