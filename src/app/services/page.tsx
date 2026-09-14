import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/common/ContactSection";
import ServiceSelectDropdown from "@/components/common/ServiceSelectDropdown";
import {
  DETAILED_SERVICES,
  TRADITIONAL_WEAR_ITEMS,
  WHY_CHOOSE_ZIYA_FEATURES,
  PROCESS_STEPS,
} from "@/data/referenceData";
import {
  Scissors,
  Sparkles,
  Maximize2,
  Palette,
  Heart,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Calendar,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Tailoring Services — Ziya Fashion Singapore",
  description:
    "From bespoke garments and traditional wear to bridal outfits and professional alterations, our tailoring services in Singapore are designed around your measurements, style and occasion.",
};

const iconMap = {
  Scissors: Scissors,
  Sparkles: Sparkles,
  Maximize2: Maximize2,
  Palette: Palette,
  Heart: Heart,
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* SECTION 1 — HERO */}
      <section className="w-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] bg-[#ff5252] text-white flex flex-col justify-center relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 h-full flex flex-col justify-center py-6 sm:py-8 lg:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-5 text-left z-10 py-6 sm:py-10 lg:py-12 flex flex-col justify-center">
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/95 uppercase">
                OUR SERVICES
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[56px] font-extrabold tracking-tight leading-[1.08] text-white">
                Tailoring Made Around You
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-white/95 font-medium max-w-xl leading-relaxed">
                From bespoke garments and traditional wear to bridal outfits and professional alterations, our tailoring services are designed around your measurements, style and occasion.
              </p>

              {/* 1. CTA Buttons Row + Pill Dropdown */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#services-list"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#ff5252] hover:bg-neutral-50 px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 uppercase tracking-wider whitespace-nowrap"
                >
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight className="w-4 h-4 text-[#ff5252]" />
                </a>

                {/* Compact Pill-shaped Dropdown next to primary CTA */}
                <ServiceSelectDropdown />

                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm border border-white/30 transition-all uppercase tracking-wider whitespace-nowrap"
                >
                  <span>BOOK AN APPOINTMENT</span>
                </Link>
              </div>

              {/* 2. "Our Happy Customers" Trust Strip: 3 overlapping avatars + star rating line */}
              <div className="pt-2 flex items-center gap-3.5">
                <div className="flex -space-x-2.5 shrink-0">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="/images/home/hero-avatar-1.jpg"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="/images/home/hero-avatar-2.jpg"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="/images/home/hero-avatar-3.jpg"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-xs text-white/95 font-medium flex items-center gap-2">
                  <span className="font-bold">Our Happy Customers</span>
                  <span className="text-white/60">•</span>
                  <span className="text-yellow-300 font-semibold tracking-tighter">★★★★★</span>
                  <span className="font-semibold">4.9 (500+ Tailored Creations)</span>
                </div>
              </div>

              {/* 3. One-line Prompt */}
              <div className="text-xs sm:text-sm text-white/95 font-medium pt-1">
                <span>First time here? </span>
                <Link
                  href="/appointment"
                  className="font-bold underline underline-offset-4 text-white hover:text-white/80 transition-colors"
                >
                  Book a Free Consultation
                </Link>
              </div>

            </div>

            {/* Right Hero: Large Circle Backdrop (NOT a clip mask) + Overflowing Tailoring Photo bleeding to bottom edge */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-full w-full min-h-[340px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] xl:min-h-[620px]">
              
              {/* 1. Backdrop Circle: Flat, slightly lighter tint (~85-90% height), pure backdrop behind photo */}
              <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-2 xl:right-6 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px] 2xl:w-[580px] 2xl:h-[580px] rounded-full bg-[#ff7676] shadow-xl z-0 pointer-events-none" />

              {/* 2. Photo in front of circle, breaking the circle's outline and bleeding straight through bottom edge */}
              <div className="relative z-10 w-[290px] h-[340px] sm:w-[380px] sm:h-[440px] md:w-[440px] md:h-[500px] lg:w-[480px] lg:h-[560px] xl:w-[540px] xl:h-[620px] flex items-end justify-center">
                <Image
                  src="/images/services/hero-cutout-reference-model.png"
                  alt="Ziya Fashion Tailoring Services Craftsmanship"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl hover:scale-105 transition-transform duration-700 select-none"
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICES INTRO */}
      <section className="w-full pt-16 sm:pt-20 pb-10 bg-white" id="services-intro">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff5252] mb-1">
            WHAT WE DO
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Our Tailoring Services
          </h2>
          <div className="ref-divider">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Every garment starts with understanding what you need. Whether you are creating something from scratch, preparing for a special occasion or refining the fit of an existing outfit, we provide personalised tailoring with careful attention to fit, construction and finishing.
          </p>
        </div>
      </section>

      {/* SECTION 3 — MAIN SERVICES GRID */}
      <section className="w-full pb-16 sm:pb-20 bg-white" id="services-list">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {DETAILED_SERVICES.map((service) => {
              const IconComponent =
                iconMap[service.iconName as keyof typeof iconMap] || Sparkles;

              return (
                <div
                  key={service.id}
                  className="group bg-[#f9fafb] rounded-[32px] overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Service Card Image */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-200">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-[#ff5252] flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                        {service.number}
                      </div>
                    </div>

                    {/* Service Card Content */}
                    <div className="p-5 sm:p-6 space-y-2.5">
                      <h3 className="font-extrabold text-lg sm:text-xl text-[#212529] group-hover:text-[#ff5252] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="p-5 sm:p-6 pt-0">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5252] hover:opacity-80 transition-opacity"
                    >
                      <span>{service.ctaText}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — INDIAN & MALAY TRADITIONAL WEAR */}
      <section className="w-full py-14 sm:py-20 bg-[#fafafa] border-t border-b border-neutral-200/60 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg bg-neutral-200">
                <Image
                  src="/images/services/services-banner-2.jpg"
                  alt="Indian & Malay Traditional Tailoring"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right Text & Traditional Wear Categories */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff5252] mb-1">
                  TRADITIONAL WEAR
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#212529] tracking-tight">
                  Indian & Malay Wear, Tailored Your Way
                </h2>
                <div className="ref-divider !mx-0 my-3">
                  <span className="ref-dot" />
                  <span className="ref-dot-lg" />
                  <span className="ref-dot" />
                </div>
                <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
                  We tailor a range of Indian and Malay garments for different occasions, from bridal and festive wear to traditional everyday styles. Designs can be adapted around your measurements, preferred fit and finishing requirements.
                </p>
              </div>

              {/* Supporting List of Categories */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  Traditional Garments Tailored & Altered:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {TRADITIONAL_WEAR_ITEMS.map((item) => (
                    <div
                      key={item}
                      className="bg-white border border-neutral-200/80 rounded-2xl px-3.5 py-2.5 text-xs font-semibold text-neutral-800 flex items-center gap-2 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5252] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA to Product Catalogue */}
              <div className="pt-2">
                <Link
                  href="/product-gallery/"
                  className="inline-flex items-center gap-2 bg-[#ff5252] hover:bg-[#f03e3e] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>VIEW PRODUCT CATALOGUE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — ALTERATIONS */}
      <section className="w-full py-14 sm:py-20 bg-white overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
              <div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff5252] mb-1">
                  ALTERATIONS & FITTINGS
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#212529] tracking-tight">
                  Refine the Fit of Your Favourite Garments
                </h2>
                <div className="ref-divider !mx-0 my-3">
                  <span className="ref-dot" />
                  <span className="ref-dot-lg" />
                  <span className="ref-dot" />
                </div>
                <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
                  Good tailoring is not only about creating a new garment. Our alteration service helps improve the fit and finish of existing clothing by adjusting areas such as length, sleeves, waist, silhouette and other garment details.
                </p>
              </div>

              {/* Supporting Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f9fafb] p-5 rounded-2xl border border-neutral-200/80 space-y-1.5">
                  <h4 className="font-bold text-sm sm:text-base text-[#212529] flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-[#ff5252]" />
                    <span>Women&apos;s Alterations</span>
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Adjustments for dresses, bridal wear, traditional wear and other women&apos;s garments.
                  </p>
                </div>

                <div className="bg-[#f9fafb] p-5 rounded-2xl border border-neutral-200/80 space-y-1.5">
                  <h4 className="font-bold text-sm sm:text-base text-[#212529] flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-[#ff5252]" />
                    <span>Men&apos;s Alterations</span>
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Alterations for shirts, trousers, suits, jackets and selected traditional wear.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/appointment?service=Alterations%20%26%20Fittings"
                  className="inline-flex items-center gap-2 bg-[#212529] hover:bg-[#ff5252] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>ENQUIRE ABOUT ALTERATIONS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg bg-neutral-200">
                <Image
                  src="/images/services/services-banner-3.jpg"
                  alt="Tailoring Alterations & Fitting Service"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY CHOOSE ZIYA */}
      <section className="w-full py-14 sm:py-20 bg-[#fafafa] border-t border-b border-neutral-200/60">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff5252] mb-1">
              WHY CHOOSE ZIYA FASHION?
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
              Tailored With Care, Made For You
            </h2>
            <div className="ref-divider">
              <span className="ref-dot" />
              <span className="ref-dot-lg" />
              <span className="ref-dot" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {WHY_CHOOSE_ZIYA_FEATURES.map((feat) => {
              const IconComp = iconMap[feat.iconName as keyof typeof iconMap] || Sparkles;
              return (
                <div
                  key={feat.id}
                  className="bg-white rounded-[28px] p-6 sm:p-7 border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#ffebee] text-[#ff5252] flex items-center justify-center mb-5 shadow-inner">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg text-[#212529] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7 — PROCESS / HOW IT WORKS */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff5252] mb-1">
              OUR PROCESS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
              From Consultation to Final Fitting
            </h2>
            <div className="ref-divider">
              <span className="ref-dot" />
              <span className="ref-dot-lg" />
              <span className="ref-dot" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative bg-[#f9fafb] rounded-[28px] p-6 sm:p-7 border border-neutral-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-[#ff5252] mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-extrabold text-lg text-[#212529] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8 — PRODUCT CATALOGUE CONNECTION */}
      <section className="w-full py-12 sm:py-16 bg-[#ff5252] text-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/90 uppercase">
            EXPLORE OUR STYLES
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Looking for a Specific Garment?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/95 max-w-2xl mx-auto leading-relaxed">
            Explore our Product Catalogue to see the range of garments and tailoring options available at Ziya Fashion.
          </p>
          <div className="pt-2">
            <Link
              href="/product-gallery/"
              className="inline-flex items-center gap-2 bg-white text-[#ff5252] hover:bg-neutral-50 px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>VIEW PRODUCT CATALOGUE</span>
              <ArrowRight className="w-4 h-4 text-[#ff5252]" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — APPOINTMENT CTA */}
      <section className="w-full py-16 sm:py-24 bg-[#f8f9fa] border-t border-neutral-200/80">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#212529] tracking-tight">
            Let&apos;s Create Something Made for You
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Have a design in mind, need an alteration or looking for the right outfit for a special occasion? Get in touch with Ziya Fashion to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-[#ff5252] hover:bg-[#f03e3e] text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK AN APPOINTMENT</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-[#212529] border border-neutral-300 px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#ff5252]" />
              <span>CONTACT US</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 — REUSABLE CONTACT FORM */}
      <ContactSection
        title="Ready to Discuss Your Requirements?"
        subtitle="Whether you are looking for tailoring advice, alterations, or a custom garment, we would be happy to hear from you."
        defaultService="General Tailoring Inquiry"
      />

      <Footer />
    </div>
  );
}

