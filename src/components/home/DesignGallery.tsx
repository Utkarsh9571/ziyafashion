"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Scissors, Eye, Calendar, X } from "lucide-react";
import { CATEGORY_FILTERS, DESIGN_PORTFOLIO, DesignItem } from "@/data/siteData";

export default function DesignGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null);

  const filteredDesigns = selectedCategory === "all"
    ? DESIGN_PORTFOLIO
    : DESIGN_PORTFOLIO.filter((item) => item.categorySlug === selectedCategory);

  return (
    <section className="py-16 bg-neutral-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e84e4e] font-serif tracking-tight">
            Design Showcase
          </h2>
          <div className="ornate-divider">
            <span className="ornate-dot" />
            <span className="ornate-dot-center" />
            <span className="ornate-dot" />
          </div>
          <p className="text-neutral-500 text-sm max-w-lg mx-auto">
            Browse our design gallery to explore silhouettes, fabrics, and tailored looks. Filter by category to find your inspiration.
          </p>
        </div>

        {/* Icon / Visual Category Filter Tabs inspired by reference */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap mb-12">
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center gap-2 group transition-all p-2 rounded-2xl ${
                  isActive ? "scale-105" : "hover:scale-102 opacity-80 hover:opacity-100"
                }`}
              >
                {/* Round icon button */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all shadow-sm ${
                    isActive
                      ? "bg-[#e84e4e] text-white shadow-md ring-4 ring-[#e84e4e]/20"
                      : "bg-white text-neutral-600 border border-neutral-200 group-hover:border-[#e84e4e] group-hover:text-[#e84e4e]"
                  }`}
                >
                  <Sparkles className={`w-6 h-6 ${isActive ? "text-white" : "text-[#e84e4e]"}`} />
                </div>
                {/* Category label */}
                <span
                  className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                    isActive ? "text-[#e84e4e] border-b-2 border-[#e84e4e] pb-0.5" : "text-neutral-600"
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* 8-Card Showcase Grid with Coral / Rounded Backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              onClick={() => setSelectedDesign(design)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-[#ef5350]"
            >
              {/* Card Image Wrapper */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={design.imageUrl}
                  alt={design.title}
                  fill
                  className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Top Badge Tag */}
                {design.tag && (
                  <span className="absolute top-3 right-3 bg-white/95 text-[#e84e4e] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    {design.tag}
                  </span>
                )}

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Bottom Card Content */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 block">
                    {design.category}
                  </span>
                  <h3 className="font-bold text-base font-serif leading-snug text-white group-hover:text-amber-200 transition-colors">
                    {design.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 font-light">
                    {design.description}
                  </p>

                  {/* View Details Pill Button */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 bg-white text-[#e84e4e] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm group-hover:bg-neutral-100 transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Look</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Dialog for Design Detail (No ecommerce cart / price) */}
        {selectedDesign && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-100">
              
              <button
                onClick={() => setSelectedDesign(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="relative aspect-[3/4] sm:aspect-auto sm:h-full min-h-[300px] bg-neutral-100">
                  <Image
                    src={selectedDesign.imageUrl}
                    alt={selectedDesign.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="inline-block bg-[#ef5350]/10 text-[#ef5350] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedDesign.category}
                    </span>
                    <h3 className="text-2xl font-bold font-serif text-neutral-900 leading-tight">
                      {selectedDesign.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {selectedDesign.description}
                    </p>
                    <div className="pt-2 text-xs text-neutral-500 space-y-1">
                      <p>✨ <strong>Style Code:</strong> {selectedDesign.id.toUpperCase()}</p>
                      <p>✂️ <strong>Tailoring:</strong> Custom measurements & fitting available</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 space-y-3">
                    <Link
                      href={`/appointment?design=${encodeURIComponent(selectedDesign.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#e84e4e] hover:bg-[#d83c3c] text-white py-3 px-5 rounded-full font-bold text-sm shadow-md transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Tailoring for this Look</span>
                    </Link>
                    <button
                      onClick={() => setSelectedDesign(null)}
                      className="w-full text-center text-xs text-neutral-500 hover:text-neutral-800 py-1"
                    >
                      Close Lookbook
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
