import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { FEATURED_TRENDS } from "@/data/siteData";

export default function FeaturedDesigns() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with numbers on right inspired by reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e84e4e] font-serif tracking-tight">
              Trending Atelier Creations
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-8 h-0.5 bg-[#e84e4e]" />
              <span className="w-2 h-2 rounded-full bg-[#e84e4e]" />
              <span className="w-8 h-0.5 bg-[#e84e4e]" />
            </div>
          </div>

          {/* Number pagination indicators inspired by reference screenshot */}
          <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-neutral-400">
            <span className="text-[#e84e4e] border-b border-[#e84e4e] pb-0.5">01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
          </div>
        </div>

        {/* 4 Spotlight Design Cards with Distinct Visual Treatments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_TRENDS.map((item, index) => (
            <div
              key={item.id}
              className={`group rounded-3xl p-4 transition-all duration-300 hover:shadow-xl ${
                item.isCoralBg
                  ? "bg-[#e84e4e] text-white shadow-md transform -translate-y-2"
                  : "bg-white text-neutral-900 border border-neutral-200/80 shadow-sm"
              }`}
            >
              {/* Card Image Container with rounded borders */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                {item.tag && (
                  <span className="absolute top-3 left-3 bg-white text-[#e84e4e] text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Title & Info (No Price, purely showcase) */}
              <div className="space-y-1.5 px-1">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider ${
                    item.isCoralBg ? "text-white/80" : "text-[#e84e4e]"
                  }`}
                >
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-base leading-snug">
                  {item.title}
                </h3>
                <p
                  className={`text-xs line-clamp-2 ${
                    item.isCoralBg ? "text-white/85" : "text-neutral-500"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-4 pt-3 border-t border-neutral-200/40">
                <Link
                  href={`/appointment?design=${encodeURIComponent(item.title)}`}
                  className={`w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold py-2 px-3 rounded-full transition-all ${
                    item.isCoralBg
                      ? "bg-white text-[#e84e4e] hover:bg-neutral-100"
                      : "bg-[#e84e4e] text-white hover:bg-[#d83c3c]"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Request Custom Fit</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA Link on Right */}
        <div className="text-right mt-8">
          <Link
            href="/designs"
            className="inline-flex items-center gap-1 text-sm font-bold text-[#e84e4e] hover:text-[#d83c3c] transition-colors"
          >
            <span>See all showcase designs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
