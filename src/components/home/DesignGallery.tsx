"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MAIN_COLLECTIONS, CollectionFeature } from "@/data/referenceData";
import { Eye, Calendar, X, ArrowRight } from "lucide-react";

export default function DesignGallery() {
  const [selectedCollection, setSelectedCollection] = useState<CollectionFeature | null>(null);

  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden" id="collections-section">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Eyebrow, Heading & Description */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff5252] mb-1">
            OUR COLLECTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Styles with a Personal Touch
          </h2>
          <div className="ref-divider">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Explore distinctive styles that bring together traditional influences, contemporary design and personalised tailoring.
          </p>
        </div>

        {/* 3 Featured Collection Cards: Indo-Western, Pakistani, Signature */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {MAIN_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => setSelectedCollection(col)}
              className="group relative rounded-[28px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-[#ff5252] flex flex-col justify-end aspect-[3/4.2]"
            >
              {/* Image */}
              <Image
                src={col.imageUrl}
                alt={col.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity" />

              {/* Card Content */}
              <div className="relative z-10 p-6 sm:p-7 text-white space-y-2">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {col.category}
                </span>
                <h3 className="font-extrabold text-xl sm:text-2xl leading-tight text-white">
                  {col.title}
                </h3>
                <p className="text-xs text-white/90 leading-relaxed line-clamp-3 font-normal">
                  {col.description}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 bg-white text-[#ff5252] text-xs font-bold px-4 py-2 rounded-full shadow-md group-hover:bg-neutral-100 transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Collection</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Primary CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/product-gallery/"
            className="inline-flex items-center gap-2 bg-[#ff5252] hover:bg-[#f03e3e] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>VIEW PRODUCT CATALOGUE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Modal Dialog for Collection Detail */}
        {selectedCollection && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-neutral-100 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedCollection(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-full sm:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
                  <Image
                    src={selectedCollection.imageUrl}
                    alt={selectedCollection.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="w-full sm:w-1/2 space-y-4 text-left">
                  <span className="inline-block bg-[#ffebee] text-[#ff5252] text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {selectedCollection.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-neutral-900 leading-tight">
                    {selectedCollection.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {selectedCollection.description}
                  </p>
                  
                  <div className="pt-2">
                    <Link
                      href={`/appointment?service=${encodeURIComponent(selectedCollection.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#ff5252] hover:bg-[#f03e3e] text-white py-3 px-5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Consultation for this Collection</span>
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
