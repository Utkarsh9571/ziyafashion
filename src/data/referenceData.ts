// Centralized data for Ziya Fashion
// Real business & collection mappings for Ziya Fashion (Singapore)

export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Blog", href: "/blog" },
  { name: "Our Services", href: "/services" },
  { name: "Product Catalogue", href: "/product-gallery/" },
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
    title: "WOMEN",
    ctaText: "Explore",
    bgClass: "bg-[#ff9999]/90 text-white",
    // TODO: Replace with original WordPress asset for Women
    modelImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    href: "/product-gallery/",
  },
  {
    id: "aud-men",
    title: "MEN",
    ctaText: "Explore",
    bgClass: "bg-[#e5a038] text-white",
    // TODO: Replace with original WordPress asset for Men
    modelImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    href: "/product-gallery/",
  },
  {
    id: "aud-kids",
    title: "KIDS",
    ctaText: "Explore",
    bgClass: "bg-[#d8c3c1] text-white",
    // TODO: Replace with original WordPress asset for Kids
    modelImage: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80",
    href: "/product-gallery/",
  },
  {
    id: "aud-bespoke",
    title: "BESPOKE",
    ctaText: "Explore",
    bgClass: "bg-[#795d52] text-white",
    // TODO: Replace with original WordPress asset for Bespoke
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
    description: "Discover contemporary styles that beautifully blend traditional elegance with modern silhouettes, designed for a sophisticated look with a fresh, effortless appeal.",
    category: "Contemporary & Fusion",
    // TODO: Replace with original WordPress asset:
    // Old site location: homepage / Our Collection / Item 1 (Indo-Western Collection)
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "col-pakistani",
    title: "Pakistani Collection",
    description: "Discover elegant Pakistani styles featuring graceful silhouettes, intricate details, and timeless craftsmanship. A collection designed for those who love sophisticated traditional fashion.",
    category: "Traditional & Festive",
    // TODO: Replace with original WordPress asset:
    // Old site location: homepage / Our Collection / Item 2 (Pakistani Collection)
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "col-signature",
    title: "Signature Collection",
    description: "Explore our signature styles, thoughtfully designed to blend classic elegance with modern sophistication. Each piece reflects our attention to detail and refined craftsmanship.",
    category: "Bespoke Couture",
    // TODO: Replace with original WordPress asset:
    // Old site location: homepage / Our Collection / Item 3 (Signature Collection)
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

// 4 Preview Cards for Homepage
export const TAILORING_SERVICES: TailoringService[] = [
  {
    id: "srv-bespoke",
    title: "Bespoke Tailoring",
    description: "Custom-made garments created around your measurements, preferred style and occasion.",
    iconName: "Scissors",
    imageUrl: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-bridal-wedding",
    title: "Bridal & Wedding Wear",
    description: "Personalised bridal and wedding outfits tailored with attention to fit, detail and finishing.",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-traditional",
    title: "Traditional Wear",
    description: "Tailoring for Indian and Malay traditional styles, from sarees and lehengas to Baju Kurung and Jubah.",
    iconName: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-alterations",
    title: "Alterations & Fittings",
    description: "Professional adjustments to improve the fit, length and finishing of your existing garments.",
    iconName: "Maximize2",
    imageUrl: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80",
  },
];

// Full Services List for "Our Services" Page
export interface DetailedService {
  id: string;
  number: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  imageUrl: string;
  iconName: string;
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: "svc-01",
    number: "01",
    title: "Bespoke & Made-to-Measure",
    description: "For something truly personal, we create garments around your measurements, preferred silhouette, fabric, details and finishing.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Bespoke%20%26%20Made-to-Measure",
    imageUrl: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
    iconName: "Scissors",
  },
  {
    id: "svc-02",
    number: "02",
    title: "Custom Tailoring",
    description: "Bring your preferred style, fabric or design idea and work with us to create a garment tailored to your measurements and requirements.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Custom%20Tailoring",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    iconName: "Palette",
  },
  {
    id: "svc-03",
    number: "03",
    title: "Alteration & Adjustment",
    description: "Refine the fit, length, sleeves, waist or overall shape of your existing garments with professional alteration and fitting services.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Alteration%20%26%20Adjustment",
    imageUrl: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80",
    iconName: "Maximize2",
  },
  {
    id: "svc-04",
    number: "04",
    title: "Bridal & Wedding Wear",
    description: "Tailored bridal and wedding outfits created for important occasions, with attention to fit, detailing and the finishing touches that make each garment personal.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Bridal%20%26%20Wedding%20Wear",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    iconName: "Sparkles",
  },
  {
    id: "svc-05",
    number: "05",
    title: "Women's Tailoring",
    description: "From everyday outfits to evening, party and special-occasion wear, garments are tailored to your measurements and preferred style.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Women%27s%20Tailoring",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    iconName: "Scissors",
  },
  {
    id: "svc-06",
    number: "06",
    title: "Men's Tailoring",
    description: "Professional tailoring and alterations for shirts, trousers, suits, jackets, waistcoats and selected traditional wear.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Men%27s%20Tailoring",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    iconName: "Maximize2",
  },
  {
    id: "svc-07",
    number: "07",
    title: "Indian & Malay Wear",
    description: "Custom tailoring and alterations for sarees, blouses, salwar suits, lehengas, Baju Kurung, Kebaya, Baju Melayu and other traditional wear.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Indian%20%26%20Malay%20Wear",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    iconName: "Palette",
  },
  {
    id: "svc-08",
    number: "08",
    title: "Fittings & Finishing",
    description: "Careful fitting and finishing help ensure the garment sits comfortably and achieves the look intended during the consultation and tailoring process.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Fittings%20%26%20Finishing",
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    iconName: "Sparkles",
  },
];

