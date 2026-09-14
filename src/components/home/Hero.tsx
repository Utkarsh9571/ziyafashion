import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e84e4e] to-[#dc4040] text-white">
      {/* Outer rounded container padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Crafted For You</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-serif">
              Timeless Fashion, <br className="hidden sm:inline" />
              <span className="text-white drop-shadow-sm">Tailored to You</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Discover thoughtfully designed fashion and custom tailoring created around your unique style, fit, and personality.
            </p>

            {/* Action pill buttons container */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#e84e4e] px-8 py-4 rounded-full font-bold text-base shadow-lg hover:bg-neutral-50 hover:shadow-xl hover:scale-105 active:scale-95 transition-all group"
              >
                <Calendar className="w-5 h-5 text-[#e84e4e]" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/designs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/40 px-7 py-4 rounded-full font-semibold text-base backdrop-blur-sm transition-all"
              >
                <span>Explore Designs</span>
              </Link>
            </div>

            {/* Atelier Trust & Happy Clients Badge inspired by reference */}
            <div className="pt-6 flex items-center justify-center lg:justify-start">
              <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 flex items-center gap-4 shadow-sm">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="Client silhouette portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Client silhouette portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
                      alt="Client silhouette portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-300">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <p className="text-xs font-medium text-white/90">
                    Bespoke Precision Tailoring & Couture
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Large Fashion Model Editorial Composition with circular backplate */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Soft decorative background circles */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full bg-white/15 blur-2xl pointer-events-none" />
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] rounded-full bg-[#f26363] border-4 border-white/20 overflow-hidden shadow-2xl flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
                alt="Ziya Fashion Model Editorial"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating pill badge */}
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white text-neutral-900 px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-bold border border-neutral-100 animate-bounce duration-1000">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e84e4e]" />
              <span>Custom Appointments Open</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
