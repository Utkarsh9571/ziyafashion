import React, { Suspense } from "react";
import Footer from "@/components/layout/Footer";
import AppointmentFormContent from "@/app/appointment/AppointmentForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment — Ziya Fashion",
  description: "Schedule a private tailoring or consultation session at Ziya Fashion atelier.",
};

export default function AppointmentPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Full-Width Hero */}
      <section className="w-full bg-[#ff7d86] text-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-16 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Book an Appointment
          </h1>
          <p className="mt-3 text-xs sm:text-base text-white/95 max-w-xl mx-auto">
            Schedule a dedicated fitting, measurement session, or style consultation.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <Suspense fallback={<div className="p-12 text-center text-neutral-400">Loading appointment form...</div>}>
          <AppointmentFormContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
