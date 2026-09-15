"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, CheckCircle2, User, FileText, ArrowRight, Phone, Mail, Clock, AlertCircle } from "lucide-react";
import {
  COUNTRY_PHONE_RULES,
  isValidName,
  sanitizeNameInput,
  isValidEmail,
  sanitizePhoneDigits,
} from "@/utils/validation";
import { submitLeadToGoogleSheet } from "@/services/leadService";

export default function AppointmentFormContent() {
  const searchParams = useSearchParams();
  const prefillService = searchParams.get("service") || "";
  const prefillDesign = searchParams.get("design") || "";

  const [selectedCountryCode, setSelectedCountryCode] = useState("+65");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    appointmentType: "Custom Tailoring",
    preferredDate: "",
    preferredTime: "Morning (12:00 PM – 2:30 PM)",
    occasion: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentRule =
    COUNTRY_PHONE_RULES.find((r) => r.code === selectedCountryCode) || COUNTRY_PHONE_RULES[0];

  useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({ ...prev, appointmentType: prefillService }));
    } else if (prefillDesign) {
      setFormData((prev) => ({
        ...prev,
        appointmentType: "Custom Design",
        notes: `Interested in bespoke creation inspired by: ${prefillDesign}`,
      }));
    }
  }, [prefillService, prefillDesign]);

  // Name handler — strictly prevent digits
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeNameInput(e.target.value);
    setFormData((prev) => ({ ...prev, fullName: sanitized }));
  };

  // Phone handler — strictly numbers only, capped to country digits
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

    // 3. Validate Phone Digits
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

    setIsSubmitting(true);

    try {
      await submitLeadToGoogleSheet({
        formType: "Appointment",
        fullName: formData.fullName,
        email: formData.email,
        countryCode: selectedCountryCode,
        phone: formData.phone,
        fullPhone: `${selectedCountryCode} ${formData.phone}`,
        service: formData.appointmentType,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        occasion: formData.occasion,
        message: formData.notes,
      });

      setIsSubmitted(true);
    } catch {
      setErrorMessage("An unexpected error occurred. Please contact us via WhatsApp or Phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {isSubmitted ? (
        <div className="bg-[#f0fdf4] border-2 border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl animate-in fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Request Confirmed
            </span>
            <h2 className="text-3xl font-bold text-neutral-900">
              Thank You, {formData.fullName}!
            </h2>
            <p className="text-neutral-600 text-sm max-w-md mx-auto">
              Your appointment request for <strong>{formData.appointmentType}</strong> on{" "}
              <strong>{formData.preferredDate}</strong> ({formData.preferredTime}) has been recorded.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 max-w-md mx-auto text-left text-xs text-neutral-600 space-y-2 shadow-sm">
            <p>
              <strong>Contact Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Contact Phone:</strong> {selectedCountryCode} {formData.phone}
            </p>
            {formData.occasion && (
              <p>
                <strong>Occasion:</strong> {formData.occasion}
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  phone: "",
                  email: "",
                  appointmentType: "Custom Tailoring",
                  preferredDate: "",
                  preferredTime: "Morning (12:00 PM – 2:30 PM)",
                  occasion: "",
                  notes: "",
                });
              }}
              className="bg-[#ff7d86] hover:bg-[#e85661] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-2xl space-y-8">
          <div className="border-b border-neutral-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff7d86]">
              Atelier Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
              Book a Fitting &amp; Consultation
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Please enter your details to reserve your private atelier session with our master tailor.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                <span className="font-medium">{errorMessage}</span>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <User className="w-4 h-4 text-[#ff7d86]" />
                <span>Personal &amp; Contact Details</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleNameChange}
                    placeholder="Full Name (no digits)"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-sm text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>

                {/* Country code + Mobile Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700 flex items-center justify-between">
                    <span>Mobile Number *</span>
                    <span className="text-[10px] text-neutral-500 font-normal">
                      {currentRule.digits} digits
                    </span>
                  </label>
                  <div className="flex rounded-xl border border-neutral-300 focus-within:border-[#ff7d86] focus-within:ring-2 focus-within:ring-[#ff7d86]/20 overflow-hidden bg-white">
                    <select
                      value={selectedCountryCode}
                      onChange={handleCountryCodeChange}
                      className="bg-neutral-50 border-r border-neutral-300 px-2.5 py-3 text-xs sm:text-sm font-semibold text-neutral-800 outline-none cursor-pointer max-w-[110px]"
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
                      className="w-full px-3.5 py-3 outline-none text-sm text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-sm text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#ff7d86]" />
                <span>Appointment Preferences</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Service Type *</label>
                  <select
                    value={formData.appointmentType}
                    onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-sm bg-white text-neutral-900"
                  >
                    <option value="Custom Tailoring">Custom Tailoring</option>
                    <option value="Bespoke & Made-to-Measure">Bespoke &amp; Made-to-Measure</option>
                    <option value="Bridal & Wedding Wear">Bridal &amp; Wedding Wear</option>
                    <option value="Indian & Malay Wear">Indian &amp; Malay Wear</option>
                    <option value="Alteration & Adjustment">Alteration &amp; Adjustment</option>
                    <option value="Fittings & Finishing">Fittings &amp; Finishing</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-sm bg-white text-neutral-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Time Slot *</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-sm bg-white text-neutral-900"
                  >
                    <option value="Afternoon (12:00 PM – 2:30 PM)">12:00 PM – 2:30 PM (Afternoon)</option>
                    <option value="Tea Time (2:30 PM – 5:00 PM)">2:30 PM – 5:00 PM (Tea Time)</option>
                    <option value="Evening (5:00 PM – 7:00 PM)">5:00 PM – 7:00 PM (Evening)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#ff7d86]" />
                <span>Occasion &amp; Custom Notes</span>
              </h3>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-700">Occasion / Details</label>
                <input
                  type="text"
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  placeholder="e.g. Wedding, Gala, Festive, Corporate or Casual wear"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-sm text-neutral-900 placeholder:text-neutral-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-700">Additional Instructions</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about specific measurements, fabrics, or style requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff7d86] focus:ring-2 focus:ring-[#ff7d86]/20 outline-none text-sm text-neutral-900 placeholder:text-neutral-400 resize-y"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff7d86] hover:bg-[#e85661] text-white py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Verifying &amp; Submitting...</span>
                ) : (
                  <>
                    <span>Submit Appointment Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
