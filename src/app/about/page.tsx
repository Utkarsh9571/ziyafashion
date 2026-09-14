import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, Scissors, Heart, Award, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Ziya Fashion Atelier",
  description: "Learn about Ziya Fashion's dedication to tailored perfection, modern silhouettes, and bespoke couture.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Editorial Page Hero */}
      <section className="bg-gradient-to-b from-[#e84e4e] to-[#dc4040] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-white/30">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Our Atelier Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight max-w-3xl mx-auto">
            The Art of Thoughtful Design & Custom Tailoring
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            At Ziya Fashion, we believe fashion is an intimate expression of individuality, celebrated through fine fabrics, structured cuts, and precision fit.
          </p>
        </div>
      </section>

      {/* Main Story & Philosophy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-neutral-100">
                <Image
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80"
                  alt="Ziya Fashion Atelier Workroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-white p-5 rounded-3xl shadow-xl border border-neutral-100 max-w-xs hidden sm:block">
                <p className="text-xs font-bold text-[#e84e4e] uppercase tracking-wider">Atelier Values</p>
                <p className="text-xs text-neutral-600 mt-1 font-serif italic">
                  “Every stitch is placed with intention, every silhouette shaped for your confidence.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e84e4e]">
                Brand Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-neutral-900 leading-tight">
                Made for the Individual, Not the Crowd
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Ziya Fashion was created to offer an alternative to mass-produced clothing. We provide a collaborative atelier experience where clients can explore curated silhouettes or bring their dream garments to life through personalized consultation.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                From festive and bridal ensembles to everyday tailored pieces, our team emphasizes proportions, comfortable draping, and impeccable finishes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-start gap-3">
                  <Scissors className="w-5 h-5 text-[#e84e4e] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-neutral-900">Precision Fit</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">Multiple-point measurement adjustments</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#e84e4e] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-neutral-900">Custom Design</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">Co-created looks for celebrations</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Craftsmanship Highlights */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e84e4e] font-serif tracking-tight">
              Our Craftsmanship Pillars
            </h2>
            <div className="ornate-divider">
              <span className="ornate-dot" />
              <span className="ornate-dot-center" />
              <span className="ornate-dot" />
            </div>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto">
              How we bring quality, comfort, and elegance into every creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200/70 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fef2f2] text-[#e84e4e] flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold font-serif text-neutral-900">Fabric Consultation</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We assist you in selecting the right textile weights, linings, and textures so your outfit falls gracefully and feels breathable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200/70 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fef2f2] text-[#e84e4e] flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold font-serif text-neutral-900">Pattern & Muslin Drafting</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Garments are patterned with attention to body movement and structure, ensuring ease without sacrificing a tailored look.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200/70 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fef2f2] text-[#e84e4e] flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold font-serif text-neutral-900">Fitting & Hand Finishing</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Every hem, seam, buttonhole, and embellishment undergoes thorough inspection to deliver a refined garment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] bg-gradient-to-r from-[#e84e4e] to-[#ea5555] text-white p-10 sm:p-14 text-center space-y-6 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">
              Experience the Ziya Fashion Atelier
            </h2>
            <p className="text-white/90 max-w-xl mx-auto text-base">
              Book a private session to discuss bespoke designs, custom tailoring, or wardrobe adjustments.
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
