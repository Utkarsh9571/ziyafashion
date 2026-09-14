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
                alt="Ziya Fashion Singapore Craftsmanship"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-750"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Decorative Floating Pill */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-neutral-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ff5252] text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-xs text-neutral-900">Bespoke Tailoring</p>
                  <p className="text-[11px] text-neutral-500">Singapore Atelier & Consultation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Brand Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#ff5252]/10 text-[#ff5252] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#212529] tracking-tight leading-tight">
              Where Your Vision Becomes Your Perfect Fit
            </h2>

            <p className="text-neutral-600 text-base leading-relaxed">
              Ziya Fashion is a tailoring boutique in Singapore specialising in custom-made garments designed around your measurements, style and occasion. From elegant everyday wear to sophisticated bridal and traditional outfits, each piece is created with attention to fit, detail and finish.
            </p>

            <p className="text-neutral-600 text-base leading-relaxed">
              Our tailoring approach brings together traditional craftsmanship and contemporary design. Whether you have a specific design in mind or need guidance in creating the right outfit, we work with you from consultation and fabric selection through to fitting and completion.
            </p>

            {/* Supporting Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-[#ff5252] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Personalised Fittings</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">Garments tailored around your measurements for a comfortable and refined fit.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-[#ff5252] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Crafted with Precision</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">Careful detailing, fabric selection and skilled tailoring throughout the garment-making process.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-[#ff5252] hover:bg-[#e04545] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-neutral-800 hover:text-[#ff5252] text-xs font-bold uppercase tracking-wider transition-colors px-4 py-3"
              >
                <span>Learn More About Us →</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

