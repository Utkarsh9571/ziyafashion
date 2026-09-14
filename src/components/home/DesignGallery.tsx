"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORY_TABS, REFERENCE_PRODUCT_GRID, ProductGridItem } from "@/data/referenceData";
import { Eye, Calendar, X } from "lucide-react";

export default function DesignGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductGridItem | null>(null);

  const filteredGrid = selectedCategory === "all"
    ? REFERENCE_PRODUCT_GRID
    : REFERENCE_PRODUCT_GRID.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden" id="category-section">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Category Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ff5252] tracking-tight">
            Category
          </h2>
          <div className="ref-divider">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
        </div>

        {/* Category Icons Row with touch-friendly smooth horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none">
          <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-10 md:gap-12 min-w-max px-2 mx-auto">
            {CATEGORY_TABS.map((cat) => {
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="flex flex-col items-center gap-2 group transition-all shrink-0"
                >
                  {/* Visual Icon circle */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? "border-2 border-[#ff5252] bg-white shadow-sm scale-105"
                        : "border border-neutral-200 bg-neutral-50 group-hover:border-neutral-300"
                    }`}
                  >
                    {cat.iconName === "all" && (
                      <div className="w-8 h-8 rounded-full border-2 border-[#ff5252] flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#ff5252]" />
                      </div>
                    )}
                    {cat.iconName === "dresses" && (
                      <span className="text-2xl">👗</span>
                    )}
                    {cat.iconName === "tshirts" && (
                      <span className="text-2xl">👚</span>
                    )}
                    {cat.iconName === "denim" && (
                      <span className="text-2xl">👖</span>
                    )}
                    {cat.iconName === "jackets" && (
                      <span className="text-2xl">🧥</span>
                    )}
                    {cat.iconName === "coats" && (
                      <span className="text-2xl">🥼</span>
                    )}
                    {cat.iconName === "shoes" && (
                      <span className="text-2xl">👟</span>
                    )}
                  </div>

                  {/* Label */}
                  <div className="relative flex flex-col items-center">
                    <span
                      className={`text-xs sm:text-sm font-semibold whitespace-nowrap ${
                        isActive ? "text-[#ff5252]" : "text-neutral-700"
                      }`}
                    >
                      {cat.name}
                    </span>
                    {isActive && (
                      <div className="w-5 h-[2.5px] bg-[#ff5252] rounded-full mt-1" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 8-Card Fashion Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredGrid.map((item, index) => {
            const isFeaturedCenter = index === 2; // "Short Party Dress" card representation
            
            return (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                className={`group relative rounded-[28px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-[3/4.2] ${
                  isFeaturedCenter ? "bg-[#333333]" : "bg-[#ff5252]"
                }`}
              >
                {/* Model Photography Image */}
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Top Badge: 20%, New, Sale, Hot */}
                {item.badge && (
                  <span
                    className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 ${
                      item.badge === "20%" || item.badge === "Sale"
                        ? "bg-white text-[#ff5252]"
                        : "bg-[#ff5252] text-white"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Card 3 overlay (Short Party Dress representation) */}
                {isFeaturedCenter ? (
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5 sm:p-6 text-white space-y-1.5 sm:space-y-2 z-10">
                    <span className="inline-block bg-[#ff5252] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full w-max">
                      Hot 💰
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg leading-tight text-white">
                      Short Party Dress
                    </h3>
                    <p className="text-[11px] text-white/90 line-clamp-2">
                      Technical Teffeta Jacquad with jouy Motif
                    </p>
                    <p className="font-bold text-base sm:text-lg text-white">
                      $790.00
                    </p>
                    <div className="pt-1">
                      <span className="inline-block bg-white text-[#ff5252] text-xs font-bold px-5 py-2 rounded-full shadow-md hover:bg-neutral-100 transition-colors">
                        Add to Cart
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Standard Card Hover Overlay */
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white text-[#ff5252] text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Look</span>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Dialog for Design Detail */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-neutral-100 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-full sm:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
                  <Image
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="w-full sm:w-1/2 space-y-4 text-left">
                  <span className="inline-block bg-[#ffebee] text-[#ff5252] text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Design Showcase
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-neutral-900 leading-tight">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {selectedProduct.materialInfo || "Curated bespoke design piece available for custom tailoring and fitting."}
                  </p>
                  
                  <div className="pt-2">
                    <Link
                      href={`/appointment?design=${encodeURIComponent(selectedProduct.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#ff5252] hover:bg-[#f03e3e] text-white py-3 px-5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Tailoring Appointment</span>
                    </Link>
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
