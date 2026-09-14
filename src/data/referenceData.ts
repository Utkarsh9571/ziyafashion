// Centralized reference & showcase data for Ziya Fashion
// Visual structure strictly mirrors the reference screenshots

export interface NavItem {
  name: string;
  href: string;
  badge?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/designs" },
  { name: "Deals", href: "/#deals" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export interface PremiumShadeItem {
  id: string;
  title: string;
  ctaText: string;
  bgClass: string; // Tailored pill background styling
  modelImage: string;
  href: string;
}

export const PREMIUM_SHADES_DATA: PremiumShadeItem[] = [
  {
    id: "ps-1",
    title: "Women Gallery",
    ctaText: "Click Now",
    bgClass: "bg-[#ff9999]/90 text-white",
    modelImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    href: "/designs",
  },
  {
    id: "ps-2",
    title: "Children Fashion",
    ctaText: "Click Now",
    bgClass: "bg-[#e5a038] text-white",
    modelImage: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80",
    href: "/designs",
  },
  {
    id: "ps-3",
    title: "Men's Fashion",
    ctaText: "Click Now",
    bgClass: "bg-[#d8c3c1] text-white",
    modelImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    href: "/designs",
  },
  {
    id: "ps-4",
    title: "Women's Fashion",
    ctaText: "Click Now",
    bgClass: "bg-[#795d52] text-white",
    modelImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    href: "/designs",
  },
];

export interface CategoryTab {
  id: string;
  name: string;
  iconName: "all" | "dresses" | "tshirts" | "denim" | "jackets" | "coats" | "shoes";
}

export const CATEGORY_TABS: CategoryTab[] = [
  { id: "all", name: "All", iconName: "all" },
  { id: "dresses", name: "Dresses", iconName: "dresses" },
  { id: "tshirts", name: "T-shirts", iconName: "tshirts" },
  { id: "denim", name: "Denim", iconName: "denim" },
  { id: "jackets", name: "Jackets", iconName: "jackets" },
  { id: "coats", name: "Coats", iconName: "coats" },
  { id: "shoes", name: "Shoes", iconName: "shoes" },
];

export interface ProductGridItem {
  id: string;
  title: string;
  materialInfo?: string;
  badge?: string;
  badgeColor?: string;
  imageUrl: string;
  category: string;
  isFadedBg?: boolean;
}

export const REFERENCE_PRODUCT_GRID: ProductGridItem[] = [
  {
    id: "grid-1",
    title: "Black Satin Slip Look",
    badge: "20%",
    category: "dresses",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "grid-2",
    title: "Pink Cropped Knit & Chartreuse Skirt",
    category: "tshirts",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "grid-3",
    title: "Short Party Dress",
    materialInfo: "Technical Teffeta Jacquad with jouy Motif",
    badge: "New",
    badgeColor: "bg-[#ff5252]",
    category: "dresses",
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "grid-4",
    title: "Tailored Noir Tux & Shimmer Gown",
    category: "jackets",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "grid-5",
    title: "Monochrome Plaid & Denim Ensemble",
    category: "denim",
    imageUrl: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "grid-6",
    title: "Crimson Buffalo Check Tie Top",
    category: "tshirts",
    imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "grid-7",
    title: "Camel Trench Coat & Fedora",
    category: "coats",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "grid-8",
    title: "Rust Floral Pleated Midi Dress",
    badge: "Sale",
    category: "dresses",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
  },
];

export interface TrendingItem {
  id: string;
  title: string;
  priceDisplay?: string;
  badge?: string;
  isSpotlight?: boolean;
  imageUrl: string;
}

export const TRENDING_ITEMS: TrendingItem[] = [
  {
    id: "tr-1",
    title: "Ladies Shirt",
    priceDisplay: "$20.00",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tr-2",
    title: "Ladies T-Shirt",
    priceDisplay: "$50.00",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tr-3",
    title: "Ladies Suits",
    priceDisplay: "$29.00",
    badge: "Hot",
    isSpotlight: true,
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tr-4",
    title: "Ladies Dress",
    priceDisplay: "$30.00",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  imageUrl: string;
}

export const REFERENCE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    name: "SONIYA DEVIL",
    role: "RESENT REVIEW",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo nulla pariatur.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "t-2",
    name: "CANDY MILLER",
    role: "RESENT REVIEW",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo laboris nisi ut aliquip ex ea commodo nulla pariatur.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "t-3",
    name: "DR. BRITT BRAKER",
    role: "RESENT REVIEW",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo laboris nisi ut aliquip ex ea commodo nulla pariatur.",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
  },
];

export const INSTAGRAM_STRIP_PHOTOS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
];
