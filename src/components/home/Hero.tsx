import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Star } from "lucide-react";
import Header from "../layout/Header";

export default function Hero() {
  return (
    <section className="w-full bg-[#ff5252] text-white overflow-hidden relative">
      {/* Full-width Top Navigation Header */}
      <Header />

      {/* Internal Constrained Content Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography and Action Elements */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left z-10">
            
            {/* Small Label */}
            <p className="text-xs sm:text-sm font-medium tracking-wide text-white/95 uppercase">
              Exclusive Offer 20% off This Week
            </p>

            {/* Giant Bold Heading matching exact reference font */}
            <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[60px] xl:text-[66px] font-extrabold tracking-tight leading-[1.08] text-white">
              Stylish <br />
              Female Clothes
            </h1>

            {/* Subheading text */}
            <p className="text-xs sm:text-sm md:text-base text-white/95 font-medium max-w-md leading-relaxed">
              Made from Sof, Durable, US- grown Supima Cotton.
            </p>

            {/* Large Pill Category Selector & Action Button matching screenshot */}
            <div className="pt-1">
              <div className="inline-flex items-center bg-white/25 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-white/30 shadow-inner max-w-full">
                <div className="flex items-center gap-2 sm:gap-3 pl-3 sm:pl-4 pr-2 sm:pr-3 py-1 text-xs sm:text-sm font-medium text-white/95 cursor-pointer">
                  <span>Select Category</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/30 flex items-center justify-center text-white shrink-0">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </div>
                <Link
                  href="/designs"
                  className="bg-white text-[#ff5252] hover:bg-neutral-50 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Happy Customers Social Proof Pill */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-3 sm:gap-3.5 bg-white/25 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-3xl border border-white/25 shadow-sm max-w-full">
                <div className="flex -space-x-2 shrink-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Customer 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="Customer 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
                      alt="Customer 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-[11px] sm:text-xs font-bold text-white">Our Happy Customer</p>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-white/90">
                    <div className="flex text-amber-300">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                    <span className="font-semibold ml-0.5">8.5</span>
                    <span className="text-white/80">(453k Reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom membership pill */}
            <div className="pt-1 flex items-center gap-3 text-xs font-medium text-white/90 flex-wrap">
              <span>Not Yet Member?</span>
              <Link
                href="/appointment"
                className="bg-white/25 hover:bg-white/35 px-4 py-1.5 rounded-full text-white font-semibold transition-colors border border-white/20 text-xs"
              >
                Sign Up Now
              </Link>
            </div>

          </div>

          {/* Right Column: Model Portrait framed with circular disk cutout */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            {/* Big circular pink background disc */}
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] xl:w-[500px] xl:h-[500px] rounded-full bg-[#ff7676] overflow-hidden flex items-end justify-center shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
                alt="Stylish Female Model"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 90vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
