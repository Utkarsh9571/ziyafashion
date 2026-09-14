import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { PLACEHOLDER_TESTIMONIALS } from "@/data/siteData";

export default function Testimonials() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with decorative divider */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e84e4e] font-serif tracking-tight">
            What Our Clients Say
          </h2>
          <div className="ornate-divider">
            <span className="ornate-dot" />
            <span className="ornate-dot-center" />
            <span className="ornate-dot" />
          </div>
          <p className="text-neutral-500 text-xs sm:text-sm max-w-lg mx-auto">
            (Placeholder customer experiences to demonstrate layout until authentic testimonials are supplied)
          </p>
        </div>

        {/* 3 Testimonial Cards inspired by reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLACEHOLDER_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200/70 hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              {/* Top Client info header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-neutral-200 shrink-0 border-2 border-[#e84e4e]/20">
                  <Image
                    src={t.avatarUrl}
                    alt={t.clientName}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#e84e4e] uppercase tracking-wider block">
                    Client Review
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400 my-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <h3 className="font-bold text-sm font-serif text-neutral-900">
                    {t.clientName}
                  </h3>
                  <p className="text-[11px] text-neutral-500">
                    {t.occasion}
                  </p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic border-t border-neutral-100 pt-3">
                “{t.comment}”
              </p>

              {/* Bottom pill highlight */}
              <div className="mt-4 pt-2 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Verified Atelier Experience</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e84e4e]" />
          <span className="w-2 h-2 rounded-full bg-neutral-300" />
          <span className="w-2 h-2 rounded-full bg-neutral-300" />
        </div>

      </div>
    </section>
  );
}
