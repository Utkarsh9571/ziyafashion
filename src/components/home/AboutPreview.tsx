import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atelier Photo with rounded borders */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
                alt="Ziya Fashion Atelier Craftsmanship"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-750"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Decorative Floating Pill */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-neutral-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e84e4e] text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-xs text-neutral-900">Custom Tailoring</p>
                  <p className="text-[11px] text-neutral-500">Meticulous fitting sessions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Brand Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#e84e4e]/10 text-[#e84e4e] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>Made With Intention</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 font-serif leading-tight">
              Crafting Fashion That Speaks to Who You Are
            </h2>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
              Ziya Fashion brings together contemporary design, thoughtful detailing, and personalized tailoring to create clothing that reflects the individual wearing it.
            </p>

            {/* Key Value Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-neutral-700 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#e84e4e] shrink-0" />
                <span>Made-to-order garments sculpted around your exact measurements</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#e84e4e] shrink-0" />
                <span>Personal consultation on fabrics, silhouettes, and embellishments</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#e84e4e] shrink-0" />
                <span>Hand-finished seams and artisanal attention to detail</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-[#e84e4e] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all group"
              >
                <span>Discover Ziya Fashion</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 text-neutral-800 hover:text-[#e84e4e] text-xs font-bold uppercase tracking-wider transition-colors px-4 py-3"
              >
                <span>Book a Consultation →</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
