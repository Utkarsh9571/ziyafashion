"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Phone, Mail, MessageCircle, AlertCircle, Calendar, Clock, User } from "lucide-react";
import { VERIFIED_CONTACT_INFO } from "@/data/referenceData";
import {
  COUNTRY_PHONE_RULES,
  isValidName,
  sanitizeNameInput,
  isValidEmail,
  sanitizePhoneDigits,
} from "@/utils/validation";
import { submitLeadToGoogleSheet } from "@/services/leadService";

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
  const [selectedCountryCode, setSelectedCountryCode] = useState("+65");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: defaultService,
    preferredDate: "",
    preferredTime: "Morning (12:00 PM – 2:30 PM)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentRule =
    COUNTRY_PHONE_RULES.find((r) => r.code === selectedCountryCode) || COUNTRY_PHONE_RULES[0];

  // Handle Full Name Input (Reject Digits entirely)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeNameInput(e.target.value);
    setFormData((prev) => ({ ...prev, fullName: sanitized }));
  };

  // Handle Phone Number Input (Only digits, strictly capped by country rule)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = sanitizePhoneDigits(e.target.value);
    const capped = digitsOnly.slice(0, currentRule.digits);
    setFormData((prev) => ({ ...prev, phone: capped }));
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = e.target.value;
    setSelectedCountryCode(newCode);
    const newRule = COUNTRY_PHONE_RULES.find((r) => r.code === newCode) || COUNTRY_PHONE_RULES[0];
    setFormData((prev) => ({
      ...prev,
      phone: prev.phone.slice(0, newRule.digits),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // 1. Validate Name
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!isValidName(formData.fullName)) {
      setErrorMessage("Please enter a valid name without digits or special characters.");
      return;
    }

    // 2. Validate Email
    if (!isValidEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address (e.g. name@domain.com).");
      return;
    }

    // 3. Validate Phone Digits against Country Rule
    if (!formData.phone.trim()) {
      setErrorMessage(`Please enter your mobile number for ${currentRule.country}.`);
      return;
    }
    if (formData.phone.length !== currentRule.digits) {
      setErrorMessage(
        `For ${currentRule.country} (${currentRule.code}), the mobile number must be exactly ${currentRule.digits} digits without spaces. (You entered ${formData.phone.length} digits).`
      );
      return;
    }

    // 4. Validate Preferred Date & Time
    if (!formData.preferredDate) {
      setErrorMessage("Please select your preferred consultation date.");
      return;
    }

    // 5. Validate Message
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message or tailoring requirements.");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLeadToGoogleSheet({
        formType: "Enquiry",
        fullName: formData.fullName,
        email: formData.email,
        countryCode: selectedCountryCode,
        phone: formData.phone,
        fullPhone: `${selectedCountryCode} ${formData.phone}`,
        service: formData.service,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message,
      });

      setIsSubmitted(true);
    } catch {
      setErrorMessage("An unexpected error occurred. Please contact us via WhatsApp or Phone.");
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
              Your inquiry regarding <strong>{formData.service}</strong> scheduled for{" "}
              <strong>{formData.preferredDate}</strong> ({formData.preferredTime}) has been recorded. Our atelier team will contact you at{" "}
              <strong>
                {selectedCountryCode} {formData.phone}
              </strong>{" "}
              shortly.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/6583636036?text=Hi%20Ziya%20Fashion,%20my%20name%20is%20${encodeURIComponent(
                formData.fullName
              )}.%20I%20have%20submitted%20an%20enquiry%20for%20${encodeURIComponent(
                formData.service
              )}%20on%20${encodeURIComponent(formData.preferredDate)}%20(${encodeURIComponent(
                formData.preferredTime
              )}).%20My%20contact:%20${encodeURIComponent(selectedCountryCode + formData.phone)}`}
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
                  preferredDate: "",
                  preferredTime: "Morning (12:00 PM – 2:30 PM)",
                  message: "",
                });
              }}
              className="text-xs text-neutral-600 hover:text-neutral-900 font-semibold underline underline-offset-4 px-3 py-2"
            >
              Send another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span className="font-medium">{errorMessage}</span>
            </div>
          )}

          {/* Full Name & Email Fields */}
          <div className={`grid grid-cols-1 ${compact ? "sm:grid-cols-1" : "sm:grid-cols-2"} gap-4`}>
            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#ff7d86]" />
                <span>Full Name</span>
                <span className="text-[#ff7d86]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleNameChange}
                placeholder="Full Name (letters only)"
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400"
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#ff7d86]" />
                <span>Email Address</span>
                <span className="text-[#ff7d86]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400"
              />
            </div>
          </div>

          {/* Country Code + Mobile Number Field */}
          <div className={`grid grid-cols-1 ${compact ? "sm:grid-cols-1" : "sm:grid-cols-2"} gap-4`}>
            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-neutral-700 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#ff7d86]" />
                  <span>Mobile Number</span>
                  <span className="text-[#ff7d86]">*</span>
                </span>
                <span className="text-[10px] text-neutral-500 font-normal">
                  Req. {currentRule.digits} digits
                </span>
              </label>
              <div className="flex rounded-xl border border-neutral-300 focus-within:border-[#ff7d86] focus-within:ring-2 focus-within:ring-[#ff7d86]/20 overflow-hidden bg-white">
                <select
                  value={selectedCountryCode}
                  onChange={handleCountryCodeChange}
                  className="bg-neutral-50 border-r border-neutral-300 px-3 py-3 text-xs sm:text-sm font-semibold text-neutral-800 outline-none cursor-pointer max-w-[120px]"
                >
                  {COUNTRY_PHONE_RULES.map((c) => (
                    <option key={c.code + c.country} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  maxLength={currentRule.digits}
                  placeholder={`e.g. ${currentRule.sample}`}
                  className="w-full px-3.5 py-3 outline-none text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400"
                />
              </div>
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-neutral-700">
                Service / Topic of Interest <span className="text-[#ff7d86]">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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

          {/* Date & Time Fields */}
          <div className={`grid grid-cols-1 ${compact ? "sm:grid-cols-1" : "sm:grid-cols-2"} gap-4`}>
            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#ff7d86]" />
                <span>Preferred Date</span>
                <span className="text-[#ff7d86]">*</span>
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-xs sm:text-sm text-neutral-900 bg-white"
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#ff7d86]" />
                <span>Preferred Time Slot</span>
                <span className="text-[#ff7d86]">*</span>
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-xs sm:text-sm text-neutral-900 bg-white"
              >
                <option value="Morning (12:00 PM – 2:30 PM)">12:00 PM – 2:30 PM (Afternoon)</option>
                <option value="Afternoon (2:30 PM – 5:00 PM)">2:30 PM – 5:00 PM (Tea Time)</option>
                <option value="Evening (5:00 PM – 7:00 PM)">5:00 PM – 7:00 PM (Evening)</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-1 text-left">
            <label className="text-xs font-semibold text-neutral-700">
              Your Message or Requirements <span className="text-[#ff7d86]">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your garment, measurements, style ideas, or fitting requirements..."
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 resize-y"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#ff7d86] hover:bg-[#e85661] text-white py-3.5 sm:py-4 px-6 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Verifying &amp; Submitting...</span>
              ) : (
                <>
                  <span>Submit Quality Inquiry</span>
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
          <span>Direct Contact:</span>
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
