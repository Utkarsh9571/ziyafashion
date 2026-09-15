// Country phone validation specifications and regex utilities for quality lead capture

export interface CountryPhoneRule {
  code: string;        // e.g. "+65"
  country: string;     // e.g. "Singapore"
  flag: string;        // e.g. "🇸🇬"
  digits: number;      // Exact required digit count (e.g. 8 for Singapore, 10 for India/US/UK)
  sample: string;      // e.g. "8123 4567"
}

export const COUNTRY_PHONE_RULES: CountryPhoneRule[] = [
  { code: "+65", country: "Singapore", flag: "🇸🇬", digits: 8, sample: "81234567" },
  { code: "+91", country: "India", flag: "🇮🇳", digits: 10, sample: "9876543210" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾", digits: 10, sample: "123456789" },
  { code: "+1", country: "United States / Canada", flag: "🇺🇸", digits: 10, sample: "2025550143" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧", digits: 10, sample: "7911123456" },
  { code: "+61", country: "Australia", flag: "🇦🇺", digits: 9, sample: "412345678" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪", digits: 9, sample: "501234567" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰", digits: 10, sample: "3001234567" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩", digits: 10, sample: "1712345678" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩", digits: 10, sample: "81234567890" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰", digits: 8, sample: "91234567" },
];

/**
 * Validates full names (no numbers/digits permitted, only alphabetic characters, spaces, hyphens, and apostrophes)
 */
export function isValidName(name: string): boolean {
  const trimmed = name.trim();
  if (trimmed.length < 2) return false;
  // Disallow any digits 0-9
  if (/\d/.test(trimmed)) return false;
  // Match standard personal names
  const nameRegex = /^[a-zA-Z\s.'\-]+$/;
  return nameRegex.test(trimmed);
}

/**
 * Filter text to strip any digits on-the-fly while typing
 */
export function sanitizeNameInput(val: string): string {
  return val.replace(/[0-9]/g, "");
}

/**
 * Strict RFC 5322 compliant regex for quality lead email verification
 */
export const STRICT_EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  if (!trimmed || trimmed.length < 5) return false;
  if (!STRICT_EMAIL_REGEX.test(trimmed)) return false;
  
  // Additional safety: top-level domain should be at least 2 chars and not contain invalid characters
  const parts = trimmed.split("@");
  if (parts.length !== 2) return false;
  const domainParts = parts[1].split(".");
  const tld = domainParts[domainParts.length - 1];
  return tld.length >= 2;
}

/**
 * Sanitizes phone input so it only keeps raw digits
 */
export function sanitizePhoneDigits(val: string): string {
  return val.replace(/\D/g, "");
}
