import React from "react";
import Image from "next/image";
import { REFERENCE_TESTIMONIALS } from "@/data/referenceData";

export default function Testimonials() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ff5252] tracking-tight uppercase">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 font-medium">
            We&apos;re proud to create beautifully tailored pieces and experiences for our customers.
          </p>
          <div className="ref-divider mt-3">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
        </div>

        {/* 3 Review Cards matching Screenshot 090104.png (1 col on mobile, 2 col on tablet, 3 col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REFERENCE_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#f4f4f4] rounded-[34px] p-5 sm:p-6 shadow-sm border border-neutral-100 flex flex-col justify-between"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Square Avatar with warm background badge */}
                <div className="relative w-16 sm:w-20 h-20 sm:h-24 rounded-2xl overflow-hidden bg-neutral-200 shrink-0 border border-neutral-300">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 25vw, 15vw"
                  />
                </div>

                {/* Review details */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-neutral-800 uppercase tracking-wide truncate">
                      {item.role}
                    </span>
                    <span className="w-6 sm:w-8 h-[1px] bg-neutral-400 shrink-0" />
                  </div>
                  
                  <p className="text-[11px] text-neutral-600 leading-relaxed line-clamp-4">
                    • {item.text}
                  </p>
                </div>
              </div>

              {/* Red pill with client name at the bottom */}
              <div className="mt-4 pt-2 flex justify-start">
                <span className="inline-block bg-[#ff5252] text-white text-[10px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel pagination indicator dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          <span className="w-2 h-2 rounded-full bg-neutral-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5252]" />
          <span className="w-2 h-2 rounded-full bg-neutral-300" />
        </div>

      </div>
    </section>
  );
}
