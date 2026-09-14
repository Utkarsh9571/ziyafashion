import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Sparkles, Maximize2, Palette, ArrowRight } from "lucide-react";
import { TAILORING_SERVICES } from "@/data/referenceData";

const iconMap = {
  Scissors: Scissors,
  Sparkles: Sparkles,
  Maximize2: Maximize2,
  Palette: Palette,
};

export default function ServicesSection() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden" id="services-section">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Eyebrow, Heading & Description */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff5252] mb-1">
            WHAT WE DO
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Tailoring Services Designed Around You
          </h2>
          <div className="ref-divider">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            From bespoke garments and bridal wear to traditional outfits and professional alterations, we tailor each service around your measurements, style and occasion.
          </p>
        </div>

        {/* 4 Tailoring Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TAILORING_SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Sparkles;
            
            return (
              <div
                key={service.id}
                className="group relative bg-[#f9fafb] rounded-[32px] overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Card Top Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-200">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-[#ff5252] flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Text Body */}
                  <div className="p-5 sm:p-6 space-y-2.5">
                    <h3 className="font-extrabold text-lg sm:text-xl text-[#212529] group-hover:text-[#ff5252] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href={`/appointment?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5252] hover:opacity-80 transition-opacity"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#ff5252] hover:bg-[#f03e3e] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <span>VIEW ALL SERVICES →</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
