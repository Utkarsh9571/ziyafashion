import React, { Suspense } from "react";
import DesignGallery from "@/components/home/DesignGallery";
import CollectionShades from "@/components/home/CollectionShades";
import { Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designs & Collections — Ziya Fashion Portfolio",
  description: "Browse curated fashion designs, bridal wear, ethnic silhouettes, and custom tailoring portfolio of Ziya Fashion.",
};

export default function DesignsPage() {
  return (
    <div className="bg-white">
      {/* Editorial Page Hero */}
      <section className="bg-gradient-to-b from-[#e84e4e] to-[#dc4040] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-white/30">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Design Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight max-w-3xl mx-auto">
            Curated Fashion Lookbook & Silhouettes
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our design portfolio. Each piece serves as inspiration for custom tailoring and made-to-measure creations.
          </p>
        </div>
      </section>

      {/* Featured Collections Pill Bar */}
      <div className="border-b border-neutral-100">
        <CollectionShades />
      </div>

      {/* Interactive Category Filter & Design Portfolio Grid */}
      <Suspense fallback={<div className="p-12 text-center text-neutral-400">Loading lookbook...</div>}>
        <DesignGallery />
      </Suspense>
    </div>
  );
}
