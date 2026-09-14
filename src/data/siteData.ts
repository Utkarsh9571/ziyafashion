// Centralized placeholder data for Ziya Fashion Brand
// Note: Clearly identifiable placeholder content for layout demonstration until real Ziya Fashion assets are supplied.

export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Designs", href: "/designs" },
  { name: "Contact", href: "/contact" },
];

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  imageUrl: string;
  themeColor: string; // pill background color
  href: string;
}

export const FEATURED_COLLECTIONS: CollectionItem[] = [
  {
    id: "col-1",
    title: "Women's Gallery",
    subtitle: "Curated Silhouette Showcase",
    badge: "Explore",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    themeColor: "bg-[#f8a5a5]/80 text-white",
    href: "/designs?category=all",
  },
  {
    id: "col-2",
    title: "Bridal Couture",
    subtitle: "Custom Ceremonial Wear",
    badge: "Explore",
    imageUrl: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80",
    themeColor: "bg-[#d97706]/85 text-white",
    href: "/designs?category=bridal",
  },
  {
    id: "col-3",
    title: "Ethnic & Festive",
    subtitle: "Handcrafted Heritage Pieces",
    badge: "Explore",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    themeColor: "bg-[#9ca3af]/90 text-white",
    href: "/designs?category=ethnic",
  },
  {
    id: "col-4",
    title: "Contemporary Chic",
    subtitle: "Modern Editorial Cuts",
    badge: "Explore",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    themeColor: "bg-[#6b7280]/90 text-white",
    href: "/designs?category=contemporary",
  },
];

export interface CategoryFilterItem {
  id: string;
  name: string;
  iconType: "all" | "dresses" | "ethnic" | "party" | "jackets" | "tailoring";
}

export const CATEGORY_FILTERS: CategoryFilterItem[] = [
  { id: "all", name: "All Designs", iconType: "all" },
  { id: "bridal", name: "Bridal Wear", iconType: "dresses" },
  { id: "ethnic", name: "Ethnic Couture", iconType: "ethnic" },
  { id: "party", name: "Party & Evening", iconType: "party" },
  { id: "contemporary", name: "Contemporary", iconType: "jackets" },
  { id: "custom", name: "Bespoke Tailoring", iconType: "tailoring" },
];

export interface DesignItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  imageUrl: string;
  tag?: string;
  isCoralBg?: boolean;
}

