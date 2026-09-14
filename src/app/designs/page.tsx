import React, { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CollectionShades from "@/components/home/CollectionShades";
import DesignGallery from "@/components/home/DesignGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designs & Collections — Ziya Fashion",
  description: "Browse curated fashion designs, bridal wear, and custom tailoring portfolio of Ziya Fashion.",
};

export default function DesignsPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Full-Width Hero */}
      <section className="w-full bg-[#ff5252] text-white">
        <Header />
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-16 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Design Collections
          </h1>
          <p className="mt-3 text-xs sm:text-base text-white/95 max-w-xl mx-auto">
            Explore our lookbook and select your favorite silhouette for custom tailoring.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full">
        <CollectionShades />
        <Suspense fallback={<div className="p-12 text-center text-neutral-400">Loading gallery...</div>}>
          <DesignGallery />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
