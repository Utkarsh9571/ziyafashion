import React from "react";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import EnquiryForm from "@/components/common/EnquiryForm";
import { VERIFIED_CONTACT_INFO } from "@/data/referenceData";
import { MapPin, Phone, Mail, Clock, Scissors, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Ziya Fashion Singapore",
  description:
    "Get in touch with Ziya Fashion tailoring boutique in Singapore. Located at Golden Landmark, Victoria Street.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Full-Width Hero */}
      <section className="w-full bg-[#ff5252] text-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-16 text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/95 uppercase mb-2">
            SINGAPORE ATELIER
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Ziya Fashion
          </h1>
          <p className="mt-3 text-xs sm:text-base text-white/95 max-w-xl mx-auto">
            Get in touch with our tailoring team for inquiries, bespoke creations, and fitting consultations.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Verified Boutique Information & Atelier Visual */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Atelier Visual Card */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] rounded-[28px] overflow-hidden bg-neutral-900 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1000&q=80"
                alt="Ziya Fashion Boutique Studio"
                fill
                className="object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 bg-[#ff5252] text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1 shadow-sm">
                  <Scissors className="w-3 h-3" />
                  <span>Atelier Studio</span>
                </div>
                <p className="text-sm font-bold text-white drop-shadow-sm">
                  Golden Landmark, Singapore
                </p>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5252]">
                VISIT OUR BOUTIQUE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212529] mt-1">
                Atelier &amp; Tailoring Studio
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                We welcome clients for private appointments, bespoke measurements, and garment alteration fittings.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <MapPin className="w-5 h-5 text-[#ff5252] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-neutral-900">Boutique Address</p>
                  <p className="text-neutral-600 mt-0.5">{VERIFIED_CONTACT_INFO.addressLine1}</p>
                  <p className="text-neutral-600">{VERIFIED_CONTACT_INFO.addressLine2}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <Phone className="w-5 h-5 text-[#ff5252] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-neutral-900">Phone / WhatsApp</p>
                  <a
                    href="tel:+6583636036"
                    className="text-neutral-600 hover:text-[#ff5252] transition-colors mt-0.5 block"
                  >
                    {VERIFIED_CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <Mail className="w-5 h-5 text-[#ff5252] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-neutral-900">Email Address</p>
                  <a
                    href={`mailto:${VERIFIED_CONTACT_INFO.email}`}
                    className="text-neutral-600 hover:text-[#ff5252] transition-colors mt-0.5 block"
                  >
                    {VERIFIED_CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <Clock className="w-5 h-5 text-[#ff5252] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-neutral-900">Operating Hours</p>
                  <p className="text-neutral-600 mt-0.5">{VERIFIED_CONTACT_INFO.hoursWeekdays}</p>
                  <p className="text-neutral-600">{VERIFIED_CONTACT_INFO.hoursSunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Unified Reusable Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              title="Send an Inquiry"
              subtitle="Have a question regarding custom tailoring, bridal outfits, traditional attire, or alterations? Let us know your requirements."
              defaultService="General Tailoring Inquiry"
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
