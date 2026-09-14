// Centralized Blog Data for Ziya Fashion Journal

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  date: string;
  category?: string;
  readTime?: string;
  author?: string;
  content: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "The Art of Tailoring",
    slug: "the-art-of-tailoring",
    excerpt:
      "Discover the dedication, precision measurements, and bespoke craftsmanship that transform fine fabrics into a truly personal garment.",
    featuredImage:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1200&q=80",
    date: "12 May 2026",
    category: "Tailoring Craft",
    readTime: "4 min read",
    author: "Ziya Atelier",
    content: [
      {
        heading: "Crafting a Silhouette Around You",
        paragraphs: [
          "True tailoring begins not with scissors or fabric, but with understanding the wearer. Every person carries a unique posture, lifestyle, and individual sense of comfort. When a garment is created around your exact measurements, it moves naturally with you throughout the day.",
          "In bespoke garment construction, precision is paramount. From the slope of the shoulder to the precise taper of the waist and the drape of the hem, our tailors carefully measure multi-point dimensions to construct a balanced, flattering silhouette.",
        ],
      },
      {
        heading: "The Integrity of Construction and Finishing",
        paragraphs: [
          "Behind every well-fitted outfit lies a foundation of thoughtful craftsmanship. Internal structuring, clean seam allowances, hand-aligned patterns, and resilient stitching ensure that garments retain their structure wear after wear.",
          "Whether working with delicate bridal silks, structured suit wools, or fluid traditional fabrics like georgette and chiffon, the tailoring process respects the nature of the textile to achieve a refined, durable finish.",
        ],
      },
      {
        heading: "Fittings as a Collaborative Process",
        paragraphs: [
          "A bespoke tailoring journey is a partnership. During consultations and fitting sessions, small refinements—such as sleeve adjustments, neck drop refinement, or silhouette tapering—ensure the final garment feels effortless and empowering.",
        ],
      },
    ],
  },
  {
    id: "post-2",
    title: "Style That Lasts",
    slug: "style-that-lasts",
    excerpt:
      "A thoughtful guide to building a timeless wardrobe through tailored essentials, versatile cuts, and fabrics designed to endure.",
    featuredImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80",
    date: "28 April 2026",
    category: "Style & Wardrobe",
    readTime: "3 min read",
    author: "Ziya Atelier",
    content: [
      {
        heading: "Moving Beyond Fast Fashion",
        paragraphs: [
          "Trends come and go with each passing season, but personal style and impeccable fit remain timeless. Investing in well-crafted, made-to-measure garments creates a wardrobe that transcends fleeting aesthetics.",
          "When clothing fits impeccably, it brings an innate confidence that off-the-rack sizing simply cannot replicate. A tailored outfit is designed to be cherished, worn repeatedly, and adapted over time.",
        ],
      },
      {
        heading: "The Power of Classic Staples",
        paragraphs: [
          "Whether it is a sharp women's trouser suit, an elegant Jubah, an exquisitely draped saree blouse, or a bespoke jacket, versatile pieces form the backbone of a refined wardrobe. Neutral tones, rich textures, and thoughtful accents make each piece easy to style across multiple occasions.",
          "By choosing durable textiles and timeless silhouettes, you build an ensemble of garments that look as relevant years from now as they do today.",
        ],
      },
      {
        heading: "Caring for Tailored Garments",
        paragraphs: [
          "Quality clothing deserves proper care. Professional alterations, gentle pressing, and breathable storage help maintain the drape and fabric integrity of your tailored investment pieces for years to come.",
        ],
      },
    ],
  },
  {
    id: "post-3",
    title: "A Guide to Comfort & Style",
    slug: "a-guide-to-comfort-style",
    excerpt:
      "Explore how tailored design balances ease of movement, breathable textiles, and sophisticated aesthetics for everyday and festive wear.",
    featuredImage:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    date: "15 April 2026",
    category: "Tailoring Insights",
    readTime: "4 min read",
    author: "Ziya Atelier",
    content: [
      {
        heading: "The Harmony of Fit and Ease",
        paragraphs: [
          "Fashion should never come at the expense of comfort. A truly great outfit allows effortless movement while maintaining a clean, structured appearance. This balance is achieved through careful pattern drafting and fabric selection.",
          "In warm climates like Singapore, fabric choice plays a vital role. Natural fibers such as lightweight cottons, breathable linens, fine silks, and airy georgettes allow skin breathability while draping with grace.",
        ],
      },
      {
        heading: "Tailoring Traditional and Contemporary Wear",
        paragraphs: [
          "From traditional Malay styles like Baju Kurung and Kebaya to Indian silhouettes like lehengas and salwar suits, the secret to effortless wear lies in tailored ease. Sleeve armholes, waist ease, and skirt lengths are customized so you feel relaxed throughout celebrations and daily routines.",
          "Professional alterations also breathe new life into existing pieces, adjusting tight seams or refining proportions to restore both comfort and modern appeal.",
        ],
      },
      {
        heading: "Personalised Details that Matter",
        paragraphs: [
          "From pocket placement and breathable linings to discreet fastenings, bespoke tailoring incorporates subtle details that enhance everyday comfort while elevating your personal aesthetic.",
        ],
      },
    ],
  },
];

// Helper Functions for Blog Queries
export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 2): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
