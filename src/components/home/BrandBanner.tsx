import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BrandBanner() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width coral banner container with rounded outer corners */}
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#e84e4e] via-[#ea5555] to-[#f06565] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
          
          {/* Subtle background circles */}
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Messaging Area */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/30">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Bespoke Excellence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight">
                Designed Around <br className="hidden sm:inline" />
                Your Style & Fit
              </h2>

              <p className="text-white/90 text-base sm:text-lg max-w-xl font-light leading-relaxed">
                From curated silhouettes to made-to-measure tailoring, every creation at Ziya Fashion is sculpted around your individuality and comfort.
              </p>

              <div className="pt-2">
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-3 bg-white text-[#e84e4e] px-8 py-4 rounded-full font-bold text-base shadow-lg hover:bg-neutral-50 hover:shadow-xl hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Book an Appointment</span>
                  <div className="w-6 h-6 rounded-full bg-[#e84e4e] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Fashion Model Composition with circular overlay */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl bg-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
                  alt="Ziya Fashion Couture Editorial"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Floating aesthetic pill badge */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-4 bg-white text-[#e84e4e] text-xs font-extrabold px-4 py-2 rounded-full shadow-lg border border-neutral-100 flex items-center gap-1.5">
                <span>✨ Pure Elegance</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