export const TRADITIONAL_WEAR_ITEMS = [
  "Sarees & Blouses",
  "Salwar Suits",
  "Lehengas",
  "Baju Kurung",
  "Baju Melayu",
  "Kebaya",
  "Jubah",
  "Other Traditional Wear",
];

export const WHY_CHOOSE_ZIYA_FEATURES = [
  {
    id: "feat-fit",
    title: "Perfect Fit",
    description: "Tailored around your measurements and preferences, because the right fit makes all the difference.",
    iconName: "Scissors",
  },
  {
    id: "feat-craft",
    title: "Expert Craftsmanship",
    description: "Careful stitching, precise alterations and attention to detail in every garment.",
    iconName: "Sparkles",
  },
  {
    id: "feat-service",
    title: "Personalised Service",
    description: "We take the time to understand your requirements and provide tailoring solutions suited to each garment and occasion.",
    iconName: "Heart",
  },
  {
    id: "feat-allinone",
    title: "All-In-One Tailoring",
    description: "From Indian and Malay wear to bridal outfits, everyday clothing and alterations, our services cover a wide range of tailoring needs.",
    iconName: "Palette",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description: "Discuss your garment, occasion, preferred style and tailoring requirements with our team.",
  },
  {
    step: "02",
    title: "Measurements",
    description: "Measurements and fitting requirements are taken to establish the foundation for your garment.",
  },
  {
    step: "03",
    title: "Tailoring & Fittings",
    description: "The garment is tailored according to the agreed requirements, with fitting adjustments where needed.",
  },
  {
    step: "04",
    title: "Final Fitting",
    description: "Final checks and finishing help ensure the garment is ready for you.",
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
    id: "occ-bridal",
    title: "Bridal Wear",
    categoryTag: "Wedding & Celebration",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "occ-women",
    title: "Women's Wear",
    categoryTag: "Bespoke Silhouette",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "occ-men",
    title: "Men's Wear",
    categoryTag: "Tailored Suits & Ethnic",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "occ-traditional",
    title: "Traditional Wear",
    categoryTag: "Indian & Malay Wear",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "occ-bespoke",
    title: "Bespoke Designs",
    categoryTag: "Custom Couture",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "occ-alterations",
    title: "Alterations",
    categoryTag: "Precision Fitting",
    imageUrl: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=600&q=80",
  },
];

// 12 Exact Product Catalogue Items
export interface CatalogueItem {
  id: string;
  itemNumber: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  imageUrl: string;
  category: string;
}

