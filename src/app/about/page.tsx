import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import EnquiryForm from "@/components/common/EnquiryForm";
import { WHY_CHOOSE_ZIYA_FEATURES, PROCESS_STEPS, VERIFIED_CONTACT_INFO } from "@/data/referenceData";
import { Scissors, Palette, Sparkles, Heart, CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Ziya Fashion Singapore",
  description:
    "Where your vision meets our craft. Discover Ziya Fashion's bespoke tailoring, craftsmanship philosophy, and boutique atelier in Singapore.",
};

const featureIcons = {
  Scissors: Scissors,
  Sparkles: Sparkles,
  Heart: Heart,
  Palette: Palette,
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* 1. Full-Width Hero Section */}
      <section className="w-full bg-[#ff7d86] text-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-16 sm:pb-20 text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-white/95 uppercase mb-2 block">
            ABOUT ZIYA FASHION
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Where Your Vision Meets Our Craft
          </h1>
          <p className="mt-4 text-xs sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed">
            Thoughtful design, handcrafted precision, and personalized tailoring created around your unique fit in Singapore.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 space-y-16 sm:space-y-24">
        
        {/* 2. Who We Are / Brand Story Section (matching homepage Who We Are editorial) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Atelier Photo with rounded borders & floating badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-neutral-100">
              <Image
                src="/images/about/who-we-are.png"
                alt="Ziya Fashion Singapore Atelier Craftsmanship"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-750"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Floating Atelier Badge */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-neutral-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ff7d86] text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-xs text-neutral-900">Bespoke Tailoring</p>
                  <p className="text-[11px] text-neutral-500">Singapore Atelier &amp; Consultation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#ff7d86]/10 text-[#ff7d86] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#212529] tracking-tight leading-tight">
              Where Your Vision Meets Our Craft
            </h2>

            <h3 className="text-xl font-bold text-[#ff7d86] tracking-tight">
              Made to Be Uniquely Yours
            </h3>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              At Ziya Fashion, we believe fashion should feel personal. From the first idea to the final fitting, we focus on thoughtful design, skilled tailoring and attention to every detail to create an outfit that feels truly yours.
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Whether you have a specific design in mind or need guidance in creating the right outfit, we work with you to bring your vision together with the right fit, fabric, details and finishing.
            </p>

            {/* Supporting Values */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-[#ff7d86] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Personalised Fittings</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Garments tailored around your measurements for a comfortable and refined fit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-[#ff7d86] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Thoughtful Craftsmanship</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Careful attention to construction, detailing and finishing throughout the garment.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-[#ff7d86] hover:bg-[#e85661] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all group"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-neutral-800 hover:text-[#ff7d86] text-xs font-bold uppercase tracking-wider transition-colors px-4 py-3"
              >
                <span>Explore Services →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Why Choose Ziya Fashion / Craftsmanship Pillars */}
        <section className="bg-neutral-50 rounded-[36px] p-8 sm:p-12 lg:p-16 border border-neutral-200/80">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff7d86] mb-1 block">
              OUR STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#212529] tracking-tight">
              Why Choose Ziya Fashion
            </h2>
            <div className="ref-divider">
              <span className="ref-dot" />
              <span className="ref-dot-lg" />
              <span className="ref-dot" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {WHY_CHOOSE_ZIYA_FEATURES.map((feature) => {
              const IconComp = featureIcons[feature.iconName as keyof typeof featureIcons] || Sparkles;
              return (
                <div
                  key={feature.id}
                  className="bg-white rounded-[24px] p-6 sm:p-7 border border-neutral-200/70 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ff7d86]/10 text-[#ff7d86] flex items-center justify-center mb-1">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg text-[#212529]">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Our 4-Step Tailoring Process */}
        <section className="space-y-10 sm:space-y-12">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff7d86] mb-1 block">
              HOW WE WORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#212529] tracking-tight">
              Our Tailoring Process
            </h2>
            <div className="ref-divider">
              <span className="ref-dot" />
              <span className="ref-dot-lg" />
              <span className="ref-dot" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-[28px] p-6 sm:p-7 border border-neutral-200/80 shadow-sm relative overflow-hidden group hover:border-[#ff7d86]/40 transition-colors"
              >
                <div className="text-4xl font-black text-[#ff7d86]/20 group-hover:text-[#ff7d86]/30 transition-colors mb-3">
                  {step.step}
                </div>
                <h3 className="font-extrabold text-lg text-[#212529] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Contact & Inquiry Section with Form and Details */}
        <section className="pt-6 border-t border-neutral-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Boutique Information & Atelier Visual */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff7d86]">
                  VISIT OUR ATELIER
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212529] mt-1">
                  Connect with Ziya Fashion
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  Have a bespoke outfit inquiry, bridal fitting question, or want to schedule a private measurement session? We look forward to welcoming you.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <MapPin className="w-5 h-5 text-[#ff7d86] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-neutral-900">Boutique Address</p>
                    <p className="text-neutral-600 mt-0.5">{VERIFIED_CONTACT_INFO.addressLine1}</p>
                    <p className="text-neutral-600">{VERIFIED_CONTACT_INFO.addressLine2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <Phone className="w-5 h-5 text-[#ff7d86] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-neutral-900">Phone / WhatsApp</p>
                    <a
                      href="tel:+6583636036"
                      className="text-neutral-600 hover:text-[#ff7d86] transition-colors mt-0.5 block font-semibold"
                    >
                      {VERIFIED_CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <Mail className="w-5 h-5 text-[#ff7d86] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-neutral-900">Email Address</p>
                    <a
                      href={`mailto:${VERIFIED_CONTACT_INFO.email}`}
                      className="text-neutral-600 hover:text-[#ff7d86] transition-colors mt-0.5 block font-semibold"
                    >
                      {VERIFIED_CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <Clock className="w-5 h-5 text-[#ff7d86] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-neutral-900">Operating Hours</p>
                    <p className="text-neutral-600 mt-0.5">{VERIFIED_CONTACT_INFO.hoursWeekdays}</p>
                    <p className="text-neutral-600">{VERIFIED_CONTACT_INFO.hoursSunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <EnquiryForm
                title="Send Us a Message"
                subtitle="Share your design ideas, upcoming event dates, or fitting questions. We will get back to you promptly."
                defaultService="Bespoke & Made-to-Measure"
              />
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