export const DESIGN_PORTFOLIO: DesignItem[] = [
  {
    id: "des-1",
    title: "Silk Slip Dress (Sample Concept)",
    category: "Contemporary Wear",
    categorySlug: "contemporary",
    description: "Tailored minimal evening slip dress with clean bias cut finish.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    tag: "Trending",
    isCoralBg: true,
  },
  {
    id: "des-2",
    title: "Pastel Knit Ensemble (Sample Concept)",
    category: "Party & Evening",
    categorySlug: "party",
    description: "Soft cropped pastel silhouette crafted with comfortable texture.",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    tag: "New",
    isCoralBg: true,
  },
  {
    id: "des-3",
    title: "Faux Fur Statement Coat (Sample Concept)",
    category: "Contemporary Wear",
    categorySlug: "contemporary",
    description: "Bold plush evening wear with textured collar details.",
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    tag: "Signature",
    isCoralBg: false,
  },
  {
    id: "des-4",
    title: "Tailored Blazer & Gown (Sample Concept)",
    category: "Bridal Wear",
    categorySlug: "bridal",
    description: "Monochrome structured blazer paired with sequin inner bodice.",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    tag: "Bespoke",
    isCoralBg: true,
  },
  {
    id: "des-5",
    title: "Casual Tailored Check Shirt (Sample Concept)",
    category: "Contemporary Wear",
    categorySlug: "contemporary",
    description: "Relaxed fit made-to-measure flannel with roll-cuff finishing.",
    imageUrl: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
    isCoralBg: true,
  },
  {
    id: "des-6",
    title: "Cropped Plaid Tie-Blouse (Sample Concept)",
    category: "Party & Evening",
    categorySlug: "party",
    description: "Retro-inspired custom fit crop blouse with tie front detail.",
    imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    isCoralBg: true,
  },
  {
    id: "des-7",
    title: "Wool Trench & Fedora (Sample Concept)",
    category: "Bespoke Tailoring",
    categorySlug: "custom",
    description: "Precision-tailored camel wool coat featuring hand-stitched lapels.",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    isCoralBg: true,
  },
  {
    id: "des-8",
    title: "Printed Rust Midi Dress (Sample Concept)",
    category: "Ethnic Couture",
    categorySlug: "ethnic",
    description: "Pleated motif print dress tailored with flattering waist cinching.",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    tag: "Featured",
    isCoralBg: true,
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  imageUrl: string;
  features: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Custom Tailoring",
    tagline: "Tailored to your exact measurements",
    description: "Personalized tailoring created around your unique measurements, preferences, and personal style for a flawless fit.",
    iconName: "Scissors",
    imageUrl: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Precise multi-point body measurements",
      "Fabric drape analysis & structure testing",
      "Multiple fitting sessions for perfection",
      "Handcrafted fine finishing details",
    ],
  },
  {
    id: "srv-2",
    title: "Custom Design & Couture",
    tagline: "From concept sketch to finished outfit",
    description: "Work closely with our design team to co-create bespoke pieces perfectly aligned with your upcoming occasion and aesthetic vision.",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    features: [
      "One-on-one design ideation & sketches",
      "Exclusive embroidery & embellishment curation",
      "Bespoke bridal & celebratory attire",
      "Comprehensive styling guidance",
    ],
  },
  {
    id: "srv-3",
    title: "Precision Alterations",
    tagline: "Refining fit, silhouette & comfort",
    description: "Expert garment alterations to reshape, resize, and elevate your existing wardrobe pieces to complement your proportions.",
    iconName: "Maximize2",
    imageUrl: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80",
    features: [
      "Hems, waist tapering, and shoulder adjustment",
      "Lining replacement & zip restoration",
      "Restyling of classic silhouettes",
      "Fast, meticulous garment handling",
    ],
  },
  {
    id: "srv-4",
    title: "Style & Fabric Consultation",
    tagline: "Expert advice on fabrics and silhouettes",
    description: "One-on-one consultation discussing fabrics, silhouettes, color palettes, and structural details best suited for you.",
    iconName: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    features: [
      "Color theory and complexion matching",
      "Fabric hand-feel and weight selection",
      "Occasion-specific moodboards",
      "Wardrobe integration guidance",
    ],
  },
];

export interface FeaturedTrendItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tag?: string;
  isCoralBg?: boolean;
}

export const FEATURED_TRENDS: FeaturedTrendItem[] = [
  {
    id: "tr-1",
    number: "01",
    title: "Linen Co-ord Set (Sample Concept)",
    category: "Casual Chic",
    description: "Lightweight summer tailoring with clean contrast buttons.",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tr-2",
    number: "02",
    title: "Velvet Evening Silhouette (Sample Concept)",
    category: "Party Wear",
    description: "Deep noir plunge gown with gold buckle accent.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tr-3",
    number: "03",
    title: "Structured Trouser Suit (Sample Concept)",
    category: "Bespoke Tailoring",
    description: "Precision notched collar suit paired with wide-leg trousers.",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
    tag: "Hot Selection",
    isCoralBg: true,
  },
  {
    id: "tr-4",
    number: "04",
    title: "Tiered Crimson Gown (Sample Concept)",
    category: "Festive Couture",
    description: "Dramatic flounce sleeves and delicate tiered skirt.",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
  },
];

export interface TestimonialItem {
  id: string;
  clientName: string;
  occasion: string;
  comment: string;
  avatarUrl: string;
}

export const PLACEHOLDER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    clientName: "Client Review (Placeholder)",
    occasion: "Bespoke Bridal Tailoring",
    comment: "The precision and attention to detail during the fitting sessions were extraordinary. The final outfit draped exactly as imagined.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t-2",
    clientName: "Client Review (Placeholder)",
    occasion: "Custom Design & Consultation",
    comment: "From the first fabric selection to the completed garment, the atelier experience was seamless, elegant, and personal.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t-3",
    clientName: "Client Review (Placeholder)",
    occasion: "Evening Wear Alteration & Fit",
    comment: "Transformed an intricate dress to fit my proportions flawlessly. Exceptional craftsmanship and warm service.",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
];

export const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
];

export const BRAND_CONTACT_INFO = {
  brandName: "Ziya Fashion",
  tagline: "Timeless Fashion, Tailored to You",
  address: "Fashion Studio / Atelier (Address to be provided)",
  phone: "+ (Phone number to be provided)",
  email: "hello@ziyafashion.com (Sample)",
  hours: "Monday – Saturday: 10:00 AM – 8:00 PM (By Appointment)",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://whatsapp.com",
  },
};
