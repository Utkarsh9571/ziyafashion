import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { getAllBlogPosts } from "@/data/blogData";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ziya Journal — Fashion Inspiration, Tailoring Tips & Styling Guides",
  description:
    "Welcome to the Ziya Journal — your destination for fashion inspiration, styling ideas, tailoring tips, and the latest trends in Singapore.",
};

export default function BlogListingPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Full-Width Hero Section */}
      <section className="w-full bg-[#ff5252] text-white overflow-hidden relative">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-16 sm:pb-20 lg:pb-24 text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/95 uppercase mb-2">
            EDITORIAL &amp; INSIGHTS
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            The Ziya Journal
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-white/95 font-medium max-w-2xl mx-auto leading-relaxed">
            Welcome to the Ziya Journal — your destination for fashion inspiration, styling ideas, tailoring tips, and the latest trends. Discover thoughtful guides and insights designed to help you find your perfect style and fit.
          </p>
        </div>
      </section>

      {/* Main Blog Grid */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#ff5252] mb-1">
            LATEST ARTICLES
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight">
            Stories, Tailoring Insights &amp; Style Guides
          </h2>
          <div className="ref-divider">
            <span className="ref-dot" />
            <span className="ref-dot-lg" />
            <span className="ref-dot" />
          </div>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-[#f9fafb] rounded-[28px] overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Article Featured Image */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="block relative aspect-[16/10] w-full overflow-hidden bg-neutral-200"
                >
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {post.category && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#ff5252] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </div>
                  )}
                </Link>

                {/* Article Summary Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#ff5252]" />
                      {post.date}
                    </span>
                    {post.readTime && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#ff5252]" />
                        {post.readTime}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#212529] group-hover:text-[#ff5252] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#ff5252] group-hover:translate-x-1 transition-transform uppercase tracking-wider"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
