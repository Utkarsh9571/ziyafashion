import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Sparkles, Maximize2, Palette, ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/siteData";

const iconMap = {
  Scissors: Scissors,
  Sparkles: Sparkles,
  Maximize2: Maximize2,
  Palette: Palette,
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e84e4e] font-serif tracking-tight">
            Our Atelier Services
          </h2>
          <div className="ornate-divider">
            <span className="ornate-dot" />
            <span className="ornate-dot-center" />
            <span className="ornate-dot" />
          </div>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto">
            Experience bespoke craftsmanship tailored to your individual style, from custom couture design to precision alterations.
          </p>
        </div>

        {/* 4-Service Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service) => {
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
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#e84e4e] flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Text Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-bold text-xl text-neutral-900 group-hover:text-[#e84e4e] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#e84e4e] uppercase tracking-wider">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/appointment?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#e84e4e] hover:text-[#d83c3c] group-hover:translate-x-1 transition-all"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Footer Link */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white hover:bg-[#e84e4e] px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            <span>Explore All Atelier Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
