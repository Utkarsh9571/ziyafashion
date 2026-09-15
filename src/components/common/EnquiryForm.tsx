"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Phone, Mail, MessageCircle, AlertCircle } from "lucide-react";
import { VERIFIED_CONTACT_INFO } from "@/data/referenceData";

interface EnquiryFormProps {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  className?: string;
  compact?: boolean;
}

export default function EnquiryForm({
  title = "Have a Question?",
  subtitle = "Whether you are looking for tailoring advice, alterations, or a custom garment, we would be happy to hear from you.",
  defaultService = "General Tailoring Inquiry",
  className = "",
  compact = false,
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // NOTE: Form state handling. When a backend mailer/API (e.g. Next.js server action/API route)
      // is connected with production mail credentials, the fetch call can be dispatched here.
      console.log("Enquiry Form Submission:", formData);

      // Simulate local state transition
      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsSubmitted(true);
    } catch {
      setErrorMessage("An unexpected error occurred. Please try contacting us via WhatsApp or Phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 border border-neutral-200/90 shadow-xl ${className}`}
    >
      <div className="mb-6 sm:mb-8 text-left">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ff7d86]">
          GET IN TOUCH
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight mt-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {isSubmitted ? (
        <div className="bg-[#f0fdf4] border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-bold text-neutral-900">Thank You, {formData.fullName}!</h4>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Your inquiry regarding <strong>{formData.service}</strong> has been received. Our atelier team will review your message and reach out shortly.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/6583636036?text=Hi%20Ziya%20Fashion,%20my%20name%20is%20${encodeURIComponent(
                formData.fullName
              )}.%20I%20have%20an%20enquiry%20about%20${encodeURIComponent(formData.service)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  service: defaultService,
                  message: "",
                });
              }}
              className="text-xs text-neutral-600 hover:text-neutral-900 font-semibold underline underline-offset-4 px-3 py-2"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className={`grid grid-cols-1 ${compact ? "sm:grid-cols-1" : "sm:grid-cols-2"} gap-4`}>
            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-neutral-700">
                Full Name <span className="text-[#ff7d86]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400"
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-neutral-700">
                Email Address <span className="text-[#ff7d86]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400"
              />
            </div>
          </div>

          <div className={`grid grid-cols-1 ${compact ? "sm:grid-cols-1" : "sm:grid-cols-2"} gap-4`}>
            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-neutral-700">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+65 ..."
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400"
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-neutral-700">
                Service / Topic of Interest
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-xs sm:text-sm text-neutral-900 bg-white"
              >
                <option value="General Tailoring Inquiry">General Tailoring Inquiry</option>
                <option value="Bespoke & Made-to-Measure">Bespoke &amp; Made-to-Measure</option>
                <option value="Custom Tailoring">Custom Tailoring</option>
                <option value="Bridal & Wedding Wear">Bridal &amp; Wedding Wear</option>
                <option value="Indian & Malay Wear">Indian &amp; Malay Wear</option>
                <option value="Alteration & Adjustment">Alteration &amp; Adjustment</option>
                <option value="Fittings & Finishing">Fittings &amp; Finishing</option>
              </select>
            </div>
          </div>

          <div className="space-y-1 text-left">
            <label className="text-xs font-semibold text-neutral-700">
              Your Message or Requirements <span className="text-[#ff7d86]">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your garment, style ideas, or fitting requirements..."
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 resize-y"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#ff7d86] hover:bg-[#e85661] text-white py-3.5 sm:py-4 px-6 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Sending Inquiry...</span>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Direct Contact Bar */}
      <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[#ff7d86]" />
          <span>Call or WhatsApp:</span>
          <a
            href="tel:+6583636036"
            className="font-bold text-neutral-800 hover:text-[#ff7d86] transition-colors"
          >
            {VERIFIED_CONTACT_INFO.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-[#ff7d86]" />
          <a
            href={`mailto:${VERIFIED_CONTACT_INFO.email}`}
            className="font-bold text-neutral-800 hover:text-[#ff7d86] transition-colors"
          >
            {VERIFIED_CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </div>
  );
}
