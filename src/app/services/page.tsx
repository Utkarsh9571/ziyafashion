import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Sparkles, Maximize2, Palette, ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { SERVICES_DATA } from "@/data/siteData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Ziya Fashion Atelier & Bespoke Tailoring",
  description: "Explore our personalized tailoring, custom couture design, alterations, and style consultation services.",
};

const iconMap = {
  Scissors: Scissors,
  Sparkles: Sparkles,
  Maximize2: Maximize2,
  Palette: Palette,
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#e84e4e] to-[#dc4040] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-white/30">
            <Scissors className="w-3.5 h-3.5 text-white" />
            <span>Atelier Expertise</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight max-w-3xl mx-auto">
            Our Atelier & Tailoring Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            From bespoke garment creation to expert adjustments, we offer personalized services tailored to your individual fit and aesthetic.
          </p>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Sparkles;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image Side */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 group">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md text-[#e84e4e] flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? "lg:order-1" : ""}`}>
                  <div className="inline-block bg-[#ef5350]/10 text-[#ef5350] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Service 0{index + 1}
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900 leading-tight">
                    {service.title}
                  </h2>
                  
                  <p className="text-sm font-semibold text-[#e84e4e] uppercase tracking-wider">
                    {service.tagline}
                  </p>

                  <p className="text-neutral-600 leading-relaxed text-base">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-neutral-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#e84e4e] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/appointment?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2.5 bg-[#e84e4e] hover:bg-[#d83c3c] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book an Appointment for {service.title}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Atelier Process Section */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e84e4e] font-serif tracking-tight">
              The Atelier Journey
            </h2>
            <div className="ornate-divider">
              <span className="ornate-dot" />
              <span className="ornate-dot-center" />
              <span className="ornate-dot" />
            </div>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto">
              How our custom tailoring and design process works from first conversation to final fitting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-3xl border border-neutral-200/70 shadow-sm space-y-3">
              <span className="text-3xl font-extrabold text-[#e84e4e] font-serif">01</span>
              <h3 className="font-bold text-base text-neutral-900">Initial Consultation</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Meet with our stylist to explore ideas, occasions, silhouette references, and color preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200/70 shadow-sm space-y-3">
              <span className="text-3xl font-extrabold text-[#e84e4e] font-serif">02</span>
              <h3 className="font-bold text-base text-neutral-900">Measurement & Selection</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Take comprehensive body measurements and finalize fabric swatches, textures, and linings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200/70 shadow-sm space-y-3">
              <span className="text-3xl font-extrabold text-[#e84e4e] font-serif">03</span>
              <h3 className="font-bold text-base text-neutral-900">Trial Fitting</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Test the structured fit, garment drape, and make micro-adjustments for comfort and posture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200/70 shadow-sm space-y-3">
              <span className="text-3xl font-extrabold text-[#e84e4e] font-serif">04</span>
              <h3 className="font-bold text-base text-neutral-900">Final Handover</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Receive your hand-finished garment ready for your celebration, crafted to perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] bg-gradient-to-r from-[#e84e4e] to-[#ea5555] text-white p-10 sm:p-14 text-center space-y-6 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">
              Ready to Discuss Your Next Garment?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto text-base">
              Book a personalized appointment with Ziya Fashion and let us tailor something extraordinary for you.
            </p>
            <div className="pt-2">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-white text-[#e84e4e] px-8 py-4 rounded-full font-bold text-sm shadow-md hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
