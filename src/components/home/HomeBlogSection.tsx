import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "@/data/blogData";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function HomeBlogSection() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section className="w-full py-14 sm:py-20 bg-white overflow-hidden" id="journal-section">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff5252] mb-1">
            THE ZIYA JOURNAL
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Stories, Tailoring Insights &amp; Style Guides
          </h2>
          <div className="ref-divider">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Explore tailoring tips, style inspiration, and thoughtful guides to help you choose the right fit, fabric, and style.
          </p>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-[#f9fafb] rounded-[28px] overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block relative aspect-[16/10] w-full overflow-hidden bg-neutral-200"
                >
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {post.category && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#ff5252] text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </div>
                  )}
                </Link>

                <div className="p-5 sm:p-6 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-neutral-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#ff5252]" />
                      {post.date}
                    </span>
                    {post.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#ff5252]" />
                        {post.readTime}
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-lg sm:text-xl text-[#212529] group-hover:text-[#ff5252] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5252] hover:opacity-80 transition-opacity"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Read More Stories Action */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#ff5252] hover:bg-[#f03e3e] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <span>READ MORE STORIES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
