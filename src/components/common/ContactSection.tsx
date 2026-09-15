import React from "react";
import Image from "next/image";
import EnquiryForm from "./EnquiryForm";
import { VERIFIED_CONTACT_INFO } from "@/data/referenceData";
import { MapPin, Phone, Clock, Scissors, MessageCircle, Sparkles } from "lucide-react";

interface ContactSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  defaultService?: string;
  bgColor?: string;
  imageSrc?: string;
}

export default function ContactSection({
  id = "contact-section",
  title = "Let's Create Something That Fits You",
  subtitle = "Have a tailoring requirement, alteration request, or a question about our services? Get in touch with Ziya Fashion.",
  defaultService = "General Tailoring Inquiry",
  bgColor = "bg-[#fcfbf9]",
  imageSrc = "/images/contact/contact-atelier.jpg",
}: ContactSectionProps) {
  return (
    <section id={id} className={`w-full py-16 sm:py-24 ${bgColor} border-t border-neutral-200/70`}>
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 items-stretch">
          
          {/* Left Column: Visual Atelier Image & Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[32px] overflow-hidden bg-neutral-900 text-white relative shadow-2xl min-h-[480px] lg:min-h-full">
            
            {/* Background Image with Dark Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={imageSrc}
                alt="Ziya Fashion Tailoring Atelier"
                fill
                className="object-cover object-center opacity-45 scale-105 hover:scale-100 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
            </div>

            {/* Top Content: Badges and Header */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#ff7d86] text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                <Scissors className="w-3.5 h-3.5" />
                <span>Singapore Atelier</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Crafted for You, Fitted to Perfection
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed max-w-sm">
                  Whether creating bespoke couture or tailoring existing garments, our master craftsmen are dedicated to exceptional fit and quality.
                </p>
              </div>
            </div>

            {/* Bottom Content: Quick Contact / Highlights Card */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-10 pt-0 space-y-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 space-y-3.5 text-xs text-neutral-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#ff7d86] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Golden Landmark Atelier</p>
                    <p className="text-neutral-300 text-[11px] sm:text-xs">
                      {VERIFIED_CONTACT_INFO.addressLine1}, {VERIFIED_CONTACT_INFO.addressLine2}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#ff7d86] shrink-0" />
                  <div>
                    <p className="font-bold text-white">Opening Hours</p>
                    <p className="text-neutral-300 text-[11px] sm:text-xs">
                      {VERIFIED_CONTACT_INFO.hoursWeekdays}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp / Call Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`https://wa.me/6583636036?text=${encodeURIComponent(
                    "Hello Ziya Fashion, I would like to inquire about your tailoring services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-full text-xs font-bold shadow-md transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Atelier</span>
                </a>

                <a
                  href={`tel:${VERIFIED_CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-full text-xs font-bold border border-white/30 transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{VERIFIED_CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Full-Width Contact Enquiry Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <EnquiryForm
              title={title}
              subtitle={subtitle}
              defaultService={defaultService}
              className="h-full flex flex-col justify-between shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
