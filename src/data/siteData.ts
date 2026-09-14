import { VERIFIED_CONTACT_INFO, TAILORING_SERVICES } from "./referenceData";

export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/designs" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const SERVICES_DATA = TAILORING_SERVICES;

export const BRAND_CONTACT_INFO = {
  brandName: "Ziya Fashion",
  tagline: "Singapore's Destination for Bespoke Tailoring & Timeless Style",
  address: VERIFIED_CONTACT_INFO.address,
  phone: VERIFIED_CONTACT_INFO.phone,
  email: VERIFIED_CONTACT_INFO.email,
  hours: VERIFIED_CONTACT_INFO.hours,
  socials: VERIFIED_CONTACT_INFO.socials,
};

