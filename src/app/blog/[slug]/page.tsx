import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import EnquiryForm from "@/components/common/EnquiryForm";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/data/blogData";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found — Ziya Fashion",
    };
  }

  return {
    title: `${post.title} — The Ziya Journal`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Ziya Fashion Journal`,
      description: post.excerpt,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 2);

  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Main Article Container */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
        
        {/* Navigation Breadcrumb & Back Action */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-[#ff5252] transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-[#ff5252]" />
            <span>Back to Journal</span>
          </Link>
        </div>

        {/* Article Header & Title */}
        <header className="max-w-4xl mx-auto text-center space-y-4 mb-10">
          {post.category && (
            <div className="inline-block bg-[#ffebee] text-[#ff5252] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              {post.category}
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-neutral-500 font-medium pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#ff5252]" />
              {post.date}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#ff5252]" />
                {post.readTime}
              </span>
            )}
            {post.author && (
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#ff5252]" />
                {post.author}
              </span>
            )}
          </div>
        </header>

        {/* Large Featured Image */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative aspect-[16/9] w-full rounded-[32px] overflow-hidden shadow-xl bg-neutral-200">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </div>

        {/* Article Prose Body */}
        <article className="max-w-3xl mx-auto space-y-10 text-neutral-800 font-sans">
          
          {/* Excerpt Lead Paragraph */}
          <div className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed border-l-4 border-[#ff5252] pl-5 sm:pl-6 py-1 bg-neutral-50 rounded-r-2xl">
            {post.excerpt}
          </div>

          {/* Structured Content Sections */}
          {post.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight pt-4">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}

          {/* Highlight Callout Box */}
          <div className="bg-[#ffebee]/60 border border-[#ff5252]/20 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-[#ff5252] font-bold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Tailoring Advice at Ziya Fashion</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Have a style idea or looking for personalized tailoring in Singapore? Our experienced tailors at Golden Landmark are available for private consultations, custom measurements, and precision alterations.
            </p>
          </div>
        </article>

        {/* Contact Form Section on Blog Detail Page */}
        <section className="max-w-3xl mx-auto mt-16 sm:mt-24 pt-8 border-t border-neutral-200">
          <EnquiryForm
            title="Have a Question?"
            subtitle="Whether you are looking for tailoring advice, alterations, or a custom garment, we would be happy to hear from you."
            defaultService={`Inquiry regarding ${post.title}`}
          />
        </section>

        {/* Related Posts Section — Interconnect all 3 articles */}
        <section className="max-w-4xl mx-auto mt-16 sm:mt-24 pt-10 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5252] mb-1 block">
                CONTINUE READING
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight">
                More From The Ziya Journal
              </h3>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ff5252] hover:underline uppercase tracking-wider"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {relatedPosts.map((related) => (
              <div
                key={related.id}
                className="group bg-[#f9fafb] rounded-[24px] overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="block relative aspect-[16/10] w-full overflow-hidden bg-neutral-200"
                  >
                    <Image
                      src={related.featuredImage}
                      alt={related.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                  </Link>
                  <div className="p-5 sm:p-6 space-y-2">
                    <div className="text-[11px] text-neutral-500 font-medium">
                      {related.date}
                    </div>
                    <h4 className="font-extrabold text-lg text-[#212529] group-hover:text-[#ff5252] transition-colors leading-snug">
                      <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                    </h4>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {related.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href={`/blog/${related.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5252] hover:opacity-80 transition-opacity"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
