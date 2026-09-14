import React from "react";
import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_STRIP_PHOTOS } from "@/data/referenceData";
import { ArrowUpRight } from "lucide-react";

export default function InstagramBar() {
  return (
    <div className="relative w-full overflow-hidden bg-neutral-900 group">
      {/* 5-photo strip matching Screenshot 090119.png */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-44 sm:h-52 md:h-60 w-full">
        {INSTAGRAM_STRIP_PHOTOS.map((img, index) => (
          <div key={index} className="relative h-full w-full overflow-hidden bg-neutral-800">
            <Image
              src={img}
              alt={`Instagram strip photo ${index + 1}`}
              fill
              className="object-cover object-center filter hover:brightness-110 transition-all duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
            />
          </div>
        ))}
      </div>

      {/* Floating Center Badge: "Follow on Instagram" with "Follow ↑" pill on right matching screenshot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-auto max-w-[90vw]">
        <Link
          href="https://www.instagram.com/ziyaadmn?igsh=YXJyZnpuMWdiYnls"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#ff5252] text-white pl-4 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full shadow-2xl font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 border border-white/20 gap-2 sm:gap-3 whitespace-nowrap"
        >
          <span>Follow on Instagram</span>
          <span className="bg-[#ff7979] text-white text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-bold flex items-center gap-1 shadow-inner">
            <span>Follow</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}