export const PRODUCT_CATALOGUE_ITEMS: CatalogueItem[] = [
  {
    id: "cat-01",
    itemNumber: "ITEM 01",
    title: "Bridal Lehenga Tailoring",
    description: "Bespoke lehengas crafted for your special day with a personalised fit.",
    ctaText: "Book Now →",
    href: "/appointment?service=Bridal%20Lehenga%20Tailoring",
    // TODO: Replace with original WordPress asset: Bridal Lehenga
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    category: "Bridal Wear",
  },
  {
    id: "cat-02",
    itemNumber: "ITEM 02",
    title: "Gents Suit Tailoring",
    description: "Smart and refined suits tailored for a sharp, comfortable fit.",
    ctaText: "Book Now →",
    href: "/appointment?service=Gents%20Suit%20Tailoring",
    // TODO: Replace with original WordPress asset: Gents Suit
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    category: "Men's Wear",
  },
  {
    id: "cat-03",
    itemNumber: "ITEM 03",
    title: "Baju Kahwin Tailoring",
    description: "Elegant Malaysian bridal wear tailored to your measurements and style.",
    ctaText: "Book Now →",
    href: "/appointment?service=Baju%20Kahwin%20Tailoring",
    // TODO: Replace with original WordPress asset: Baju Kahwin
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    category: "Bridal & Malay Wear",
  },
  {
    id: "cat-04",
    itemNumber: "ITEM 04",
    title: "Jubah Tailoring",
    description: "Elegant Jubah designs tailored for comfort, modesty and style.",
    ctaText: "Book Now →",
    href: "/appointment?service=Jubah%20Tailoring",
    // TODO: Replace with original WordPress asset: Jubah
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    category: "Traditional Wear",
  },
  {
    id: "cat-05",
    itemNumber: "ITEM 05",
    title: "Ready-Made Saree Tailoring",
    description: "Beautiful saree styles with professional finishing and fitting.",
    ctaText: "Book Now →",
    href: "/appointment?service=Ready-Made%20Saree%20Tailoring",
    // TODO: Replace with original WordPress asset: Ready-Made Saree
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    category: "Traditional Wear",
  },
  {
    id: "cat-06",
    itemNumber: "ITEM 06",
    title: "Pathani Suit Tailoring",
    description: "Classic Pathani suits tailored for timeless style and comfort.",
    ctaText: "Book Now →",
    href: "/appointment?service=Pathani%20Suit%20Tailoring",
    // TODO: Replace with original WordPress asset: Pathani Suit
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    category: "Men's Wear",
  },
  {
    id: "cat-07",
    itemNumber: "ITEM 07",
    title: "Gharara & Sharara Tailoring",
    description: "Traditional silhouettes customised for an elegant and personalised fit.",
    ctaText: "Book Now →",
    href: "/appointment?service=Gharara%20%26%20Sharara%20Tailoring",
    // TODO: Replace with original WordPress asset: Gharara & Sharara
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    category: "Traditional & Festive",
  },
  {
    id: "cat-08",
    itemNumber: "ITEM 08",
    title: "Women Suit",
    description: "Professionally tailored women's suits designed for a polished, confident and sophisticated look.",
    ctaText: "Book Now →",
    href: "/appointment?service=Women%20Suit",
    // TODO: Replace with original WordPress asset: Women Suit
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    category: "Women's Wear",
  },
  {
    id: "cat-09",
    itemNumber: "ITEM 09",
    title: "Baju Kurung Tailoring",
    description: "Traditional Malaysian Baju Kurung tailored with a personalised fit.",
    ctaText: "Book Now →",
    href: "/appointment?service=Baju%20Kurung%20Tailoring",
    // TODO: Replace with original WordPress asset: Baju Kurung
    imageUrl: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
    category: "Traditional Wear",
  },
  {
    id: "cat-10",
    itemNumber: "ITEM 10",
    title: "Waistcoat Tailoring",
    description: "Stylish waistcoats tailored to complement formal and traditional outfits.",
    ctaText: "Book Now →",
    href: "/appointment?service=Waistcoat%20Tailoring",
    // TODO: Replace with original WordPress asset: Waistcoat
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    category: "Men's Wear",
  },
  {
    id: "cat-11",
    itemNumber: "ITEM 11",
    title: "Modern Abaya Tailoring",
    description: "Contemporary Abaya designs tailored with elegance and comfort in mind.",
    ctaText: "Book Now →",
    href: "/appointment?service=Modern%20Abaya%20Tailoring",
    // TODO: Replace with original WordPress asset: Modern Abaya
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    category: "Modest Fashion",
  },
  {
    id: "cat-12",
    itemNumber: "ITEM 12",
    title: "Alteration & Fitting",
    description: "Professional alterations to refine the fit, length and finishing of your favourite outfits.",
    ctaText: "Book Now →",
    href: "/appointment?service=Alteration%20%26%20Fitting",
    // TODO: Replace with original WordPress asset: Alteration & Fitting
    imageUrl: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80",
    category: "Alterations",
  },
];

// Product Catalogue Benefits
export const CATALOGUE_BENEFITS = [
  {
    title: "Perfect Fit",
    description: "Every garment is thoughtfully tailored to your measurements for a comfortable and flattering fit.",
    iconName: "Scissors",
  },
  {
    title: "Personalised Designs",
    description: "From fabric and colour to details and finishing, customise your outfit to match your style and occasion.",
    iconName: "Palette",
  },
  {
    title: "Quality Craftsmanship",
    description: "Carefully crafted with attention to detail, precise stitching and refined finishing.",
    iconName: "Sparkles",
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
  location: string;
  role: string;
  text: string;
  imageUrl: string;
}

// Authentic testimonials extracted directly from the existing Ziya Fashion website (Screenshot 100640.png)
export const CUSTOMER_REVIEWS: TestimonialItem[] = [
  {
    id: "test-shirley",
    name: "Shirley",
    location: "Malaysia",
    role: "Bespoke Dress Fitting",
    text: "Great service – the visit to Ziya Fashion was definitely worthwhile, I feel that Ziya was very flexible and kind. She did our dress within 48 hrs and delivered to us at hotel on time. Thanks for your help.",
    // TODO: Replace with original WordPress asset: Photo 1 (Shirley with fabric)
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-kim",
    name: "Kim",
    location: "Hongkong",
    role: "Custom Tailoring",
    text: "Ziya was exceptionally helpful and professional throughout my contact with her. Very happy and have passed Ziya’s contact details onto several friends after the positive experience. Very highly recommended and if I come again Singapore in the future Ziya will be the first person I contact in helping me make my dress.",
    // TODO: Replace with original WordPress asset: Photo 2 (Kim with Ziya)
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-stella",
    name: "Stella",
    location: "USA",
    role: "Bridal Gown Order",
    text: "Ziya was very friendly, helpful and enthusiastic in helping me get my gown. She was very informative and kept me up to date with any news regarding my order status. Overall I am very pleased with the service I received and would definitely recommend and use Ziya Fashion again.",
    // TODO: Replace with original WordPress asset: Photo 3 (Stella with Ziya)
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



