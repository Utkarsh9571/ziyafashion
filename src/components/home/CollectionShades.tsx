import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_COLLECTIONS } from "@/data/siteData";

export default function CollectionShades() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with reference styled divider */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e84e4e] font-serif tracking-tight">
            Explore Our Collections
          </h2>
          <div className="ornate-divider">
            <span className="ornate-dot" />
            <span className="ornate-dot-center" />
            <span className="ornate-dot" />
          </div>
          <p className="text-neutral-500 text-sm max-w-lg mx-auto">
            Discover signature cuts, hand-finished silhouettes, and bespoke ensembles tailored for every occasion.
          </p>
        </div>

        {/* 4 Capsule / Horizontal Rounded Category Cards inspired by "Premium Shades" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              className="group relative h-40 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Background capsule color */}
              <div className={`absolute inset-0 ${col.themeColor} flex items-center justify-between p-6`}>
                <div className="z-10 max-w-[60%] space-y-2">
                  <h3 className="font-bold text-lg leading-snug font-serif text-white drop-shadow-sm">
                    {col.title}
                  </h3>
                  <Link
                    href={col.href}
                    className="inline-flex items-center gap-1.5 bg-white text-neutral-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm hover:bg-neutral-100 transition-colors"
                  >
                    <span>{col.badge}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Model cutout / image floating to right */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
                <Image
                  src={col.imageUrl}
                  alt={col.title}
                  fill
                  className="object-cover object-top filter brightness-95 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
