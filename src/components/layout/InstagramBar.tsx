import React from "react";
import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_IMAGES } from "@/data/siteData";
import { Camera } from "lucide-react";

export default function InstagramBar() {
  return (
    <div className="relative w-full overflow-hidden bg-neutral-900 group">
      {/* 5-photo editorial grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-48 md:h-56">
        {INSTAGRAM_IMAGES.map((img, index) => (
          <div key={index} className="relative h-full w-full overflow-hidden bg-neutral-800">
            <Image
              src={img}
              alt={`Ziya Fashion Instagram lookbook editorial ${index + 1}`}
              fill
              className="object-cover object-center filter grayscale-[20%] hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
            <div className="absolute inset-0 bg-black/15 hover:bg-transparent transition-colors pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Floating Center Badge inspired by reference */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto">
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#e84e4e] hover:bg-[#d83c3c] text-white px-5 py-2.5 rounded-full shadow-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95 border border-white/20"
        >
          <Camera className="w-4 h-4" />
          <span>Follow on Instagram</span>
          <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-medium ml-1">
            @ziyafashion
          </span>
        </Link>
      </div>
    </div>
  );
}
