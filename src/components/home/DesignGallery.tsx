"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { MAIN_COLLECTIONS, CollectionFeature } from "@/data/referenceData";
import { Calendar, ArrowRight, Play, Pause, Film } from "lucide-react";

interface CollectionCardProps {
  collection: CollectionFeature;
}

function CollectionCardItem({ collection }: CollectionCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startVideoPlayback = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(true);
        });
    }
  };

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(true);
        });
    }
  };

  return (
    <div
      onMouseEnter={startVideoPlayback}
      onTouchStart={startVideoPlayback}
      className="group flex flex-col text-left"
    >
      {/* 1. Video Container with Click-to-Play/Pause */}
      <div
        onClick={togglePlayPause}
        className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-500 border border-neutral-200/80 cursor-pointer select-none"
      >
        {collection.videoUrl ? (
          <video
            ref={videoRef}
            src={collection.videoUrl}
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-400">
            <Film className="w-8 h-8" />
          </div>
        )}

        {/* Video status / toggle badge overlay (Top Right) */}
        {collection.videoUrl && (
          <div className="absolute top-3.5 right-3.5 z-20">
            <button
              onClick={togglePlayPause}
              type="button"
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold backdrop-blur-md transition-all duration-300 shadow-md ${
                isPlaying
                  ? "bg-black/75 text-white border border-white/20 hover:bg-[#ff7d86]"
                  : "bg-white/95 text-neutral-800 group-hover:bg-[#ff7d86] group-hover:text-white border border-neutral-200/60"
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 fill-white" />
                  <span>Click to Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current text-[#ff7d86] group-hover:text-white transition-colors" />
                  <span>Hover / Click to Play</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Center Play Icon when paused after having interacted */}
        {!isPlaying && collection.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-white/90 text-[#ff7d86] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-[#ff7d86] ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* 2. Text Content (Below the Video Card) */}
      <div className="pt-4 sm:pt-5 space-y-2.5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Category Tag */}
          <span className="inline-block bg-[#ffdddf] text-[#ff7d86] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {collection.category}
          </span>

          {/* Collection Title */}
          <h3 className="font-extrabold text-xl sm:text-2xl text-neutral-900 group-hover:text-[#ff7d86] transition-colors leading-tight">
            {collection.title}
          </h3>

          {/* Collection Description */}
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3 font-normal">
            {collection.description}
          </p>
        </div>

        {/* Action Link directly to Appointment / Consultation without modal */}
        <div className="pt-2">
          <Link
            href={`/appointment?service=${encodeURIComponent(collection.title)}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff7d86] hover:text-[#e85661] transition-colors group-hover:translate-x-1 duration-200"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation for this Collection</span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DesignGallery() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden" id="collections-section">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Eyebrow, Heading & Description */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff7d86] mb-1">
            OUR COLLECTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Styles with a Personal Touch
          </h2>
          <div className="ref-divider">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Explore distinctive styles that bring together traditional influences, contemporary design and personalised tailoring.
          </p>
        </div>

        {/* 3 Featured Collection Cards with Video & Text Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {MAIN_COLLECTIONS.map((col) => (
            <CollectionCardItem
              key={col.id}
              collection={col}
            />
          ))}
        </div>

        {/* Section Primary CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <Link
            href="/product-gallery/"
            className="inline-flex items-center gap-2 bg-[#ff7d86] hover:bg-[#e85661] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>VIEW PRODUCT CATALOGUE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}


