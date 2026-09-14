"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface ServiceSelectDropdownProps {
  redirectPrefix?: string;
  className?: string;
}

export default function ServiceSelectDropdown({
  redirectPrefix = "",
  className = "",
}: ServiceSelectDropdownProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) return;
    if (redirectPrefix) {
      window.location.href = `${redirectPrefix}#${value}`;
    } else {
      const el = document.getElementById(value);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <select
        onChange={handleChange}
        defaultValue=""
        className="appearance-none bg-white/20 hover:bg-white/30 text-white border border-white/35 px-6 py-3.5 pr-10 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md outline-none cursor-pointer transition-all shadow-md"
        aria-label="Select Service Category"
      >
        <option value="" disabled className="text-neutral-900 bg-white">
          Select Service
        </option>
        <option value="bespoke-made-to-measure" className="text-neutral-900 bg-white">
          Bespoke &amp; Made-to-Measure
        </option>
        <option value="custom-tailoring-design" className="text-neutral-900 bg-white">
          Custom Tailoring &amp; Design
        </option>
        <option value="bridal-wedding-wear" className="text-neutral-900 bg-white">
          Bridal &amp; Wedding Wear
        </option>
        <option value="indian-malay-traditional-wear" className="text-neutral-900 bg-white">
          Traditional Wear
        </option>
        <option value="alterations-restyling" className="text-neutral-900 bg-white">
          Alterations &amp; Restyling
        </option>
      </select>
      <ChevronDown className="w-4 h-4 text-white absolute right-4 pointer-events-none" />
    </div>
  );
}
