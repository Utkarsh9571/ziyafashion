"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Clock, Sparkles, CheckCircle2, User, Phone, Mail, FileText, ArrowRight } from "lucide-react";

function AppointmentFormContent() {
  const searchParams = useSearchParams();
  const prefillService = searchParams.get("service") || "";
  const prefillDesign = searchParams.get("design") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    appointmentType: "Custom Tailoring",
    preferredDate: "",
    preferredTime: "Morning (10:00 AM – 1:00 PM)",
    occasion: "",
    notes: "",
  });

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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated submission handler ready for backend/API connection
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#e84e4e] to-[#dc4040] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-white/30">
            <Calendar className="w-3.5 h-3.5 text-white" />
            <span>Atelier Appointment Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight max-w-2xl mx-auto">
            Book a Tailoring Appointment
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto font-light leading-relaxed">
            Schedule a private one-on-one session at Ziya Fashion for custom tailoring, couture design consultations, or fittings.
          </p>
        </div>
      </section>

      {/* Main Appointment Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isSubmitted ? (
            <div className="bg-[#f0fdf4] border-2 border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Request Confirmed
                </span>
                <h2 className="text-3xl font-bold font-serif text-neutral-900">
                  Thank You, {formData.fullName}!
                </h2>
                <p className="text-neutral-600 text-sm max-w-md mx-auto">
                  Your appointment request for <strong>{formData.appointmentType}</strong> on <strong>{formData.preferredDate || "your preferred date"}</strong> ({formData.preferredTime}) has been recorded.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-emerald-100 max-w-md mx-auto text-left text-xs text-neutral-600 space-y-2">
                <p><strong>Contact Email:</strong> {formData.email}</p>
                <p><strong>Contact Phone:</strong> {formData.phone}</p>
                {formData.occasion && <p><strong>Occasion:</strong> {formData.occasion}</p>}
                <p className="pt-2 text-neutral-400 border-t border-neutral-100">
                  * Our concierge will reach out via phone or email to confirm your exact studio time slot.
                </p>
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
                      preferredTime: "Morning (10:00 AM – 1:00 PM)",
                      occasion: "",
                      notes: "",
                    });
                  }}
                  className="bg-[#e84e4e] hover:bg-[#d83c3c] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-2xl space-y-8">
              
              <div className="border-b border-neutral-100 pb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e84e4e]">
                  Step 1 of 1 — Appointment Request
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-neutral-900 mt-1">
                  Tell Us About Your Requirements
                </h2>
                <p className="text-neutral-500 text-sm mt-1">
                  Please provide your contact information and preferences so we can prepare for your visit.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Personal Details */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#e84e4e]" />
                    <span>Personal Information</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Service & Timing Details */}
                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#e84e4e]" />
                    <span>Appointment Preferences</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        Appointment Type *
                      </label>
                      <select
                        value={formData.appointmentType}
                        onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm bg-white"
                      >
                        <option value="Custom Tailoring">Custom Tailoring</option>
                        <option value="Custom Design">Custom Design & Couture</option>
                        <option value="Alteration">Precision Alteration</option>
                        <option value="Style Consultation">Style & Fabric Consultation</option>
                        <option value="Bridal Fitting">Bridal Consultation</option>
                        <option value="Other">Other Bespoke Requirement</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm bg-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        Preferred Time Slot *
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm bg-white"
                      >
                        <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                        <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Occasion & Design Notes */}
                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#e84e4e]" />
                    <span>Garment Requirements</span>
                  </h3>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">
                      Occasion / Target Date (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      placeholder="e.g. Wedding celebration on November 20th, Festival, Gala, Everyday bespoke"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">
                      Additional Notes / Silhouette Preferences
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Describe any fabric preferences, cuts, or specific details you would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#e84e4e] focus:ring-2 focus:ring-[#e84e4e]/20 outline-none text-sm resize-y"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#e84e4e] hover:bg-[#d83c3c] text-white py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <span>Submit Appointment Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-neutral-400 mt-3">
                    No payment required for booking appointment request. Confirmation is subject to atelier schedule.
                  </p>
                </div>

              </form>

            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-neutral-400">Loading appointment portal...</div>}>
      <AppointmentFormContent />
    </Suspense>
  );
}
