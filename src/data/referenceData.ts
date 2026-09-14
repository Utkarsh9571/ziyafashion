// Centralized data for Ziya Fashion
// Real business & collection mappings for Ziya Fashion (Singapore)

export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/designs" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export interface AudienceQuickLink {
  id: string;
  title: string;
  ctaText: string;
  bgClass: string;
  modelImage: string;
  href: string;
}

export const AUDIENCE_QUICK_LINKS: AudienceQuickLink[] = [
  {
    id: "aud-women",
    title: "Women",
    ctaText: "Explore",
    bgClass: "bg-[#ff9999]/90 text-white",
    modelImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    href: "/designs",
  },
  {
    id: "aud-men",
    title: "Men",
    ctaText: "Explore",
    bgClass: "bg-[#e5a038] text-white",
    modelImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    href: "/designs",
  },
  {
    id: "aud-kids",
    title: "Kids",
    ctaText: "Explore",
    bgClass: "bg-[#d8c3c1] text-white",
    modelImage: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80",
    href: "/designs",
  },
  {
    id: "aud-bespoke",
    title: "Bespoke",
    ctaText: "Explore",
    bgClass: "bg-[#795d52] text-white",
    modelImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    href: "/services",
  },
];

export interface CollectionFeature {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export const MAIN_COLLECTIONS: CollectionFeature[] = [
  {
    id: "col-indo-western",
    title: "Indo-Western Collection",
    description: "Discover contemporary styles that beautifully blend traditional elegance with modern silhouettes, designed for a sophisticated and effortless look.",
    category: "Contemporary & Fusion",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "col-pakistani",
    title: "Pakistani Collection",
    description: "Discover elegant Pakistani styles featuring graceful silhouettes, intricate details and timeless craftsmanship.",
    category: "Traditional & Festive",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "col-signature",
    title: "Signature Collection",
    description: "Explore signature styles designed to blend classic elegance with modern sophistication, with attention to detail and refined craftsmanship.",
    category: "Bespoke Couture",
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
  },
];

export interface TailoringService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
}

export const TAILORING_SERVICES: TailoringService[] = [
  {
    id: "srv-alterations",
    title: "Alterations & Fittings",
    description: "Professional alterations and adjustments to achieve the right fit, finish and comfort.",
    iconName: "Maximize2",
    imageUrl: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-womens",
    title: "Women's Tailoring",
    description: "Custom-made dresses, blouses, sarees, suits and traditional wear, tailored to your measurements and personal style.",
    iconName: "Scissors",
    imageUrl: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-bridal",
    title: "Bridal Wear",
    description: "Beautifully tailored bridal gowns, lehengas and wedding outfits designed for your special occasion.",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-traditional",
    title: "Indian & Malay Wear",
    description: "Bespoke sarees, salwar suits, lehengas, baju kurung, kebaya and other traditional styles.",
    iconName: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
  },
];

export interface OccasionStyle {
  id: string;
  title: string;
  categoryTag: string;
  imageUrl: string;
}

export const OCCASION_STYLES: OccasionStyle[] = [
  {
    id: "occ-1",
    title: "Women's Wear",
    categoryTag: "Tailored & Bespoke",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "occ-2",
    title: "Men's Wear",
    categoryTag: "Custom Tailoring",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "occ-3",
    title: "Kids' Wear",
    categoryTag: "Occasion Tailoring",
    imageUrl: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "occ-4",
    title: "Bridal & Traditional Wear",
    categoryTag: "Celebration Couture",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
  },
];

export const INSTAGRAM_STRIP_PHOTOS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  imageUrl: string;
}

export const CUSTOMER_REVIEWS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Verified Client",
    role: "Bespoke Tailoring",
    text: "Meticulous craftsmanship and precise measurements for custom-made outfits with an attentive consultation process.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-2",
    name: "Verified Client",
    role: "Bridal & Traditional Wear",
    text: "Intricate details and graceful silhouettes tailored specifically for special occasions and weddings.",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-3",
    name: "Verified Client",
    role: "Alterations & Fitting",
    text: "Professional alteration and adjustment services that ensure garments fit with elegance and comfort.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

export const REFERENCE_TESTIMONIALS = CUSTOMER_REVIEWS;

export const VERIFIED_CONTACT_INFO = {
  brandName: "Ziya Fashion",
  tagline: "Singapore's Destination for Bespoke Tailoring & Timeless Style",
  address: "02-18 Golden Landmark, 390 Victoria Street, Singapore 188061",
  addressLine1: "02-18 Golden Landmark",
  addressLine2: "390 Victoria Street, Singapore 188061",
  phone: "+65 8363 6036",
  email: "admin@ziyafashion.net",
  hours: "Monday – Saturday: 12pm – 7pm | Sunday: Closed",
  hoursWeekdays: "Mon - Sat : 12:00 PM – 7:00 PM",
  hoursSunday: "Sunday : Closed",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/6583636036",
  },
};

