import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SERVICES_DATA } from "@/data/siteData";
import { Scissors, Sparkles, Maximize2, Palette } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Ziya Fashion",
  description: "Explore our custom tailoring, couture design, alterations, and style consultations.",
};

const iconMap = {
  Scissors: Scissors,
  Sparkles: Sparkles,
  Maximize2: Maximize2,
  Palette: Palette,
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Full-Width Hero */}
      <section className="w-full bg-[#ff5252] text-white">
        <Header />
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-16 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Services
          </h1>
          <p className="mt-3 text-xs sm:text-base text-white/95 max-w-xl mx-auto">
            Bespoke garment creation, precision alterations, and private consultations.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Sparkles;
            return (
              <div
                key={service.id}
                className="bg-[#f9fafb] rounded-[32px] overflow-hidden border border-neutral-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-neutral-200">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white text-[#ff5252] flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 space-y-2">
                    <h3 className="font-bold text-base sm:text-lg text-neutral-900">{service.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href={`/appointment?service=${encodeURIComponent(service.title)}`}
                    className="inline-block bg-[#ff5252] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#f03e3e] transition-colors"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
