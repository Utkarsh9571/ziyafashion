import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Ziya Fashion",
  description: "Learn about Ziya Fashion's dedicated custom tailoring and bespoke couture philosophy.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Full-Width Hero Section */}
      <section className="w-full bg-[#ff5252] text-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-16 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About Ziya Fashion
          </h1>
          <p className="mt-3 text-xs sm:text-base text-white/95 max-w-xl mx-auto">
            Thoughtful design, handcrafted precision, and personalized tailoring created around your unique fit.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-[32px] overflow-hidden bg-neutral-100 shadow-md">
            <Image
              src="/images/about/about-craftsmanship.jpg"
              alt="Atelier Studio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff5252]">
              Our Story & Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212529]">
              Crafting Fashion That Speaks to You
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Ziya Fashion brings together contemporary silhouettes and personalized tailoring to create clothing that fits with distinction and poise.
            </p>
            <div className="pt-2">
              <Link
                href="/appointment"
                className="inline-block bg-[#ff5252] text-white px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#f03e3e] transition-colors"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
