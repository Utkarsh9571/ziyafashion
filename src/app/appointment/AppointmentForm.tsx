"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, CheckCircle2, User, FileText, ArrowRight } from "lucide-react";

export default function AppointmentFormContent() {
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {isSubmitted ? (
        <div className="bg-[#f0fdf4] border-2 border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
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
              Your appointment request for <strong>{formData.appointmentType}</strong> on <strong>{formData.preferredDate || "your preferred date"}</strong> ({formData.preferredTime}) has been recorded.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 max-w-md mx-auto text-left text-xs text-neutral-600 space-y-2">
            <p><strong>Contact Email:</strong> {formData.email}</p>
            <p><strong>Contact Phone:</strong> {formData.phone}</p>
            {formData.occasion && <p><strong>Occasion:</strong> {formData.occasion}</p>}
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
              className="bg-[#ff5252] hover:bg-[#f03e3e] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-2xl space-y-8">
          <div className="border-b border-neutral-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff5252]">
              Atelier Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
              Appointment Request
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Please enter your details to reserve your private atelier session.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <User className="w-4 h-4 text-[#ff5252]" />
                <span>Personal Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff5252] focus:ring-2 focus:ring-[#ff5252]/20 outline-none text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff5252] focus:ring-2 focus:ring-[#ff5252]/20 outline-none text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff5252] focus:ring-2 focus:ring-[#ff5252]/20 outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#ff5252]" />
                <span>Preferences</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Service Type *</label>
                  <select
                    value={formData.appointmentType}
                    onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff5252] focus:ring-2 focus:ring-[#ff5252]/20 outline-none text-sm bg-white"
                  >
                    <option value="Custom Tailoring">Custom Tailoring</option>
                    <option value="Custom Design">Custom Design & Couture</option>
                    <option value="Alteration">Precision Alteration</option>
                    <option value="Style Consultation">Style & Fabric Consultation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff5252] focus:ring-2 focus:ring-[#ff5252]/20 outline-none text-sm bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Time Slot *</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff5252] focus:ring-2 focus:ring-[#ff5252]/20 outline-none text-sm bg-white"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#ff5252]" />
                <span>Occasion & Notes</span>
              </h3>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-700">Occasion / Details</label>
                <input
                  type="text"
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  placeholder="e.g. Wedding, Gala, Celebration, Daily custom tailoring"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff5252] focus:ring-2 focus:ring-[#ff5252]/20 outline-none text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-700">Additional Instructions</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Notes regarding measurements, styling, or inspirations..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#ff5252] focus:ring-2 focus:ring-[#ff5252]/20 outline-none text-sm resize-y"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff5252] hover:bg-[#f03e3e] text-white py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
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
