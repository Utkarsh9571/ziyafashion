import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AUDIENCE_QUICK_LINKS } from "@/data/referenceData";

export default function CollectionShades() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Centered Heading with reference divider */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ff7d86] tracking-tight">
            Explore Ziya Fashion
          </h2>
          <div className="ref-divider">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
        </div>

        {/* 4 Capsule Cards: Women, Men, Kids, Bespoke */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {AUDIENCE_QUICK_LINKS.map((item) => (
            <div
              key={item.id}
              className={`group relative h-28 sm:h-32 rounded-full overflow-hidden ${item.bgClass} flex items-center justify-between px-5 sm:px-6 shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              {/* Left text & button */}
              <div className="z-10 max-w-[58%] space-y-1.5 sm:space-y-2 text-left">
                <h3 className="font-bold text-base sm:text-lg leading-tight drop-shadow-sm">
                  {item.title}
                </h3>
                <Link
                  href={item.href}
                  className="inline-block bg-white text-[#212529] text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full shadow-sm hover:bg-neutral-100 transition-colors"
                >
                  {item.ctaText}
                </Link>
              </div>

              {/* Right Model image */}
              <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden pointer-events-none">
                <Image
                  src={item.modelImage}
                  alt={item.title}
                  fill
                  className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
