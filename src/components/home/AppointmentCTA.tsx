import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#ff5252] via-[#ff5f5f] to-[#ff7373] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/30">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Bespoke Tailoring Experience</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to Create Something Made for You?
              </h2>

              <p className="text-white/95 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                Tell us what you&apos;re looking for and our tailoring team can help you with the next steps, from consultation and measurements to fitting and final completion.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#ff5252] px-8 py-4 rounded-full font-bold text-base shadow-lg hover:bg-neutral-50 hover:shadow-xl hover:scale-105 active:scale-95 transition-all group uppercase tracking-wider text-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK AN APPOINTMENT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/40 px-6 py-4 rounded-full font-bold text-xs uppercase tracking-wider backdrop-blur-sm transition-all"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>

            {/* Right Fashion Composition */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl bg-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=700&q=80"
                  alt="Ziya Fashion Singapore Bespoke Fitting"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

