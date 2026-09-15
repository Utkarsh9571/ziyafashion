// Centralized data for Ziya Fashion
// Real business & collection mappings for Ziya Fashion (Singapore)

export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Our Services", href: "/services" },
  { name: "Product Catalogue", href: "/product-gallery/" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
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
    bgClass: "bg-[#ff7d86]/90 text-white",
    modelImage: "/images/products/Pakistani-Bridal-Lehenga.png",
    href: "/product-gallery/",
  },
  {
    id: "aud-men",
    title: "MEN",
    ctaText: "Explore",
    bgClass: "bg-[#e5a038] text-white",
    modelImage: "/images/products/Gents Suit Tailoring.png",
    href: "/product-gallery/",
  },
  {
    id: "aud-bespoke",
    title: "BESPOKE",
    ctaText: "Explore",
    bgClass: "bg-[#795d52] text-white",
    modelImage: "/images/home/craftsman-tailoring.jpg",
    href: "/services",
  },
];

export interface CollectionFeature {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
}

export const MAIN_COLLECTIONS: CollectionFeature[] = [
  {
    id: "col-indo-western",
    title: "Indo-Western Collection",
    description: "Discover contemporary styles that beautifully blend traditional elegance with modern silhouettes, designed for a sophisticated look with a fresh, effortless appeal.",
    category: "Contemporary & Fusion",
    imageUrl: "/images/home/collection-indo-western.jpg",
    videoUrl: "/videos/collections/indo-western.mp4",
  },
  {
    id: "col-pakistani",
    title: "Pakistani Collection",
    description: "Discover elegant Pakistani styles featuring graceful silhouettes, intricate details, and timeless craftsmanship. A collection designed for those who love sophisticated traditional fashion.",
    category: "Traditional & Festive",
    imageUrl: "/images/home/collection-pakistani-formal.jpg",
    videoUrl: "/videos/collections/pakistani.mp4",
  },
  {
    id: "col-signature",
    title: "Signature Collection",
    description: "Explore our signature styles, thoughtfully designed to blend classic elegance with modern sophistication. Each piece reflects our attention to detail and refined craftsmanship.",
    category: "Bespoke Couture",
    imageUrl: "/images/home/collection-ziya-signature.jpg",
    videoUrl: "/videos/collections/signature.mp4",
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
    imageUrl: "/images/services/bespoke-made-to-measure.jpg",
  },
  {
    id: "srv-bridal-wedding",
    title: "Bridal & Wedding Wear",
    description: "Personalised bridal and wedding outfits tailored with attention to fit, detail and finishing.",
    iconName: "Sparkles",
    imageUrl: "/images/services/custom-tailoring-design.jpg",
  },
  {
    id: "srv-traditional",
    title: "Traditional Wear",
    description: "Tailoring for Indian and Malay traditional styles, from sarees and lehengas to Baju Kurung and Jubah.",
    iconName: "Palette",
    imageUrl: "/images/services/bridal-wedding-wear.jpg",
  },
  {
    id: "srv-alterations",
    title: "Alterations & Fittings",
    description: "Professional adjustments to improve the fit, length and finishing of your existing garments.",
    iconName: "Maximize2",
    imageUrl: "/images/services/alterations-restyling.jpg",
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
    imageUrl: "/images/services/BESPOKE & MADE-TO-MEASURE.jpg",
    iconName: "Scissors",
  },
  {
    id: "svc-02",
    number: "02",
    title: "Custom Tailoring",
    description: "Bring your preferred style, fabric or design idea and work with us to create a garment tailored to your measurements and requirements.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Custom%20Tailoring",
    imageUrl: "/images/services/CUSTOM TAILORING.jpg",
    iconName: "Palette",
  },
  {
    id: "svc-03",
    number: "03",
    title: "Alteration & Adjustment",
    description: "Refine the fit, length, sleeves, waist or overall shape of your existing garments with professional alteration and fitting services.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Alteration%20%26%20Adjustment",
    imageUrl: "/images/services/ALTERATION & ADJUSTMENT.jpg",
    iconName: "Maximize2",
  },
  {
    id: "svc-04",
    number: "04",
    title: "Bridal & Wedding Wear",
    description: "Tailored bridal and wedding outfits created for important occasions, with attention to fit, detailing and the finishing touches that make each garment personal.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Bridal%20%26%20Wedding%20Wear",
    imageUrl: "/images/services/Bridal & Wedding Wear.jpg",
    iconName: "Sparkles",
  },
  {
    id: "svc-05",
    number: "05",
    title: "Women's Tailoring",
    description: "From everyday outfits to evening, party and special-occasion wear, garments are tailored to your measurements and preferred style.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Women%27s%20Tailoring",
    imageUrl: "/images/services/WOMEN’S ALTERATION.png",
    iconName: "Scissors",
  },
  {
    id: "svc-06",
    number: "06",
    title: "Men's Tailoring",
    description: "Professional tailoring and alterations for shirts, trousers, suits, jackets, waistcoats and selected traditional wear.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Men%27s%20Tailoring",
    imageUrl: "/images/services/MEN’S ALTERATION.jpg",
    iconName: "Maximize2",
  },
  {
    id: "svc-07",
    number: "07",
    title: "Indian & Malay Wear",
    description: "Custom tailoring and alterations for sarees, blouses, salwar suits, lehengas, Baju Kurung, Kebaya, Baju Melayu and other traditional wear.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Indian%20%26%20Malay%20Wear",
    imageUrl: "/images/services/INDIAN & MALAY WEAR.jpg",
    iconName: "Palette",
  },
  {
    id: "svc-08",
    number: "08",
    title: "Fittings & Finishing",
    description: "Careful fitting and finishing help ensure the garment sits comfortably and achieves the look intended during the consultation and tailoring process.",
    ctaText: "Enquire Now →",
    href: "/appointment?service=Fittings%20%26%20Finishing",
    imageUrl: "/images/services/alterations-restyling.jpg",
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
    id: "occ-01",
    title: "Bridal Lehenga",
    categoryTag: "Bridal Wear",
    imageUrl: "/images/products/Pakistani-Bridal-Lehenga.png",
  },
  {
    id: "occ-02",
    title: "Gents Suit",
    categoryTag: "Men's Wear",
    imageUrl: "/images/products/Gents Suit Tailoring.png",
  },
  {
    id: "occ-03",
    title: "Baju Kahwin",
    categoryTag: "Bridal & Malay Wear",
    imageUrl: "/images/products/Baju Kahwin Tailoring.png",
  },
  {
    id: "occ-04",
    title: "Jubah Tailoring",
    categoryTag: "Traditional Wear",
    imageUrl: "/images/products/Jubah Tailoring.png",
  },
  {
    id: "occ-05",
    title: "Ready-Made Saree",
    categoryTag: "Traditional Wear",
    imageUrl: "/images/products/Ready-Made Saree Tailoring.png",
  },
  {
    id: "occ-06",
    title: "Pathani Suit",
    categoryTag: "Men's Wear",
    imageUrl: "/images/products/Pathani Suit Tailoring.png",
  },
  {
    id: "occ-07",
    title: "Gharara & Sharara",
    categoryTag: "Traditional & Festive",
    imageUrl: "/images/products/Gharara & Sharara Tailoring.png",
  },
  {
    id: "occ-08",
    title: "Women Suit",
    categoryTag: "Women's Wear",
    imageUrl: "/images/products/Women Suit.png",
  },
  {
    id: "occ-09",
    title: "Baju Kurung",
    categoryTag: "Traditional Wear",
    imageUrl: "/images/products/Baju Kurung Tailoring.png",
  },
  {
    id: "occ-10",
    title: "Waistcoat Tailoring",
    categoryTag: "Men's Wear",
    imageUrl: "/images/products/Waistcoat Tailoring.png",
  },
  {
    id: "occ-11",
    title: "Modern Abaya",
    categoryTag: "Modest Fashion",
    imageUrl: "/images/products/Modern Abaya Tailoring.png",
  },
  {
    id: "occ-12",
    title: "Alteration & Fitting",
    categoryTag: "Alterations",
    imageUrl: "/images/products/Alteration & Fitting.png",
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
    imageUrl: "/images/products/Pakistani-Bridal-Lehenga.png",
    category: "Bridal Wear",
  },
  {
    id: "cat-02",
    itemNumber: "ITEM 02",
    title: "Gents Suit Tailoring",
    description: "Smart and refined suits tailored for a sharp, comfortable fit.",
    ctaText: "Book Now →",
    href: "/appointment?service=Gents%20Suit%20Tailoring",
    imageUrl: "/images/products/Gents Suit Tailoring.png",
    category: "Men's Wear",
  },
  {
    id: "cat-03",
    itemNumber: "ITEM 03",
    title: "Baju Kahwin Tailoring",
    description: "Elegant Malaysian bridal wear tailored to your measurements and style.",
    ctaText: "Book Now →",
    href: "/appointment?service=Baju%20Kahwin%20Tailoring",
    imageUrl: "/images/products/Baju Kahwin Tailoring.png",
    category: "Bridal & Malay Wear",
  },
  {
    id: "cat-04",
    itemNumber: "ITEM 04",
    title: "Jubah Tailoring",
    description: "Elegant Jubah designs tailored for comfort, modesty and style.",
    ctaText: "Book Now →",
    href: "/appointment?service=Jubah%20Tailoring",
    imageUrl: "/images/products/Jubah Tailoring.png",
    category: "Traditional Wear",
  },
  {
    id: "cat-05",
    itemNumber: "ITEM 05",
    title: "Ready-Made Saree Tailoring",
    description: "Beautiful saree styles with professional finishing and fitting.",
    ctaText: "Book Now →",
    href: "/appointment?service=Ready-Made%20Saree%20Tailoring",
    imageUrl: "/images/products/Ready-Made Saree Tailoring.png",
    category: "Traditional Wear",
  },
  {
    id: "cat-06",
    itemNumber: "ITEM 06",
    title: "Pathani Suit Tailoring",
    description: "Classic Pathani suits tailored for timeless style and comfort.",
    ctaText: "Book Now →",
    href: "/appointment?service=Pathani%20Suit%20Tailoring",
    imageUrl: "/images/products/Pathani Suit Tailoring.png",
    category: "Men's Wear",
  },
  {
    id: "cat-07",
    itemNumber: "ITEM 07",
    title: "Gharara & Sharara Tailoring",
    description: "Traditional silhouettes customised for an elegant and personalised fit.",
    ctaText: "Book Now →",
    href: "/appointment?service=Gharara%20%26%20Sharara%20Tailoring",
    imageUrl: "/images/products/Gharara & Sharara Tailoring.png",
    category: "Traditional & Festive",
  },
  {
    id: "cat-08",
    itemNumber: "ITEM 08",
    title: "Women Suit",
    description: "Professionally tailored women's suits designed for a polished, confident and sophisticated look.",
    ctaText: "Book Now →",
    href: "/appointment?service=Women%20Suit",
    imageUrl: "/images/products/Women Suit.png",
    category: "Women's Wear",
  },
  {
    id: "cat-09",
    itemNumber: "ITEM 09",
    title: "Baju Kurung Tailoring",
    description: "Traditional Malaysian Baju Kurung tailored with a personalised fit.",
    ctaText: "Book Now →",
    href: "/appointment?service=Baju%20Kurung%20Tailoring",
    imageUrl: "/images/products/Baju Kurung Tailoring.png",
    category: "Traditional Wear",
  },
  {
    id: "cat-10",
    itemNumber: "ITEM 10",
    title: "Waistcoat Tailoring",
    description: "Stylish waistcoats tailored to complement formal and traditional outfits.",
    ctaText: "Book Now →",
    href: "/appointment?service=Waistcoat%20Tailoring",
    imageUrl: "/images/products/Waistcoat Tailoring.png",
    category: "Men's Wear",
  },
  {
    id: "cat-11",
    itemNumber: "ITEM 11",
    title: "Modern Abaya Tailoring",
    description: "Contemporary Abaya designs tailored with elegance and comfort in mind.",
    ctaText: "Book Now →",
    href: "/appointment?service=Modern%20Abaya%20Tailoring",
    imageUrl: "/images/products/Modern Abaya Tailoring.png",
    category: "Modest Fashion",
  },
  {
    id: "cat-12",
    itemNumber: "ITEM 12",
    title: "Alteration & Fitting",
    description: "Professional alterations to refine the fit, length and finishing of your favourite outfits.",
    ctaText: "Book Now →",
    href: "/appointment?service=Alteration%20%26%20Fitting",
    imageUrl: "/images/products/Alteration & Fitting.png",
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
  "/images/instagram/insta-01.jpg",
  "/images/instagram/insta-02.jpg",
  "/images/instagram/insta-03.jpg",
  "/images/instagram/insta-04.jpg",
  "/images/instagram/insta-05.jpg",
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
    imageUrl: "/images/testimonials/shirley.jpg",
  },
  {
    id: "test-kim",
    name: "Kim",
    location: "Hongkong",
    role: "Custom Tailoring",
    text: "Ziya was exceptionally helpful and professional throughout my contact with her. Very happy and have passed Ziya’s contact details onto several friends after the positive experience. Very highly recommended and if I come again Singapore in the future Ziya will be the first person I contact in helping me make my dress.",
    imageUrl: "/images/testimonials/kim.jpg",
  },
  {
    id: "test-stella",
    name: "Stella",
    location: "USA",
    role: "Bridal Gown Order",
    text: "Ziya was very friendly, helpful and enthusiastic in helping me get my gown. She was very informative and kept me up to date with any news regarding my order status. Overall I am very pleased with the service I received and would definitely recommend and use Ziya Fashion again.",
    imageUrl: "/images/testimonials/stella.avif",
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
    instagram: "https://www.instagram.com/ziyaadmn?igsh=YXJyZnpuMWdiYnls",
    facebook: "https://www.facebook.com/ziyafashionsingapore/",
    youtube: "https://www.youtube.com/@MrAnjumjh",
    whatsapp: "https://wa.me/6583636036",
  },
};



